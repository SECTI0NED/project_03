const { ContactSupportOutlined } = require("@material-ui/icons");
const { MAX_WIDTH } = require("./constants");
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
 * Draws a path for a single drone based on the input and an intialised grid
 * @param {String} input 
 * @param {String[][]} grid 
 * @returns The grid with the path, along with the current position
 */
module.exports.drawPathSingleDrone = (input, grid) => {
    let orientation = consts.UP
    let x = consts.ORIGIN_X
    let y = consts.ORIGIN_Y
    for(let i = 0; i < input.length; i++){
        const result = drawPath(input[i], grid, x, y, orientation)
        if (!result) return
        x = result.x
        y = result.y
        orientation = result.orientation
    }

    return {currentPosition: {x: x, y: y}, orientation: orientation}
}

/**
 * 
 * @param {*} input 
 * @param {*} grid 
 */
module.exports.drawPathTwoDrones = (input, grid) => {
    firstOrient = consts.UP
    secondOrient = consts.UP
    let firstX = consts.ORIGIN_X
    let secondX = consts.ORIGIN_X
    let firstY = consts.ORIGIN_Y
    let secondY= consts.ORIGIN_Y

    // Draw the first drone path
    for(let i = 0; i < input.length; i+=2){
        const result = drawPath(input[i], grid, firstX, firstY, firstOrient)
        if (!result) return
        firstX = result.x
        firstY = result.y
        firstOrient = result.orientation
    }

    for(let i = 1; i < input.length; i+=2){
        const result = drawPath(input[i], grid, secondX, secondY, secondOrient)
        if (!result) return
        secondX = result.x
        secondY = result.y
        secondOrient = result.orientation
    }

    return {firstDronePose: {x: firstX, y: firstY, orientation: firstOrient}, secondDronePose: {x: secondX, y: secondY, orientation: secondOrient}}
}


/**
 * Takes in a single input character to draw on the grid
 * @param {*} inputChar The character inputted
 * @param {*} grid The current grid
 * @param {*} x The current x coordinate
 * @param {*} y The current y coorcinate
 * @param {*} orientation The current orientation
 * @returns  The next pose (position + orientation)
 */
const drawPath = (inputChar, grid, x, y, orientation) => {
    if(inputChar === consts.UP){
        y -= 1
        if(outOfBounds(x, y)) return
        orientation = consts.UP
        if(grid[y][x].item === consts.EMPTY){
            grid[y][x].item = consts.PATH
        }
    } else if(inputChar === consts.RIGHT){
        x += 1
        if(outOfBounds(x, y)) return
        orientation = consts.RIGHT
        if(grid[y][x].item === consts.EMPTY){
            grid[y][x].item = consts.PATH
        }
    } else if(inputChar === consts.DOWN) {
        y += 1
        if(outOfBounds(x, y)) return
        orientation = consts.DOWN
        if(grid[y][x].item === consts.EMPTY){
            grid[y][x].item = consts.PATH
        }

    } else if(inputChar === consts.LEFT) {
        x -= 1
        if(outOfBounds(x, y)) return
        orientation = consts.LEFT
        if(grid[y][x].item === consts.EMPTY){
            grid[y][x].item = consts.PATH
        }
    } else if(inputChar === consts.TAKE_PHOTO) {
        grid[y][x].item = consts.TAKE_PHOTO
    }
    return {x: x, y: y, orientation: orientation}
}


const outOfBounds = (x, y) => {
    if(y < 0 || y >= consts.MAX_HEIGHT || x < 0 || x >= consts.MAX_WIDTH) {
        return true
    }
    return false
}