import './App.css';
import {useEffect, useState} from "react";
import './App.css'

const width = 8;
const boardColors= [
    'azure',
    'green'

]
const pawn = [
    'noPawn',
    'whitePawn',
    'blackPawn'
]

function App() {

    const [board, setBoard] = useState([])

    const createBoard = () => {
        let colors = true;
        const board = []
        const skip = [7,15,23,31,39,47,55]
        for (let i = 0; i < width * width; i++) {
            if (colors === true) {
                if (skip.includes(i)) {
                    board.push(boardColors[0])
                    continue
                }
                board.push(boardColors[0])
            } else {
                if (skip.includes(i)) {
                    board.push(boardColors[1])
                    continue
                }
                board.push(boardColors[1])
            }
            colors = !colors;
        }
        setBoard(board);
    }

    const pawnSpawn =()=>{
        board.forEach((currentValue,index)=>{
            if ((currentValue===boardColors[1])&&(index<23)){

            }
                })

    }

    useEffect(() => {

        createBoard();

    }, []);

    console.log(board);

    return (
        <div className="App">
            <div className="game">
                {board.map((board, index) => (
                    <img

                        data-id={index}
                        style={{backgroundColor: board}}
                        alt={''}
                        isFree={pawn[0]}



                    />
                ))}

            </div>
        </div>
    );
}

export default App;
