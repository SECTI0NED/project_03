const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

app.use(cors());

const MAX_HEIGHT = 101
const MAX_WIDTH = 101
const ORIGIN_X = 51
const ORIGIN_Y = 51
const UP = "^"
const DOWN = "v"
const LEFT = "<"
const RIGHT = ">"
const TAKE_PHOTO = "x"
const EMPTY = ""
const PATH = "o"

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
    const input = req.body.input
    let grid = createGrid()
    let current_x = ORIGIN_X
    let current_y = ORIGIN_Y

    // Draw the starting position
    grid[current_y][current_x] = PATH

    // Draw the path
    for(let i = 0; i < input.length; i++){
        if(input[i] === UP){
            current_y-=1
            if(grid[current_y][current_x] === EMPTY){
                grid[current_y][current_x] = PATH
            }
           
        } else if(input[i] === RIGHT){
            current_x += 1
            if(grid[current_y][current_x] === EMPTY){
                grid[current_y][current_x] = PATH
            }

        } else if(input[i] === DOWN) {
            current_y+=1
            if(grid[current_y][current_x] === EMPTY){
                grid[current_y][current_x] = PATH
            }

        } else if(input[i] === LEFT) {
            current_y-=1
            if(grid[current_y][current_x] === EMPTY){
                grid[current_y][current_x] = PATH
            }

        } else if(input[i] === TAKE_PHOTO) {
            grid[current_x][current_y] = TAKE_PHOTO
        }
    }
    return grid
});

app.listen(4001, () => console.log(`Api started at http://localhost:4001`));
