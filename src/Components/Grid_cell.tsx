import {useEffect, useState } from 'react';
import BombIcon from '../assets/bomb_image.png';
import GoldIcon from '../assets/gold_image.jpg';
import HoverAudio from '../assets/hover.wav';
import GoldAudio from '../assets/gold.wav';
import BombAudio from '../assets/bomb.wav';

type Props={
   item : number|boolean,
   gameOver : boolean,
   setGameOver : (x:boolean) => void,
   winner:boolean ,
}
function Grid_cell({item,gameOver ,setGameOver,winner}:Props) {
    const [open ,setOpen] = useState<boolean>(false);

    const handleenter = ()=>{
        if(gameOver || winner)
            return;
        let music = new Audio(HoverAudio)
        music.play();
    }

    const handleClick=(item: number | boolean)=>{
        if(gameOver || winner)
            return;
      setTimeout(() => {
              setOpen(true);
        if(item === true){
            let music = new Audio(BombAudio)
            music.play();
            setGameOver(true);
            return; 
        }
        let music = new Audio(GoldAudio)
        music.play();
        }, 200);
    }
    useEffect(() => {
       (gameOver || winner) ? setOpen(true) : setOpen(false)
    }, [gameOver,winner]);
  return (
      <div onMouseDown={handleenter}  onClick={()=>handleClick(item)} className={`${item === true ? "c1" : "c2"} cell`}>
        {
            open &&(
                 (item === true) ?(
                <img className='image1 image2' src={BombIcon} alt='icon of bomb' />
            ) : <img className='image1' src={GoldIcon} alt='icon of bomb' />
            )
        }
        </div>
  )
}

export default Grid_cell
