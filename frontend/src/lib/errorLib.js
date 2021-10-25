export function onError(error) {
    let message = error.toString()

    console.log('Error: ', error)
    console.log('Error(json): ', JSON.stringify(error, null, 2))

    // Auth errors
    if(!(error instanceof Error) && error.message) {
        message = error.message
    }

    alert(message)
}
