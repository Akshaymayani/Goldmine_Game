import { useEffect, useState } from 'react';
import { } from '../App.css';
import Grid_cell from './Grid_cell';
function GameGrid() {
    const [data, setData] = useState<(number | boolean)[]>([]);
    const [gameOver, setGameOver] = useState<boolean>(false);
    const [winner, setWinner] = useState<boolean>(false);
    const [Attempt , setAttempt] = useState<number>(0);

    function handlereset(){
        initgame();
        setAttempt(0);
    }
    function initgame(){
        let map: any = new Set();
        const res: number[] = Array.from({ length: 25 }, (_, inde) => inde + 1);
        while (map.size !== 3) {
            map.add(Math.floor(Math.random() * 25) + 1);
        }
        // console.log("map -> ",map)
        setData(() => res.map((item: number) => map.has(item) ? true : item))
        setGameOver(false);
        setWinner(false);
        // console.log(data);
        }
        function handleparant(e: React.MouseEvent<HTMLDivElement, MouseEvent>){
            e.stopPropagation();
            setAttempt(Attempt => Attempt+1)
            if(Attempt+1 === 22){
                setWinner(true);
            }
        }
    useEffect(() => {
      initgame();
    }, []);
    return (
        <div className='container'>
            <header>
                Mining Game
            </header>
            <div className='Grid-table' onClick={(e)=> handleparant(e)}>
                {
                    data && data.map((item, index) => {
                        return (
                            <Grid_cell 
                                key={index} 
                                item={item} 
                                gameOver={gameOver}
                                winner={winner}
                                setGameOver={setGameOver} 
                            />
                        )
                    })
                }
            </div>
            
                {gameOver && (
                    <div className='container2'>
                        <p style={{fontSize:'18px'}}>You are Failed in {Attempt} Attempt.... , better luck next time</p>
                        <button className='btn' onClick={handlereset}>Play Again</button>
                    </div>
                    )
                }
                {winner && (
                    <div className='container2'>
                       <p style={{fontSize:'18px'}}>Congratulations..., You Won the Game</p>
                        <button className='btn' onClick={handlereset}>Play Again</button>
                    </div>
                    )
                }
        </div>
    )
}

export default GameGrid
