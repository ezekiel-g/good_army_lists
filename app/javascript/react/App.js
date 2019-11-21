import React, { Component } from 'react'
import AdminSectionContainer from './containers/AdminSectionContainer'
import NonAdminSectionContainer from './containers/NonAdminSectionContainer'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}

	render() {
		const dropdownStyle = {
			control: (base, state) => ({
				...base,
				bodShadow: 'none',
				boxShadow: state.isFocused ? 0 : 0,
				cursor: 'text',
				borderRadius: 0,
				border: state.isOpen ? '#000000' : '#000000'
			}),
			option: (styles, { isFocused }) => {
				return {
					...styles,
					cursor: 'pointer',
					backgroundColor: isFocused ? '#D3D3D3' : '#FFFFFF', '&:active': { backgroundColor: '#D3D3D3' },
					color: isFocused ? '#000000' : '#000000',
					border: isFocused ? '1px solid #000000' : '1px solid #000000',
					lineHeight: 2,
				}
			},
			input: styles => ({
				...styles,
				color: '#000000',
			}),
			menu: styles => ({
				...styles,
				marginTop: 0,
				boxShadow: '10px 10px 12px -2px rgba(0,0,0,0.75)',
				borderRadius: 0,
			}),

			singleValue: styles => ({
				...styles,
				color: '#D3D3D3',
			}),
			indicatorSeparator: base => ({
				...base,
				display: 'none',
			}),
		}

		return (
			<div className="sections-container">
				<NonAdminSectionContainer dropdownStyle={dropdownStyle} />
			</div>
		)
	}
}

export default App