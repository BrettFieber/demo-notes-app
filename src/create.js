import * as uuid from 'uuid'
import handler from './util/handler'
import dynamoDb from './util/dynamodb'

export const main = handler(async (event) => {
    // Request body is passed in as a JSON encoded string in 'event.body'
    const data = JSON.parse(event.body)
    const params = {
        TableName: process.env.TABLE_NAME,
        Item: {
            // The attributes of the item to be created
            userId: '123', // The id of the author
            noteId: uuid.v1(), // A unique uuid
            content: data.content, // Parsed from the request body
            attachment: data.attachment, // Parsed from the request body
            createdAt: Date.now() // Current unix timestamp
        }
    }

    await dynamoDb.put(params)

    return params.Item
})