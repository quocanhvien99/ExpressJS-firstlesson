var express = require('express')
var app = express()
var port = 3000

app.get('/', (req, res) => res.send('Hello Quoc Anh!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))