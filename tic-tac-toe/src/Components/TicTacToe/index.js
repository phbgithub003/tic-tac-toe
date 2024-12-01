import React, { useRef, useState } from 'react'
import "./style.css"
import circle_icon from "../Assets/circle.png"
import cross_icon from "../Assets/cross.png"

const TicTacToe = () => {
    
    let [count,setCount] = useState(0);
    let [lock,setLock] = useState(false)
    let [board, setBoard] = useState(Array(9).fill(""));
    let titleRef = useRef(null)

    const toggle = (e,num) =>{
        if (lock || board[num] !== "") {
            return;
        }

        const newBoard = [...board];
        if (count % 2 === 0) {
            newBoard[num] = "x";
        } else {
            newBoard[num] = "o";
        }
        setBoard(newBoard);
        setCount(count + 1);
        checkWin(newBoard);
    }
    const checkWin = (currentBoard) => {
        if (currentBoard[0] === currentBoard[1] && currentBoard[1] === currentBoard[2] && currentBoard[0] !== "") {
            won(currentBoard[0]);
        }
        else if (currentBoard[3] === currentBoard[4] && currentBoard[4] === currentBoard[5] && currentBoard[3] !== "") {
            won(currentBoard[3]);
        }
        else if (currentBoard[6] === currentBoard[7] && currentBoard[7] === currentBoard[8] && currentBoard[6] !== "") {
            won(currentBoard[6]);
        }
        else if (currentBoard[0] === currentBoard[3] && currentBoard[3] === currentBoard[6] && currentBoard[0] !== "") {
            won(currentBoard[0]);
        }
        else if (currentBoard[1] === currentBoard[4] && currentBoard[4] === currentBoard[7] && currentBoard[1] !== "") {
            won(currentBoard[1]);
        }
        else if (currentBoard[2] === currentBoard[5] && currentBoard[5] === currentBoard[8] && currentBoard[2] !== "") {
            won(currentBoard[2]);
        }
        else if (currentBoard[0] === currentBoard[4] && currentBoard[4] === currentBoard[8] && currentBoard[0] !== "") {
            won(currentBoard[0]);
        }
        else if (currentBoard[2] === currentBoard[4] && currentBoard[4] === currentBoard[6] && currentBoard[2] !== "") {
            won(currentBoard[2]);
        }
    }

    const won = (winner) =>{
        setLock(true);
        if(winner ==="x"){
            titleRef.current.innerHTML = `Congratulations: <img src=${cross_icon}> wins `
        } else {
            titleRef.current.innerHTML = `Congratulations: <img src=${circle_icon}> wins`
        }
    }

    const reset = () => {
        setLock(false);
        setBoard(Array(9).fill(""));
        titleRef.current.innerHTML = 'Tic Tac Toe game in <span>React</span>';
        setCount(0);
    }


  return (
    <div className='container'>
        <h1 className='title' ref={titleRef}>Tic Tac Toe game in <span>React</span></h1>
        <div className='board'>
            <div className='row1'>
                <div className='boxes' onClick={(e)=>toggle(e,0)}>
                    {board[0] && <img src={board[0] === "x" ? cross_icon : circle_icon} alt={board[0]} />}
                </div>
                <div className='boxes' onClick={(e)=>toggle(e,1)}>
                    {board[1] && <img src={board[1] === "x" ? cross_icon : circle_icon} alt={board[1]} />}
                </div>
                <div className='boxes' onClick={(e)=>toggle(e,2)}>
                    {board[2] && <img src={board[2] === "x" ? cross_icon : circle_icon} alt={board[2]} />}
                </div>
            </div>
            <div className='row2'>
                <div className='boxes' onClick={(e)=>toggle(e,3)}>
                    {board[3] && <img src={board[3] === "x" ? cross_icon : circle_icon} alt={board[3]} />}
                </div>
                <div className='boxes' onClick={(e)=>toggle(e,4)}>
                    {board[4] && <img src={board[4] === "x" ? cross_icon : circle_icon} alt={board[4]} />}
                </div>
                <div className='boxes' onClick={(e)=>toggle(e,5)}>
                    {board[5] && <img src={board[5] === "x" ? cross_icon : circle_icon} alt={board[5]} />}
                </div>
            </div>
            <div className='row3'>
                <div className='boxes' onClick={(e)=>toggle(e,6)}>
                    {board[6] && <img src={board[6] === "x" ? cross_icon : circle_icon} alt={board[6]} />}
                </div>
                <div className='boxes' onClick={(e)=>toggle(e,7)}>
                    {board[7] && <img src={board[7] === "x" ? cross_icon : circle_icon} alt={board[7]} />}
                </div>
                <div className='boxes' onClick={(e)=>toggle(e,8)}>
                    {board[8] && <img src={board[8] === "x" ? cross_icon : circle_icon} alt={board[8]} />}
                </div>
            </div>
        </div>
        <button className='reset' onClick={reset}>Reset</button>
    </div>
  )
}

export default TicTacToe