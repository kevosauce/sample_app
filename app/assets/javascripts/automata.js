var width = 20;
var height = 20;
var board = [];

function startGame() {
    initBoard()
    myGameArea.start();
}

function initBoard() {
    for (row = 0; row < 10; row++) {
        var r = []
        for (col = 0; col < 10; col++) {
	    var color = (col % 2 == row % 2) ? "red" : "blue";
            r.push(color)
        }
        board.push(r)
    }
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 1000;
        this.canvas.height = 2000;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 1000);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function updateGameArea() {
    ctx = myGameArea.context;
    for (row = 0; row < 10; row++) {
        for (col = 0; col < 10; col++) {
	    var color = board[row][col]
	    ctx.fillStyle = color;
	    ctx.fillRect(col * width, row * height, width, height);
      }
   }
}

