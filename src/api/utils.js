const { ContactSupportOutlined } = require("@material-ui/icons");
const consts = require("./constants");

module.exports.createGrid = () => {
    let grid = new Array(consts.MAX_HEIGHT)
    for(let i = 0; i < grid.length; i++) {
        grid[i] = new Array(consts.MAX_WIDTH)
    }
    for(let row = 0; row < grid.length; row++){
        for(let col = 0; col < grid[row].length; col++){
            grid[row][col] = {key: {x: col, y: row}, item: consts.EMPTY}
        }
    }
    return grid
}

module.exports.getBillboardsPhotographed = (grid) => {
    let billboardsPhotographed = 0
    for(let row = 0; row < grid.length; row++){
        for(let col = 0; col < grid[row].length; col++){
            if(grid[row][col].item === consts.TAKE_PHOTO){
                billboardsPhotographed++
            }
        }
    }
    return billboardsPhotographed
}

/**
 * Draws a path based on the input and an intialised grid
 * @param {String} input 
 * @param {String[][]} grid 
 * @returns The grid with the path, along with the current position
 */
module.exports.drawPath = (input, grid) => {
    let x = consts.ORIGIN_X
    let y = consts.ORIGIN_Y
    for(let i = 0; i < input.length; i++){
        if(input[i] === consts.UP){
            y -= 1
            if(grid[y][x].item === consts.EMPTY){
                grid[y][x].item = consts.PATH
            }
        } else if(input[i] === consts.RIGHT){
            x += 1
            if(grid[y][x].item === consts.EMPTY){
                grid[y][x].item = consts.PATH
            }
        } else if(input[i] === consts.DOWN) {
            y += 1
            if(grid[y][x].item === consts.EMPTY){
                grid[y][x].item = consts.PATH
            }

        } else if(input[i] === consts.LEFT) {
            x -= 1
            if(grid[y][x].item === consts.EMPTY){
                grid[y][x].item = consts.PATH
            }
        } else if(input[i] === consts.TAKE_PHOTO) {
            grid[y][x].item = consts.TAKE_PHOTO
        }
    }

    return {grid: grid, currentPosition: {x: x, y: y}}
}