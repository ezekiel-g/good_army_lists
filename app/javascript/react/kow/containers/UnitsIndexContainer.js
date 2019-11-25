import React, { Component } from 'react'
import UnitTile from '../components/UnitTile'
import UnitDeletionTile from '../components/UnitDeletionTile'

class UnitsIndexContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			units: [],
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
		fetch('/api/v1/units')
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
			let sortedUnits = body.sort((a, b) => {
				return (a.army_id - b.army_id)
			})

			this.setState({ units: sortedUnits })
		})
		.catch(error => console.error(`Error in fetch: ${error.message}`))
	}

	deleteFromDatabase() {
		if (window.confirm('Delete?')) {
			fetch(`/api/v1/units/${this.state.idToDelete}`, {
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
				let updatedUnits = []
				let i
				for (i = 0; i < this.state.units.length; i++) {
					if (this.state.units[i].id !== body.unit.id) {
						updatedUnits.push(this.state.units[i])
					}
				}
				this.setState({ units: updatedUnits })
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
		this.setState({ deletionSuccessMessage: 'Unit deleted' })
	}

	render() {
		let successDiv
		let display
		if (this.state.idToDelete === '' && this.state.nameToDelete === '') {
			display = this.state.units.map(unit => {
				return (
					<span key={unit.id} className="align-left">
						<UnitTile
							key={unit.id}
							id={unit.id}
							unit={unit}
							showDeletionTile={this.showDeletionTile}
						/>
					</span>
				)
			})
		} else {
			display =
				<UnitDeletionTile
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
				<h2>Units</h2>
				{successDiv}
				{display}
			</div>
		)
	}
}

export default UnitsIndexContainer
