import React, { Component } from 'react'
import UserTile from '../components/UserTile'
import UserDeletionTile from '../components/UserDeletionTile'

class UsersIndexContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			users: [],
			idToDelete: '',
			nameToDelete: '',
			deletionSuccessMessage: ''
		}
		this.deleteFromDatabase = this.deleteFromDatabase.bind(this)
		this.showDeletionTile = this.showDeletionTile.bind(this)
		this.hideDeletionTile = this.hideDeletionTile.bind(this)
		this.showDeletionSuccessMessage = this.showDeletionSuccessMessage.bind(this)
	}

	componentDidMount() {
		fetch('/api/v1/users')
		.then(response => {
			if (response.ok) {
				return response
			} else {
				let errorMessage = `${response.status} (${response.statusText})`,
				error = new Error(errorMessage)
				throw(error)
			}
		})
		.then(response => response.json())
		.then(body => {
			this.setState({ users: body })
		})
		.catch(error => console.error(`Error in fetch: ${error.message}`))
	}

	deleteFromDatabase() {
		if (window.confirm('Delete?')) {
			fetch(`/api/v1/users/${this.state.idToDelete}`, {
				method: 'DELETE',
				credentials: 'same-origin',
	        	headers: {'Content-Type': 'application/json'}
			})
			.then(response => {
				if (response.ok) {
					return response
				} else {
					let errorMessage = `${response.status} (${response.statusText})`,
					error = new Error(errorMessage)
					throw(error)
				}
			})
			.then(response => response.json())
			.then(body => {
				let updatedUsers = []
				let i
				for (i = 0; i < this.state.users.length; i++) {
					if (this.state.users[i].id !== body.user.id) {
						updatedUsers.push(this.state.users[i])
					}
				}
				this.setState({ users: updatedUsers })
			})
			.catch(error => console.error(`Error in fetch: ${error.message}`))
			this.hideDeletionTile()
			this.showDeletionSuccessMessage()
		}
	}

	showDeletionTile(id, name) {
		this.setState({
			idToDelete: id,
			nameToDelete: name,
			deletionSuccessMessage: ''
		})
	}

	hideDeletionTile() {
		this.setState({ idToDelete: '', nameToDelete: '' })
	}

	showDeletionSuccessMessage() {
		this.setState({ deletionSuccessMessage: 'User deleted' })
	}

	render() {
		let successDiv
		let display
		if (this.state.idToDelete === '' && this.state.nameToDelete === '') {
			display = this.state.users.map(user => {
				return (
					<UserTile
						key={user.id}
						id={user.id}
						username={user.username}
						email={user.email}
						role={user.role}
						showDeletionTile={this.showDeletionTile}
					/>
				)
			})
		} else {
			display =
				<UserDeletionTile
					key={this.state.idToDelete}
					id={this.state.idToDelete}
					username={this.state.nameToDelete}
					deleteFromDatabase={this.deleteFromDatabase}
					hideDeletionTile={this.hideDeletionTile}
					showDeletionSuccessMessage={this.showDeletionSuccessMessage}
				/>
		}
		if (this.state.deletionSuccessMessage !== '') {
			successDiv =
				<div className="success-div">
					{this.state.deletionSuccessMessage}
				</div>
		}

		return (
			<div>
				<h2>Users</h2>
				{successDiv}
				{display}
			</div>
		)
	}
}

export default UsersIndexContainer