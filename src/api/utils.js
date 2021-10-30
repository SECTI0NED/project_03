const { MAX_HEIGHT, MAX_WIDTH, PATH, EMPTY, TAKE_PHOTO, UP, DOWN, LEFT, RIGHT } = require("./constants");

module.exports.createGrid = () => {
    let grid = new Array(MAX_HEIGHT)
    for(let i = 0; i < grid.length; i++) {
        grid[i] = new Array(MAX_WIDTH)
    }
    for(let row = 0; row < grid.length; row++){
        for(let col = 0; col < grid[row].length; col++){
            grid[row][col] = {key: {x: col, y: row}, item: EMPTY}
        }
    }
    return grid
}

module.exports.getBillboardsPhotographed = (grid) => {
    let billboardsPhotographed = 0
    for(let row = 0; row < grid.length; row++){
        for(let col = 0; col < grid[row].length; col++){
            if(grid[row][col].item === TAKE_PHOTO){
                billboardsPhotographed++
            }
        }
    }
    return billboardsPhotographed
}

module.exports.drawPath = (input, grid) => {
    for(let i = 0; i < input.length; i++){
        if(input[i] === UP){
            current_y-=1
            if(grid[current_y][current_x] === EMPTY){
                grid[current_y][current_x].item = PATH
            }
           
        } else if(input[i] === RIGHT){
            current_x += 1
            if(grid[current_y][current_x] === EMPTY){
                grid[current_y][current_x].item = PATH
            }

        } else if(input[i] === DOWN) {
            current_y+=1
            if(grid[current_y][current_x] === EMPTY){
                grid[current_y][current_x].item = PATH
            }

        } else if(input[i] === LEFT) {
            current_y-=1
            if(grid[current_y][current_x] === EMPTY){
                grid[current_y][current_x].item = PATH
            }

        } else if(input[i] === TAKE_PHOTO) {
            grid[current_x][current_y].item = TAKE_PHOTO
        }
    }
    return grid
}