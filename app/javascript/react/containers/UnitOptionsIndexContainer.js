import React, { Component } from 'react'
import UnitOptionTile from '../components/UnitOptionTile'
import UnitOptionDeletionTile from '../components/UnitOptionDeletionTile'

class UnitOptionsIndexContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			unitOptions: [],
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
		fetch('/api/v1/unit_options')
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
			this.setState({ unitOptions: body })
		})
		.catch(error => console.error(`Error in fetch: ${error.message}`))
	}

	deleteFromDatabase() {
		if (window.confirm('Delete?')) {
			fetch(`/api/v1/unit_options/${this.state.idToDelete}`, {
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
				let updatedUnitOptions = []
				let i
				for (i = 0; i < this.state.unitOptions.length; i++) {
					if (this.state.unitOptions[i].id !== body.unit_option.id) {
						updatedUnitOptions.push(this.state.unitOptions[i])
					}
				}
				this.setState({ unitOptions: updatedUnitOptions })
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
		this.setState({ deletionSuccessMessage: 'Unit Option deleted' })
	}

	render() {
		let successDiv
		let display
		if (this.state.idToDelete === '' && this.state.nameToDelete === '') {
			display = this.state.unitOptions.map(unitOption => {
				return (
					<span key={unitOption.id} className="align-left">
						<UnitOptionTile
							key={unitOption.id}
							id={unitOption.id}
							unitOption={unitOption}
							showDeletionTile={this.showDeletionTile}
						/>
					</span>
				)
			})
		} else {
			display =
				<UnitOptionDeletionTile
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
				<h2>Unit Options</h2>
				{successDiv}
				{display}
			</div>
		)
	}
}

export default UnitOptionsIndexContainer
