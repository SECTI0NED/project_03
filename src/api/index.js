const constants = require("./constants")
const express = require('express');
const app = express();
const cors = require('cors');
const consts = require("./constants");
const {getBillboardsPhotographed, drawPathTwoDrones, createGrid, drawPathSingleDrone} = require("./utils")
app.use(cors());

app.use(express.json())

app.get('/api/initial-grid', (req, res) => {
    let grid = createGrid()
    return grid
})

app.get('/api/single-drone', (req, res) => {
    // console.log(req.query)
    const input = req.query.input.split('')
    let grid = createGrid()

    // Draw the starting position
    grid[consts.ORIGIN_Y][consts.ORIGIN_X].item = consts.START

    // Draw the path
    result = drawPathSingleDrone(input, grid)

    // If the input is out of bounds then return an error status code
    if(!result) return res.sendStatus(400)

    // Get number of billboards photographed at least once
    const amount = getBillboardsPhotographed(grid)
    
    return res.json({grid: grid, amount: amount, pose: { position: result.position, orientation: result.orientation} })
});


app.get('/api/two-drones', (req, res) => {
    const input = req.query.input.split('')
    let grid = createGrid()

    // Draw the starting position
    grid[consts.ORIGIN_Y][consts.ORIGIN_X].item = consts.START

    // Draw the path
    result = drawPathTwoDrones(input, grid)

    // If the input is out of bounds then return an error status code
    if(!result) return res.sendStatus(400)

    // Get number of billboards photographed at least once
    const amount = getBillboardsPhotographed(grid)

    return res.json({grid:grid, amount: amount, firstDronePose: result.firstDronePose, secondDronePose: result.secondDronePose})

})


app.listen(4001, () => console.log(`Api started at http://localhost:4001`));
