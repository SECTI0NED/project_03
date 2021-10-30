const constants = require("./constants")
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const { ORIGIN_X, ORIGIN_Y, PATH } = require("./constants");
const {getBillboardsPhotographed, drawPath, createGrid} = require("./utils")
app.use(cors());

app.get('/api/get-result', (req, res) => {
    const input = req.body.input.split('')
    let grid = createGrid()
    let current_x = ORIGIN_X
    let current_y = ORIGIN_Y

    // Draw the starting position
    grid[current_y][current_x] = {key: {x: current_x, y: current_y}, item: PATH}

    // Draw the path
    grid = drawPath(input, grid)

    // Get number of billboards photographed at least once
    const amount = getBillboardsPhotographed(grid)
    
    return res.json({grid: grid, amount: amount})
});

app.listen(4001, () => console.log(`Api started at http://localhost:4001`));
