const express = require('express')
const app = express()
const tasks = require('./routes/tasks')

// middleware
app.use(express.json())

// routes
app.get('/hello', (req, res) => {
  res.send('Task manager app is running')
})

app.use('/api/v1/tasks', tasks)

const port = 3000

app.listen(3000, console.log(`Server is listening on port ${port}...`));