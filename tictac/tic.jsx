import React, { useCallback,useState } from "react"
import "./style.css"
const Ticgame=  () => {
    var isgameover=false;
    // const [isgameover,setIsgameover]=useState(false);

    var turn="X";
    function change(){
        return turn==="X" ? "0" :"X";
     }
    const [cturn,setCturn]=useState("X")


    const moreToggle = useCallback((e) => {
     e.target.setAttribute('style', 'opacity:0.7;pointer-events:none;');
    e.currentTarget.innerText=turn;
     turn = change();
     checkWin();
     tie();

     if (isgameover == true){
        setCturn(turn)
        } else {
         setCturn(turn)
    }

    }, []);
    
    const clearAll=()=>{
        boxtext.forEach((item, index)=>{
            boxtext[index].innerText="";
            boxtext[index].setAttribute('style','opacity:0.7');
          })
    }
    var boxtext=document.getElementsByName("button");

    function checkWin(){
        var boxtext=document.getElementsByName("button");
    
        let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
        ];
            wins.forEach(e => {
                if(((boxtext[e[0]]).innerText === (boxtext[e[1]]).innerText)
                    && ((boxtext[e[2]]).innerText === (boxtext[e[1]]).innerText)
                    && ((boxtext[e[1]]).innerText !== "") ){
                        console.log("hi");   
                setTimeout(my,300)
                var e=(boxtext[e[0]]).innerText + " won";
               function my(){
                 alert(e)
                 clearAll();
               }
                  return  isgameover=true; 
                 } else {
                    return  isgameover=false; 
                 }
               })
            }

function tie(){
console.log(isgameover)
var boxtext=document.getElementsByName("button");
var wins2=[0,1,2,3,4,5,6,7,8]
        if ((boxtext[wins2[0]]).innerText != "" && (boxtext[wins2[1]]).innerText != "" &&
            (boxtext[wins2[2]]).innerText != "" && (boxtext[wins2[3]]).innerText != "" &&
            (boxtext[wins2[4]]).innerText != "" && (boxtext[wins2[5]]).innerText != "" &&
            (boxtext[wins2[6]]).innerText != "" && (boxtext[wins2[7]]).innerText != "" &&
            (boxtext[wins2[8]]).innerText != "" && isgameover == false ) {
        setTimeout(tie,500)
        function tie(){
            alert("match tie")
            clearAll();
        }

        }
}
          
    return(
        <div className="gameContainer">
        <div className="container">
          <div className="line"></div>
        <div  className="box" ><button id="1" onClick={moreToggle} name="button" className="boxtext"></button></div>
        <div className="box"><button id="2" onClick={moreToggle} name="button" className="boxtext">{}</button></div>
        <div className="box"><button id="3" onClick={moreToggle} name="button" className="boxtext">{}</button></div>
        <div className="box"><button id="4" onClick={moreToggle} name="button" className="boxtext">{}</button></div>
        <div className="box"><button id="5" onClick={moreToggle} name="button" className="boxtext">{}</button></div>
        <div className="box"><button id="6" onClick={moreToggle} name="button" className="boxtext">{}</button></div>
        <div className="box"><button id="7" onClick={moreToggle} name="button" className="boxtext">{}</button></div>
        <div className="box"><button id="8" onClick={moreToggle} name="button" className="boxtext">{}</button></div>
        <div className="box"><button id="9" onClick={moreToggle} name="button" className="boxtext">{}</button></div>
      </div>
      <div className="gameInfo">
        <div>
          <span className="info">turn for :{cturn}</span>
          <div className="won">

          </div>
          <button id="reset" onClick={()=>{
            boxtext.forEach((item, index)=>{
                boxtext[index].innerText="";
                isgameover=false; 
              })
          }}>Reset</button>
        </div>
      </div>
    </div>
    )
}

export default Ticgame;