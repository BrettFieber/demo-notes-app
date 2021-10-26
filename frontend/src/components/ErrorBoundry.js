import React from 'react'
import { logError } from '../lib/errorLib'
import './ErrorBoundry.css'

export default class ErrorBoundry extends React.Component {
    state = { hasError: false }

    static getDerivedStateFromError(error) {
        return { hasError: true}
    }

    componentDidCatch(error, errorInfo) {
        logError(error, errorInfo)
    }

    render() {
        return this.state.hasError ? (
            <div className='ErrorBoundry text-center'>
                <h3>Sorry there was a problem loading this page</h3>
            </div>
        ) : (
            this.props.children
        )
    }
}