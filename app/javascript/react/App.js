import React, { Component } from 'react'
import { render } from 'react-dom'
import RedBox from 'redbox-react'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}

	render() {
		return (
			<div className="main-page">
				<div className="main-page-box">
					<div className="main-page-title-box">
						<h2 className="main-page-title">Make a Good Army List</h2>
					</div>
					<div className="main-page-games">
						<div className="main-page-game">
							<span className="main-page-game-label">
								<a href="/kow">Kings of War</a>
							</span>
						</div>
					</div>
				</div>
				<div className="email-div">
					<span className="user-select-none">Email:{' '}</span>admin@goodarmylists.com
				</div>
			</div>
		)
	}
}

export default App