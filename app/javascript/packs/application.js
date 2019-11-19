import React from 'react'
import { render } from 'react-dom'
import RedBox from 'redbox-react'
import App from '../react/App'

document.addEventListener('DOMContentLoaded', () => {
    let reactElement = document.getElementById('app')

    if (reactElement) {
        if(window.railsEnv && window.railsEnv === 'development'){
            try {
                render(<App />, reactElement)
            } catch (error) {
                render(<RedBox error={error} />, reactElement)
            }
        }
        else {
            render(<App />, reactElement)
        }
    }
})