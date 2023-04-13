import React, { useState } from "react";
import Icon from "./components/Icon";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import "./App.css";
const arr = new Array(9).fill("");

const App = () => {
  let [winmessage, setWinmessage] = useState("");
  let [cross, setcross] = useState(true);
  function playAgain() {
    arr.fill("");
    setWinmessage("");
    setcross(true);
  }
  function findWinner() {
    //row1: 0,1,2
    if (arr[0] == arr[1] && arr[0] == arr[2] && arr[0] != "") {
      setWinmessage(`winner is ${arr[0]}`);
    }
    //row2: 3,4,5
    else if (arr[3] == arr[4] && arr[3] == arr[5] && arr[3] != "") {
      setWinmessage(`winner is ${arr[3]}`);
    }
    //row3: 6,7,8
    else if (arr[6] == arr[7] && arr[6] == arr[8] && arr[6] != "") {
      setWinmessage(`winner is ${arr[6]}`);
    }

    // col1: `0,3,6`
    else if (arr[0] == arr[3] && arr[0] == arr[6] && arr[0] != "") {
      setWinmessage(`winner is ${arr[0]}`);
    }
    // col2: `1,4,7`
    else if (arr[1] == arr[4] && arr[1] == arr[7] && arr[1] != "") {
      setWinmessage(`winner is ${arr[1]}`);
    }
    // col3: `2,5,8`
    else if (arr[2] == arr[5] && arr[2] == arr[8] && arr[2] != "") {
      setWinmessage(`winner is ${arr[2]}`);
    }
    // diagonal1: `0,4,8`
    else if (arr[0] == arr[4] && arr[0] == arr[8] && arr[0] != "") {
      setWinmessage(`winner is ${arr[0]}`);
    }
    // diagonal2: `2,4,6`
    else if (arr[2] == arr[4] && arr[2] == arr[6] && arr[2] != "") {
      setWinmessage(`winner is ${arr[2]}`);
    }

    // draw condition:
    else if (arr.indexOf("") == -1) {
      setWinmessage(`Its a draw`);
    }
  }
  function chances(index) {
    if (winmessage) {
      toast.error("not allowed , game is over")

      // console.log("");
    }
    if (arr[index] != "") {
      toast.error("not allowed")
    } else if (arr[index] == "") {
      arr[index] = cross ? "circle" : "cross";
      setcross(!cross);
      findWinner();
    }
  }

  return (
    <div className="container">
      <ToastContainer/>
      <div className="show">
      {winmessage ? (
        <div>
          <button onClick={playAgain}>Play Again</button>
          <h1>{winmessage}</h1>

        </div>
      ) : (
        <div>
          <h1> {cross == true ? "Cross Chance" : "Circle Chance"} </h1>
        </div>
      )}
      </div>
      
      <div className="tic-tac-toe">
        {/* <h1>hello</h1> */}
        {
        arr.map((value, index) => (
          <div onClick={() => chances(index)}>
            <Icon user_icon={value} />
          </div>
        ))
        }
      </div>
    </div>
  );
};

export default App;
