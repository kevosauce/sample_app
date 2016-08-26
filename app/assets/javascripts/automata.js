var myGamePiece;

function startGame() {
    myGamePiece = new component("red", 1, 2);
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(color, row, col) {
    this.width = 20;
    this.height = 20;
    this.row = row;
    this.col = col;
    this.update = function() {
        ctx = myGameArea.context;
	ctx.fillStyle = color;
	ctx.fillRect(this.row * 20, this.col * 20, this.width, this.height);
    }
}

function updateGameArea() {
    myGamePiece.update()
}

