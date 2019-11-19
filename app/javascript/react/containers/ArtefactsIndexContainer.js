import React, { Component } from 'react'
import ArtefactTile from '../components/ArtefactTile'
import ArtefactDeletionTile from '../components/ArtefactDeletionTile'

class ArtefactsIndexContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			artefacts: [],
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
		fetch('/api/v1/artefacts')
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
			this.setState({ artefacts: body })
		})
		.catch(error => console.error(`Error in fetch: ${error.message}`))
	}

	deleteFromDatabase() {
		if (window.confirm('Delete?')) {
			fetch(`/api/v1/artefacts/${this.state.idToDelete}`, {
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
				let updatedArtefacts = []
				let i
				for (i = 0; i < this.state.artefacts.length; i++) {
					if (this.state.artefacts[i].id !== body.artefact.id) {
						updatedArtefacts.push(this.state.artefacts[i])
					}
				}
				this.setState({ artefacts: updatedArtefacts })
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
		this.setState({ deletionSuccessMessage: 'Artefact deleted' })
	}

	render() {
		let successDiv
		let display
		if (this.state.idToDelete === '' && this.state.nameToDelete === '') {
			display = this.state.artefacts.map(artefact => {
				return (
					<span key={artefact.id} className="align-left">
						<ArtefactTile
							key={artefact.id}
							id={artefact.id}
							artefact={artefact}
							showDeletionTile={this.showDeletionTile}
						/>
					</span>
				)
			})
		} else {
			display =
				<ArtefactDeletionTile
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
				<h2>Artefacts</h2>
				{successDiv}
				{display}
			</div>
		)
	}
}

export default ArtefactsIndexContainer
