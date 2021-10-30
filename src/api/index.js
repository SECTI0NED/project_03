import {MAX_WIDTH, MAX_HEIGHT, ORIGIN_X, ORIGIN_Y, UP, RIGHT, DOWN, LEFT, EMPTY, PATH, TAKE_PHOTO} from "./constants"

const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

app.use(cors());


const createGrid = () => {
    let grid = new Array(MAX_HEIGHT)
    for(let i = 0; i < grid.length; i++) {
        grid[i] = new Array(MAX_WIDTH)
    }
    for(let row = 0; row < grid.length; row++){
        for(let col = 0; col < grid[row].length; col++){
            grid[row][col] = EMPTY
        }
    }
    return grid
}


app.get('/api/draw-path', (req, res) => {
    const input = req.body.input.split('')
    let grid = createGrid()
    let current_x = ORIGIN_X
    let current_y = ORIGIN_Y

    // Draw the starting position
    grid[current_y][current_x] = {key: {x: current_x, y: current_y}, item: PATH}

    // Draw the path
    for(let i = 0; i < input.length; i++){
        if(input[i] === UP){
            current_y-=1
            if(grid[current_y][current_x] === EMPTY){
                grid[current_y][current_x] = {key: {x: current_x, y: current_y}, item: PATH}
            }
           
        } else if(input[i] === RIGHT){
            current_x += 1
            if(grid[current_y][current_x] === EMPTY){
                grid[current_y][current_x] = {key: {x: current_x, y: current_y}, item: PATH}
            }

        } else if(input[i] === DOWN) {
            current_y+=1
            if(grid[current_y][current_x] === EMPTY){
                grid[current_y][current_x] = {key: {x: current_x, y: current_y}, item: PATH}
            }

        } else if(input[i] === LEFT) {
            current_y-=1
            if(grid[current_y][current_x] === EMPTY){
                grid[current_y][current_x] = {key: {x: current_x, y: current_y}, item: PATH}
            }

        } else if(input[i] === TAKE_PHOTO) {
            grid[current_x][current_y] = {key: {x: current_x, y: current_y}, item: TAKE_PHOTO}
        }
    }
    return res.json(grid)
});

app.listen(4001, () => console.log(`Api started at http://localhost:4001`));
