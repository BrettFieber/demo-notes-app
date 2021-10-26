import * as Sentry from '@sentry/browser'
import config from '../config'

const isLocal = process.env.NODE_ENV === "development"

export function initSentry() {
    if (isLocal) {
        return
    }

    Sentry.init({ dsn: config.SENTRY_DSN })
}

export function logError(error, errorInfo = null) {
    if (isLocal) {
        return
    }

    Sentry.withScope((scope) => {
        errorInfo && scope.setExtras(errorInfo)
        Sentry.captureException(error)
    })
}

/**
 * Handles all expected errors (Auth, API)
 * 
 * @param {*} error 
 */
export function onError(error) {
    let errorInfo = {}
    let message = error.toString()

    // console.log('Error: ', error)
    // console.log('Error(json): ', JSON.stringify(error, null, 2))

    // Auth errors
    if(!(error instanceof Error) && error.message) {
        errorInfo = error
        message = error.message
        error = new Error(message)
        // API errors
    } else if (error.config && error.config.url) {
        errorInfo.url = error.config.url
    }

    logError(error, errorInfo)

    // TODO: extra credit - customize what we show the user and how.
    alert(message)
}
