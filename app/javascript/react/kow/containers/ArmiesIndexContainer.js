import React, { Component } from 'react'
import ArmyTile from '../components/ArmyTile'
import ArmyDeletionTile from '../components/ArmyDeletionTile'

class ArmiesIndexContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			armies: [],
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
		fetch('/api/v1/armies')
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
			this.setState({ armies: body })
		})
		.catch(error => console.error(`Error in fetch: ${error.message}`))
	}

	deleteFromDatabase() {
		if (window.confirm('Delete?')) {
			fetch(`/api/v1/armies/${this.state.idToDelete}`, {
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
				let updatedArmies = []
				let i
				for (i = 0; i < this.state.armies.length; i++) {
					if (this.state.armies[i].id !== body.army.id) {
						updatedArmies.push(this.state.armies[i])
					}
				}
				this.setState({ armies: updatedArmies })
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
		this.setState({ deletionSuccessMessage: 'Army deleted' })
	}

	render() {
		let successDiv
		let display
		if (this.state.idToDelete === '' && this.state.nameToDelete === '') {
			display = this.state.armies.map(army => {
				return (
					<span key={army.id} className="align-left">
						<ArmyTile
							key={army.id}
							id={army.id}
							name={army.name}
							alignment={army.alignment}
							showDeletionTile={this.showDeletionTile}
						/>
					</span>
				)
			})
		} else {
			display =
				<ArmyDeletionTile
					key={this.state.idToDelete}
					id={this.state.idToDelete}
					name={this.state.nameToDelete}
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
				<h2>Armies</h2>
				{successDiv}
				{display}
			</div>
		)
	}
}

export default ArmiesIndexContainer
