const express = require('express')
const app = express()

// routes
app.get('/', (req, res) => {
    res.send('Task Manager App')
})

const port = 3000

app.listen(port, console.log(`server is listenig on port ${port}`))