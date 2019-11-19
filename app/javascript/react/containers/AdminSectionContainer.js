import React, { Component } from 'react'
import ArmiesIndexContainer from './ArmiesIndexContainer'
import ArmiesFormContainer from './ArmiesFormContainer'
import ArmyUpdateFormContainer from './ArmyUpdateFormContainer'
import ArtefactsIndexContainer from './ArtefactsIndexContainer'
import ArtefactsFormContainer from './ArtefactsFormContainer'
import ArtefactUpdateFormContainer from './ArtefactUpdateFormContainer'
import UnitsIndexContainer from './UnitsIndexContainer'
import UnitsFormContainer from './UnitsFormContainer'
import UnitUpdateFormContainer from './UnitUpdateFormContainer'
import UnitOptionsIndexContainer from './UnitOptionsIndexContainer'
import UnitOptionsFormContainer from './UnitOptionsFormContainer'
import UnitOptionUpdateFormContainer from './UnitOptionUpdateFormContainer'

class AdminSectionContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			display: 'armiesFormContainer'
		}
		this.showArmiesIndexContainer = this.showArmiesIndexContainer.bind(this)
		this.showArmiesFormContainer = this.showArmiesFormContainer.bind(this)
		this.showArmyUpdateFormContainer = this.showArmyUpdateFormContainer.bind(this)
		this.showArtefactsIndexContainer = this.showArtefactsIndexContainer.bind(this)
		this.showArtefactsFormContainer = this.showArtefactsFormContainer.bind(this)
		this.showArtefactUpdateFormContainer = this.showArtefactUpdateFormContainer.bind(this)
		this.showUnitsIndexContainer = this.showUnitsIndexContainer.bind(this)
		this.showUnitsFormContainer = this.showUnitsFormContainer.bind(this)
		this.showUnitUpdateFormContainer = this.showUnitUpdateFormContainer.bind(this)
		this.showUnitOptionsIndexContainer = this.showUnitOptionsIndexContainer.bind(this)
		this.showUnitOptionsFormContainer = this.showUnitOptionsFormContainer.bind(this)
		this.showUnitOptionUpdateFormContainer = this.showUnitOptionUpdateFormContainer.bind(this)
	}

	showArmiesIndexContainer() {
		this.setState({ display: 'armiesIndexContainer' })
	}

	showArmiesFormContainer() {
		this.setState({ display: 'armiesFormContainer' })
	}

	showArmyUpdateFormContainer() {
		this.setState({ display: 'armyUpdateFormContainer' })
	}

	showArtefactsIndexContainer() {
		this.setState({ display: 'artefactsIndexContainer' })
	}

	showArtefactsFormContainer() {
		this.setState({ display: 'artefactsFormContainer' })
	}

	showArtefactUpdateFormContainer() {
		this.setState({ display: 'artefactUpdateFormContainer' })
	}

	showUnitsIndexContainer() {
		this.setState({ display: 'unitsIndexContainer' })
	}

	showUnitsFormContainer() {
		this.setState({ display: 'unitsFormContainer' })
	}

	showUnitUpdateFormContainer() {
		this.setState({ display: 'unitUpdateFormContainer' })
	}

	showUnitOptionsIndexContainer() {
		this.setState({ display: 'unitOptionsIndexContainer' })
	}

	showUnitOptionsFormContainer() {
		this.setState({ display: 'unitOptionsFormContainer' })
	}

	showUnitOptionUpdateFormContainer() {
		this.setState({ display: 'unitOptionUpdateFormContainer' })
	}

	render() {
		let display	
		if (this.state.display === 'armiesIndexContainer') {
			display = <ArmiesIndexContainer />
		}
		if (this.state.display === 'armiesFormContainer') {
			display = <ArmiesFormContainer />
		}
		if (this.state.display === 'armyUpdateFormContainer') {
			display = <ArmyUpdateFormContainer />
		}
		if (this.state.display === 'artefactsIndexContainer') {
			display = <ArtefactsIndexContainer />
		}
		if (this.state.display === 'artefactsFormContainer') {
			display = <ArtefactsFormContainer />
		}
		if (this.state.display === 'artefactUpdateFormContainer') {
			display = <ArtefactUpdateFormContainer />
		}
		if (this.state.display === 'unitsIndexContainer') {
			display = <UnitsIndexContainer />
		}
		if (this.state.display === 'unitsFormContainer') {
			display = <UnitsFormContainer />
		}
		if (this.state.display === 'unitUpdateFormContainer') {
			display = <UnitUpdateFormContainer />
		}
		if (this.state.display === 'unitOptionsIndexContainer') {
			display = <UnitOptionsIndexContainer />
		}
		if (this.state.display === 'unitOptionsFormContainer') {
			display = <UnitOptionsFormContainer />
		}
		if (this.state.display === 'unitOptionUpdateFormContainer') {
			display = <UnitOptionUpdateFormContainer />
		}			

		let links = document.getElementsByClassName('admin-link')
		let i
		for (i = 0; i < links.length; i++) {
			let linkName = links[i].getAttribute('name')
			if (linkName === this.state.display) {
				links[i].classList.add('selected-link')
			} else {
				links[i].classList.remove('selected-link')
			}
		}

		return (
			<div className="admin-display-box">
				<div className="display-box">{display}</div><br />
				<div className="navigation-box">
					<div 
						onClick={this.showArmiesIndexContainer}
						name="armiesIndexContainer"
						className="admin-link"
					>
						All Armies
					</div>
					<div
						onClick={this.showArmiesFormContainer}
						name="armiesFormContainer"
						className="admin-link selected-link"
					>
						Add Army
					</div>
					<div
						onClick={this.showArmyUpdateFormContainer}
						name="armyUpdateFormContainer"
						className="admin-link"
					>
						Update Army
					</div>
				</div>
				<div className="navigation-box">
					<div
						onClick={this.showUnitsIndexContainer}
						name="unitsIndexContainer"
						className="admin-link"
					>
						All Units
					</div>
					<div
						onClick={this.showUnitsFormContainer}
						name="unitsFormContainer"
						className="admin-link"
					>
						Add Unit
					</div>
					<div
						onClick={this.showUnitUpdateFormContainer}
						name="unitUpdateFormContainer"
						className="admin-link"
					>
						Update Unit
					</div>
				</div>
				<div className="navigation-box">
					<div
						onClick={this.showArtefactsIndexContainer}
						name="artefactsIndexContainer"
						className="admin-link"
					>
						All Artefacts
					</div>
					<div
						onClick={this.showArtefactsFormContainer}
						name="artefactsFormContainer"
						className="admin-link"
					>
						Add Artefact
					</div>
					<div
						onClick={this.showArtefactUpdateFormContainer}
						name="artefactUpdateFormContainer"
						className="admin-link"
					>
						Update Artefact
					</div>
				</div>
				<div className="navigation-box">
					<div
						onClick={this.showUnitOptionsIndexContainer}
						name="unitOptionsIndexContainer"
						className="admin-link"
					>
						All Unit Options
					</div>
					<div
						onClick={this.showUnitOptionsFormContainer}
						name="unitOptionsFormContainer"
						className="admin-link"
					>
						Add New Unit Option
					</div>
					<div
						onClick={this.showUnitOptionUpdateFormContainer}
						name="unitOptionUpdateFormContainer"
						className="admin-link"
					>
						Update Unit Option
					</div>
				</div>
			</div>
		)
	}
}

export default AdminSectionContainer