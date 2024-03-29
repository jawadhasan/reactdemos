const HalmaGame = () => {

    const [canvasRef, setCanvasRef] = useState(React.createRef());

    //Halma with 9 pieces on a 9 × 9 board. 
    const kBoardWidth = 9;
    const kBoardHeight = 9;

    const kPieceWidth = 50;
    const kPieceHeight = 50;

    const kPixelWidth = 1 + (kBoardWidth * kPieceWidth);
    const kPixelHeight = 1 + (kBoardHeight * kPieceHeight);

    const [gCanvasElement, setgCanvasElement] = useState({});
    // const [gDrawingContext,setgDrawingContext]=useState();

    let gPattern;

    const [gPieces, setgPieces] = useState([]);
    let gNumPieces;
    const [gSelectedPieceIndex, setgSelectedPieceIndex] = useState(0);
    let gSelectedPieceHasMoved;
    let gMoveCount;
    let gMoveCountElem;
    let gGameInProgress;

    const getCursorPosition = (e) => {
        /* returns Cell with .row and .column properties */
        var x;
        var y;
        if (e.pageX != undefined && e.pageY != undefined) {
            x = e.pageX;
            y = e.pageY;
        }
        else {
            x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
        x -= gCanvasElement.offsetLeft;
        y -= gCanvasElement.offsetTop;
        x = Math.min(x, kBoardWidth * kPieceWidth);
        y = Math.min(y, kBoardHeight * kPieceHeight);
        var cell = new Cell(Math.floor(y / kPieceHeight), Math.floor(x / kPieceWidth));
        return cell;
    }

    const halmaOnClick = (e) => {
        var cell = getCursorPosition(e);
        for (var i = 0; i < gNumPieces; i++) {
            if ((gPieces[i].row == cell.row) &&
                (gPieces[i].column == cell.column)) {
                clickOnPiece(i);
                return;
            }
        }
        clickOnEmptyCell(cell);
    }


    const clickOnEmptyCell = (cell) => {
        if (gSelectedPieceIndex == -1) { return; }
        var rowDiff = Math.abs(cell.row - gPieces[gSelectedPieceIndex].row);
        var columnDiff = Math.abs(cell.column - gPieces[gSelectedPieceIndex].column);
        if ((rowDiff <= 1) &&
            (columnDiff <= 1)) {
            /* we already know that this click was on an empty square,
               so that must mean this was a valid single-square move */
            gPieces[gSelectedPieceIndex].row = cell.row;
            gPieces[gSelectedPieceIndex].column = cell.column;


            gMoveCount += 1;
            //gSelectedPieceIndex = -1;
            setgSelectedPieceIndex(-1);
            gSelectedPieceHasMoved = false;
            drawBoard();
            return;
        }
        if ((((rowDiff == 2) && (columnDiff == 0)) ||
            ((rowDiff == 0) && (columnDiff == 2)) ||
            ((rowDiff == 2) && (columnDiff == 2))) &&
            isThereAPieceBetween(gPieces[gSelectedPieceIndex], cell)) {
            /* this was a valid jump */
            if (!gSelectedPieceHasMoved) {
                gMoveCount += 1;
            }
            gSelectedPieceHasMoved = true;
            gPieces[gSelectedPieceIndex].row = cell.row;
            gPieces[gSelectedPieceIndex].column = cell.column;
            drawBoard();
            return;
        }
        //gSelectedPieceIndex = -1;
        setgSelectedPieceIndex(-1);
        gSelectedPieceHasMoved = false;
        drawBoard();
    }

    const clickOnPiece = (pieceIndex) => {
        if (gSelectedPieceIndex == pieceIndex) { return; }
        //gSelectedPieceIndex = pieceIndex;
        setgSelectedPieceIndex(pieceIndex);
        gSelectedPieceHasMoved = false;
        drawBoard();
    }

    const isThereAPieceBetween = (cell1, cell2) => {
        /* note: assumes cell1 and cell2 are 2 squares away
           either vertically, horizontally, or diagonally */
        var rowBetween = (cell1.row + cell2.row) / 2;
        var columnBetween = (cell1.column + cell2.column) / 2;
        for (var i = 0; i < gNumPieces; i++) {
            if ((gPieces[i].row == rowBetween) &&
                (gPieces[i].column == columnBetween)) {
                return true;
            }
        }
        return false;
    }

    const isTheGameOver = () => {
        for (var i = 0; i < gNumPieces; i++) {
            if (gPieces[i].row > 2) {
                return false;
            }
            if (gPieces[i].column < (kBoardWidth - 3)) {
                return false;
            }
        }
        return true;
    }

    const drawBoard = () => {

        // if (gGameInProgress && isTheGameOver()) {
        // endGame();
        // }
        let gDrawingContext = canvasRef.current.getContext("2d")
        gDrawingContext.clearRect(0, 0, kPixelWidth, kPixelHeight);

        gDrawingContext.beginPath();

        /* vertical lines */
        for (var x = 0; x <= kPixelWidth; x += kPieceWidth) {
            gDrawingContext.moveTo(0.5 + x, 0);
            gDrawingContext.lineTo(0.5 + x, kPixelHeight);
        }

        /* horizontal lines */
        for (var y = 0; y <= kPixelHeight; y += kPieceHeight) {
            gDrawingContext.moveTo(0, 0.5 + y);
            gDrawingContext.lineTo(kPixelWidth, 0.5 + y);
        }

        /* draw it! */
        gDrawingContext.strokeStyle = "#ccc";
        gDrawingContext.stroke();

        for (var i = 0; i < 9; i++) {
            drawPiece(gPieces[i], i == gSelectedPieceIndex);
        }

        // gMoveCountElem.innerHTML = gMoveCount;

        // saveGameState();
    }


    const drawPiece = (p, selected) => {
        console.log(p);
        var column = p.column;
        var row = p.row;
        var x = (column * kPieceWidth) + (kPieceWidth / 2);
        var y = (row * kPieceHeight) + (kPieceHeight / 2);
        var radius = (kPieceWidth / 2) - (kPieceWidth / 10);
        gDrawingContext.beginPath();
        gDrawingContext.arc(x, y, radius, 0, Math.PI * 2, false);
        gDrawingContext.closePath();
        gDrawingContext.strokeStyle = "#000";
        gDrawingContext.stroke();
        if (selected) {
            gDrawingContext.fillStyle = "#000";
            gDrawingContext.fill();
        }
    }

    // if (typeof resumeGame != "function") {
    //     saveGameState = function() {
    //     return false;
    //     }
    //     resumeGame = function() {
    //     return false;
    //     }
    // }
    const newGame = () => {
        setgPieces([new Cell(kBoardHeight - 3, 0),
        new Cell(kBoardHeight - 2, 0),
        new Cell(kBoardHeight - 1, 0),
        new Cell(kBoardHeight - 3, 1),
        new Cell(kBoardHeight - 2, 1),
        new Cell(kBoardHeight - 1, 1),
        new Cell(kBoardHeight - 3, 2),
        new Cell(kBoardHeight - 2, 2),
        new Cell(kBoardHeight - 1, 2)]);
        gNumPieces = gPieces.length;
        // gSelectedPieceIndex = -1;
        setgSelectedPieceIndex(-1);
        gSelectedPieceHasMoved = false;
        gMoveCount = 0;
        gGameInProgress = true;
        drawBoard();
    }
    const endGame = () => {
        //gSelectedPieceIndex = -1;
        setgSelectedPieceIndex(-1);
        gGameInProgress = false;
    }
    const initGame = (canvasElement, moveCountElement) => {

        canvasElement.width = kPixelWidth;
        canvasElement.height = kPixelHeight;

        setgCanvasElement(canvasElement);

        //gCanvasElement =canvasElement;
        // gCanvasElement.width = kPixelWidth;
        // gCanvasElement.height = kPixelHeight;
        // gCanvasElement.addEventListener("click", halmaOnClick, false);
        gMoveCountElem = moveCountElement;
        canvasRef.current.width = kPixelWidth;
        canvasRef.current.height = kPixelHeight;
        //setgDrawingContext(canvasRef.current.getContext("2d"));

        //    gDrawingContext = gCanvasElement.getContext("2d");
        // if (!resumeGame()) {
        newGame();
        // }
    }





    const drawGrid = () => {

        var c_canvas = document.getElementById("halma_canvas");
        var context = c_canvas.getContext("2d");

        //pencil methods

        //horizontal lines
        for (var y = 0.5; y < 500; y += 49.9) {
            context.moveTo(0, y);
            context.lineTo(400, y);
        }

        //vertical lines
        for (var x = 0.5; x < 500; x += 49.9) {
            context.moveTo(x, 0);
            context.lineTo(x, 375);
        }


        context.strokeStyle = "#eee";
        context.stroke();//ink method to make it permanent


    }
    useEffect(() => {
        console.log(`useEffect 1`); // drawGrid();      
        const c_canvas = document.getElementById("halma_canvas");
        const moveCount = document.getElementById("moveCount");
        initGame(c_canvas, moveCount);
    }, [])



    return (
        <div>
            <p>Halma - Game</p>
            <canvas ref={canvasRef} id="halma_canvas" onClick={halmaOnClick} />
            <p id="moveCount"></p>
        </div>
    );
}
