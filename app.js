const leopardo = require('leopardo')
const app = leopardo()
const port = process.env.PORT || 3000

app.use(leopardo.cors())

app.get('/', (req, res) => {
  res.send('Welcome to Leopardo package index page!')
})

app.get('/test', (req, res) => {
  res.send('This is the test page.')
})

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
})
