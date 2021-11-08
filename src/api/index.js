const constants = require("./constants")
const express = require('express');
const app = express();
const cors = require('cors');

const path = require('path');

const consts = require("./constants");
const {getBillboardsPhotographed, drawPath, createGrid} = require("./utils")
app.use(cors());

app.use(express.json())

app.get('/api/initial-grid', (req, res) => {
    let grid = createGrid()
    return grid
})

app.get('/api/get-result', (req, res) => {
    // console.log(req.query)
    const input = req.query.input.split('')
    let grid = createGrid()

    // Draw the starting position
    grid[consts.ORIGIN_Y][consts.ORIGIN_X].item = consts.START

    // Draw the path
    result = drawPath(input, grid)

    // Get number of billboards photographed at least once
    const amount = getBillboardsPhotographed(result.grid)
    
    return res.json({grid: result.grid, amount: amount, currentPos: result.currentPosition})
});

app.listen(4001, () => console.log(`Api started at http://localhost:4001`));
