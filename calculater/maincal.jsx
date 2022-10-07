import React,{useCallback, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";


const  Cal = ()=>{

        const [answer, setAnswer] = useState('');
        const [checkAnswer, setCheckAnswer] = useState(false);
        const [reset,setReset] = useState(false);
    
        const numericButton = (digit) =>{
            setAnswer(answer + digit);
            setCheckAnswer(true);
            setReset(0)
            if(reset === true){
                setAnswer(digit)
            }
        }
        const operatorButton = (ope) =>{
            if(checkAnswer === true){
                setAnswer(answer + ope)
                setCheckAnswer(false);
            }
        }
        const equalButton = () =>{
            const result = eval(answer);
            if(result === undefined){
                setAnswer(0);
            }
            else{
                setAnswer(result);
                setReset(true)
            }
        }
        const ClearAll = () =>{
            setAnswer('');
        }
        
    
    
    return(
    <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-5">

        <div className="calculater">
        <h1>calculater</h1>
        <input type="text" name=""  value={answer}/>
        <table>
            <tbody>
          <tr>
            <td><button type="button"   name="button"></button></td>
            <td><button type="button"  name="button"></button></td>
            <td><button type="button" onClick={ClearAll} name="button">C</button></td>
            <td><button type="button" onClick={() => {operatorButton('%')}} name="button">%</button></td>
          </tr>

          <tr>
            <td><button type="button" onClick={() => {numericButton('7')}} name="button">7</button></td>
            <td><button type="button" onClick={() => {numericButton('8')}} name="button">8</button></td>
            <td><button type="button" onClick={() => {numericButton('9')}}  name="button">9</button></td>
            <td><button type="button"  onClick={() => {operatorButton('*')}} name="button">*</button></td>
          </tr>

          <tr>
            <td><button type="button" onClick={() => {numericButton('4')}} name="button">4</button></td>
            <td><button type="button" onClick={() => {numericButton('5')}} name="button">5</button></td>
            <td><button type="button" onClick={() => {numericButton('6')}} name="button">6</button></td>
            <td><button type="button" onClick={() => {operatorButton('-')}} name="button">-</button></td>
          </tr>

          <tr>
            <td><button type="button" onClick={() => {numericButton('1')}} name="button">1</button></td>
            <td><button type="button" onClick={() => {numericButton('2')}} name="button">2</button></td>
            <td><button type="button" onClick={() => {numericButton('3')}} name="button">3</button></td>
            <td><button type="button" onClick={() => {operatorButton('+')}} name="button">+</button></td>
          </tr>

          <tr>
            <td><button type="button" onClick={() => {operatorButton('/')}} name="">/</button></td>
            <td><button type="button" onClick={() => {numericButton('0')}} name="button">0</button></td>
            <td><button type="button" onClick={() => {operatorButton('.')}} name="button">.</button></td>
            <td><button type="button" onClick={equalButton} name="button">=</button></td>
          </tr>
          </tbody>
        </table>
        </div>
      </div>
    </div>
  </div>
    )

}

  {/* <script type="text/javascript">
    let screen = document.getElementById("screen");
    buttons =document.querySelectorAll('button');
    let screenValue='';

    for (item of buttons){
         item.addEventListener('click',(e)=>{
           // console.log(item);
         buttonText = e.target.innerText;

          if (buttonText == 'C') {
           screenValue="";
           screen.value=screenValue;
         } else if (buttonText == '=') {
           screen.value=eval(screenValue);
           return screenValue="";
         } else {
           screenValue += buttonText;
           screen.value = screenValue;
           if (buttonText == '*') {
           var myArray = screenValue.split("*");
              k="*";
              z="";
             for (var i = 0; i < myArray.length; i++) {
               a=myArray[i]
                 if (a != "") {
                   console.log(a)
                  z=z+a+k;
                 screen.value=z;
               }
               }
               return screenValue=z;
           } else if (buttonText == '%') {
             var myArray = screenValue.split("%");
                k="%";
                z="";
               for (var i = 0; i < myArray.length; i++) {
                 a=myArray[i]
                   if (a != "") {
                     z=z+a+k;
                    screen.value=z;
                   }
               }
               return screenValue=z;
           } else if (buttonText == '+') {
             var myArray = screenValue.split("+");
                k="+";
                z="";
               for (var i = 0; i < myArray.length; i++) {
                 a=myArray[i]
                   if (a != "") {
                     z=z+a+k;
                     screen.value=z;
                   }
               }
               return screenValue=z;

           } else if (buttonText == '-') {
             var myArray = screenValue.split("-");
                k="-";
                z="";
               for (var i = 0; i < myArray.length; i++) {
                 a=myArray[i]
                   if (a != "") {
                     z=z+a+k;
                     screen.value=z;
                   }
               }
               return screenValue=z;
           } else if (buttonText == '/') {
             var myArray = screenValue.split("/");
                k="/";
                z="";
               for (var i = 0; i < myArray.length; i++) {
                 a=myArray[i]
                   if (a != "") {
                     z=z+a+k;
                    screen.value=z;
                   }
               }
               return screenValue=z;
            } else if (buttonText == '.') {
              var myArray = screenValue.split(".");
                 k=".";
                 z="";
                for (var i = 0; i < myArray.length; i++) {
                  a=myArray[i]
                    if (a != "") {
                      z=z+a+k;
                     screen.value=z;
                    }
                }
                return screenValue=z;
             }
         }
       })
    }
  </script>
</body>
</html> */}

export default Cal;