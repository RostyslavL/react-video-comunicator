const app = require('express')()
const server = require('http').createServer(app)
const cors = require('cors')

const io = require('socket.io')(server,{
    cors:{
        origin: '*',
        methods: ['GET', 'POST']
    }
})

app.use(cors())

const PORT = process.envPORT || 5000

app.get('/', (req, res) =>{
    res.send(`Server is running on port: ${PORT}`)
})

server.listen(PORT, ()=>{
    console.log(`Server is Listening on port: ${PORT}`)
})