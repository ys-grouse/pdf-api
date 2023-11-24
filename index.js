const express = require("express")
const {scrapeLogic} = require("./scrape-logic")
const app = express()
const path = require("path")

const PORT = process.env.PORT || 4000

app.get("/:filename", (req, res) => {
	scrapeLogic(req, res)
})
app.post("/:filename", (req, res) => {
	scrapeLogic(req, res)
})

app.get("/", (req, res) => {
	res.sendFile(path.join(`${__dirname}/index.html`))
})

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})
