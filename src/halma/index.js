
import React, { useState, useEffect, useRef } from "react";

//concept: http://diveintohtml5.info/canvas.html#halma


export class Helma extends React.Component {
    constructor(props) {
        super(props);
        
        const kBoardWidth = 9;
        const kBoardHeight = 9;
        const kPieceWidth = 50;
        const kPieceHeight = 50;
        const canvasRef = React.createRef();

        const kPixelWidth = 1 + (kBoardWidth * kPieceWidth);
        const kPixelHeight = 1 + (kBoardWidth * kPieceHeight);

        // this.state = {
        //     clicks:0
        // },
        //this.setState({clicks: clickNew});

        // state = {
        //     cart: [],
        //     total: 0
        //   }
        // add = () => {
        //     this.setState({
        //       cart: ['ice cream'],
        //       total: 5
        //     })
        //   }

        // add = (product) => {
        //     this.setState(state => ({
        //       cart: [...state.cart, product],
        //     }))
        //   }

          //binding
          this.initGame= this.initGame.bind(this);
          this.halmaOnClick= this.halmaOnClick.bind(this);


        this.state = {      
            gCanvasElement: null,
            gDrawingContext: null,
            gPattern: null,
            gPieces: [],
            gNumPieces: null,
            gSelectedPieceIndex: null,
            gSelectedPieceHasMoved: null,
            gMoveCount: 0,
            gMoveCountElem: null,
            gGameInProgress: null
        }

      

    }

    componentDidMount(){
        const c_canvas = document.getElementById("halma_canvas");
        const moveCount = document.getElementById("moveCount");
        const dcontext = c_canvas.getContext("2d");     
        this.initGame(c_canvas, moveCount,dcontext);        
    }



    
    halmaOnClick = (e) => {
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

    newGame = ()=>{
        console.log('newgame');
        console.log(this.state);
    }

    initGame = (canvasElement, moveCountElement, drawingContext) => {

        canvasElement.width = this.kPixelWidth;
        canvasElement.height = this.kPixelHeight;
        console.log(canvasElement);

        this.setState({
            gCanvasElement:canvasElement
           
        })

        // this.setState({
            //       cart: ['ice cream'],
            //       total: 5
            //     })

     
        //this.setState({"gCanvasElement":canvasElement});      
      //  gMoveCountElem = moveCountElement;

        //canvasRef.current.width = kPixelWidth;
        //canvasRef.current.height = kPixelHeight;
        //setgDrawingContext(canvasRef.current.getContext("2d"));

        //    gDrawingContext = gCanvasElement.getContext("2d");
        // if (!resumeGame()) {
        // newGame();
        // }

        this.newGame();
    }

    render() {
        return (
            <div>
                <p>Helma</p>
                <canvas ref={this.canvasRef} id="halma_canvas" onClick={this.halmaOnClick} />
                <p id="moveCount"></p>
            </div>
        )
    }





}


export default Helma;