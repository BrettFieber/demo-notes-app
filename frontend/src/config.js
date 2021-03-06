const config = {
    SENTRY_DSN: 'https://e6058ea6d7904bb1a978537624446a21@o432912.ingest.sentry.io/6034973',
    STRIPE_KEY: 'pk_test_51H5exXCne1S3xympNKhPvKedWJSvMJZnj4CtX7zBUTdj6xhNp204gYaaUilgzaTKBEQEXVaZ4QuW7QU6B4pXP0xU00c1II8lYF',
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        REGION: process.env.REACT_APP_REGION,
        BUCKET: process.env.REACT_APP_BUCKET
    },
    apiGateway: {
        REGION: process.env.REACT_APP_REGION,
        URL: process.env.REACT_APP_API_URL
    },
    cognito: {
        REGION: process.env.REACT_APP_REGION,
        USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
        APP_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID,
        IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID
    }
}

export default config