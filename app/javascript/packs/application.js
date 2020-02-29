import React from 'react'
import { render } from 'react-dom'
import RedBox from 'redbox-react'
import App from '../react/App'
import NonAdminSectionContainer from '../react/kow/containers/NonAdminSectionContainer'
import KowhGameContainer from '../react/kowh/containers/KowhGameContainer'

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

document.addEventListener('DOMContentLoaded', () => {
    let app = document.getElementById('app')

    if (app) {
        if(window.railsEnv && window.railsEnv === 'development'){
            try {
                render(<App dropdownStyle={dropdownStyle} />, app)
            } catch (error) {
                render(<RedBox error={error} />, app)
            }
        }
        else {
            render(<App dropdownStyle={dropdownStyle} />, app)
        }
    }
})

document.addEventListener('DOMContentLoaded', () => {
    let kow = document.getElementById('kow')

    if (kow) {
        if(window.railsEnv && window.railsEnv === 'development'){
            try {
                render(<NonAdminSectionContainer dropdownStyle={dropdownStyle} />, kow)
            } catch (error) {
                render(<RedBox error={error} />, kow)
            }
        }
        else {
            render(<NonAdminSectionContainer dropdownStyle={dropdownStyle} />, kow)
        }
    }
})

// document.addEventListener('DOMContentLoaded', () => {
//     let kowh = document.getElementById('kowh')

//     if (kowh) {
//         if(window.railsEnv && window.railsEnv === 'development'){
//             try {
//                 render(<KowhGameContainer dropdownStyle={dropdownStyle} />, kowh)
//             } catch (error) {
//                 render(<RedBox error={error} />, kowh)
//             }
//         }
//         else {
//             render(<KowhGameContainer dropdownStyle={dropdownStyle} />, kowh)
//         }
//     }
// })
