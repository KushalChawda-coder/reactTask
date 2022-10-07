import React, { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style19.css"

const Formvalidation=()=>{
 

  const [model,setModel]=useState({})
  const [name,setName]=useState({changetext:"sign up"})
  const [change,setChange]=useState({display:"block"})
  const initialValues = { firstname: "", lastname: "", number:"", email:"" ,password: "",conpassword:"",
                            city: "",address:""};
  
  const [formvalue,setFormvalue]=useState(initialValues);
  const [formerrors,setFormErrors]=useState({})
  const [isSubmit,setIsSubmit]=useState(false)
  var    [radio,setRadio]=useState("");
  const [count,setCount]=useState(0);
 
     
 
  
  const movebtn2=()=>{
    let updatedValue = {transform:"translateX(0%)",transition:"all 0.6s ease-in-out",changetext:"Sign up"};  
    setName(name => (
      {...name,...updatedValue}));

      let updatedValue2 = {A:{display:"block"},B:{display:"none"}};  
      setChange(change => (
        {...change,...updatedValue2}));
  }
 
  const movebtn=()=>{
    let updatedValue = {transform:"translateX(97.5%)",transition:"all 0.6s ease-in-out",changetext:"login"};  
    setName(name => (
      {...name,...updatedValue}));
      
      let updatedValue2 = {A:{display:"none"},B:{display:"block"}};  
      setChange(change => (
        {...change,...updatedValue2}));
        
  }

  const [checkerror,setCheckerror]=useState("");
  const handelChange=(e)=>{
    const {name,value}=e.target;
    
    setFormvalue({...formvalue, [name]: value});
    setFormErrors(validate(formvalue));
    if(count < 1){
      setCheckerror("select atleast two");
     } else{
      setCheckerror("");
    }
}
var [stateerror,setStaterror]=useState("");
var [state,setState]=useState("");

const stateChange=(e)=>{
    setState(e.target.value);
    var state1=e.target.value;
    if(state1 == ""){
      setStaterror("state field is required");
    } else{
      setStaterror("");
    }
   
}

const numberChange=(e)=>{
    const {name,value}=e.target;
    setFormvalue({...formvalue, [name]: value});
    setFormErrors(validate(formvalue));
}
const [radioerror,setRadioerror]=useState("")


const handelSubmit=(event)=>{
  event.preventDefault();
  setFormErrors(validate(formvalue));
  
    if(state == ""){
      setStaterror("state field is required");
    } else{
      setStaterror("");
    }
    if(count < 2){
      setCheckerror("select atleast two");
     
     } else{
      setCheckerror("");
     
    }
  setIsSubmit(true);

}

const livecheck=()=>{

}
const validate=(values)=>{
  
  const errors = {};
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const regexName = /^[a-zA-Z ]+$/;
  const regexCity= /^[a-zA-Z\u0080-\u024F]+(?:([\ \-\']|(\.\ ))[a-zA-Z\u0080-\u024F]+)*$/;
  const regexPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
  
  
  console.log(values.firstname.length);
  if(values.firstname.length == 0 || values.firstname.length == 1){
    errors.firstname="first name is required";
  } else if(!regexName.test(String(values.firstname).toLowerCase())){
    errors.firstname="name must be proper";
  }

  if(values.lastname.length == 0 || values.lastname.length == 1){
    errors.lastname="last name is required";
  } else if(!regexName.test(values.lastname)){
    errors.lastname="last name must be proper";
  }

   if(values.number.length != 10){
    errors.number="number should be 10 digit";
  } else if(values.number == ""){
    errors.number="number is required";
  }

  if(!values.email && values.email == "" ){
    errors.email="email is required";
  } else if(!regexEmail.test(values.email)){
    errors.email="please enter a valid email";
  }

  if(!values.password && values.password == "" ){
    errors.password="password is required";
  } else if(!regexPassword.test(values.password)){
    errors.password="password must be Minimum eight  at least one uppercase letter, one lowercase letter, one number and one special character";
  }

  if(!values.password && values.conpassword == "" ){
    errors.conpassword="confirm password is required";
  } else if(values.password !== values.conpassword){
    errors.conpassword="password are not matching";
  }

  if(values.city.length == 0 || values.city.length == 1){
    errors.city="please enter a valid city name";
  } else if(!regexCity.test(String(values.city).toLowerCase())){
    errors.city="please enter a valid city name ";
  }

  if(values.address.length == 0 || values.address.length == 1){
    errors.address="please enter a valid city name";
  } else if(values.address.length > 60){
    errors.address="please enter a valid address";
  }

  if(radio == ""){
   setRadioerror("please select gender");
  }
   return errors;
}

var submitstatus=false;
if(count > 1){
  submitstatus=true;
} else{
  submitstatus=false;
}
const submit=()=>{
  if( Object.keys(formerrors).length === 0 && radio != "" && submitstatus == true && isSubmit ){
    alert("you data is saved")
  } 
}


//login code 

const initialValuesL = {emailL:"" ,passwordl: ""};
  
  const [formvalueL,setFormvalueL]=useState(initialValuesL);
  const [formerrorsL,setFormErrorsL]=useState({})
  const [isSubmitL,setIsSubmitL]=useState(false)

  const handelChangeL=(e)=>{
    const {name,value}=e.target;
    setFormvalueL({...formvalueL, [name]: value});
    setFormErrorsL(validateL(formvalueL));
}

  const handelSubmitL=(event)=>{
    event.preventDefault();
    setFormErrorsL(validateL(formvalueL));
  
    setIsSubmitL(true);
   
  }

 

const validateL=(values)=>{
  
  const errorsL = {};
  
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const regexPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
  
  if(!values.emailL && values.emailL == "" ){
    errorsL.emailL="email is required";
  } else if(!regexEmail.test(values.emailL)){
    errorsL.emailL="please enter a valid email";
  }

  if(!values.passwordL && values.passwordL == "" ){
    errorsL.passwordL="password is required";
  } else if(!regexPassword.test(values.passwordL)){
    errorsL.passwordL="password must be Minimum eight  at least one uppercase letter, one lowercase letter, one number and one special character";
  }

   return errorsL;
}

const numberChangeL=(e)=>{
  const {name,value}=e.target;
  setFormvalueL({...formvalueL, [name]: value});
  setFormErrorsL(validateL(formvalueL));
}

const submitL=()=>{
  if( Object.keys(formerrorsL).length === 0  && isSubmitL ){
    alert("you data is saved")
  } 
}

return (
  <>
  <div className="container-fluid d-flex justify-content-center">
    <div className="row">
      <div className="col-12">

    <div className="popup">
      <h1>Sign up</h1>
      <button className="button" onClick={()=>{
       let updatedValue = {A:{transform:"scale(100%)"},B:{display:"block"}};
       setModel(model => (
        {...model,...updatedValue}));
      }} id="open-box" type="button" name="button">Sign Up</button>
    </div>

    <span className="close" onClick={()=>{
       let updatedValue = {A:{transform:"scale(0%)"},B:{display:"none"}};
       setModel(model => (
        {...model,...updatedValue}));
      }} style={model.B}>&times;</span>

    <div className="modelFrom" style={model.A}>
      <div className="actionBtns">
        <button className="actionBtn Signup" onClick={movebtn2}>Signup</button>
        <button className="actionBtn login" onClick={movebtn}>login</button>
        <button className="movebtn" style={name}>{name.changetext}</button>

      </div>
      <div className="userform">
        <form className="form sign-form" onSubmit={handelSubmit} style={change.A}>
          <div className="inputgroup">
            <input onChange={handelChange} type="text" id="firstname" name="firstname" placeholder="First name" value={formvalue.firstname} />
            <h3 id="firstnamecheck">{formerrors.firstname}</h3>
          </div>
          <div className="inputgroup">
            <input onChange={handelChange} type="text" id="lastname" name="lastname"   placeholder="Last name" value={formvalue.lastname}/>
            <h3 id="lastnamecheck">{formerrors.lastname}</h3>
          </div>
          <div className="inputgroup">
            <input onKeyUp={numberChange} onChange={handelChange} type="number" id="number"  name="number" placeholder="number" value={formvalue.number} />
            <h3 id="numbercheck">{formerrors.number}</h3>
          </div>
          <div className="inputgroup">
            <input  onChange={handelChange} type="email" id="email" name="email" placeholder="email" value={formvalue.email} />
            <h3 id="emailcheck">{formerrors.email}</h3>
          </div>
          <div className="inputgroup">
            <input onKeyUp={numberChange} onChange={handelChange} type="password" id="password" name="password" placeholder="passsword" value={formvalue.password} />
            <h3 id="passcheck">{formerrors.password}</h3>
          </div>
          <div className="inputgroup">
          <input onKeyUp={numberChange} onChange={handelChange} type="password" id="conpassword" name="conpassword"  placeholder="confirm passsword" value={formvalue.conpassword} />
          <h3 id="conpasscheck">{formerrors.conpassword}</h3>
          </div>
          <div className="inputgroup" >
            <select  name="states"  onChange={stateChange}>
              <option value="">select state</option>
              <option value="MadhyaPardesh">MadhyaPardesh</option>
              <option value="Gujarat">Gujarat</option>
              <option value="MaHarashtra">MaHarashtra</option>
              <option value="punjab">punjab</option>
            </select>
          <h3 id="statescheck">{stateerror}</h3>
          </div>
          <div className="inputgroup">
            <input onChange={handelChange} type="text" id="city" name="city" placeholder="city" value={formvalue.city}/>
          <h3 id="citycheck">{formerrors.city}</h3>
          </div>
          <div className="inputgroup">
            <textarea onChange={handelChange} name="address" id="address" placeholder="please put address" rows="3" cols="38" value={formvalue.address}></textarea>
          <h3 id="addresscheck">{formerrors.address}</h3>
          </div>
          <div className="checkgroup" >
            <input  type="radio" id="m" onClick={()=> {
              setRadio("M");
              setRadioerror("")
            
            }}  name="gendar" value="MALE" />
            <label htmlFor="m">Male</label>
            <input  type="radio" id="f"  name="gendar" onClick={()=> {
              setRadio("F");
              setRadioerror("")
            }} value="FEMALE"/>
            <label htmlFor="f">FEMALE</label>
          </div>
          <h3 >{radioerror}</h3>
          <div className="checkgroup" > 
            <input onChange={handelChange} name="myRadio" onClick={()=>{
               var radios = document.getElementsByName("myRadio");
               if(radios[0].checked){
                setCount(count+1);
              } else {
                setCount(count-1);
              }
              livecheck();
             
            } } type="checkbox"  className="checkbox" value="PHP"/>
            <label htmlFor="PHP">PHP</label>
            <input onChange={handelChange} name="myRadio" onClick={()=>{
               var radios = document.getElementsByName("myRadio");
               if(radios[1].checked){
                setCount(count+1);
              } else {
                setCount(count-1);
              }
              livecheck();
            } } type="checkbox" className="checkbox" value="JS"/>
            <label htmlFor="JS">JS</label>
            <input onChange={handelChange} name="myRadio" onClick={()=>{
               var radios = document.getElementsByName("myRadio");
               if(radios[2].checked){
                setCount(count+1);
              } else {
                setCount(count-1);
              }
              livecheck();
            } } type="checkbox" className="checkbox" value="PYTHON"/>
            <label htmlFor="PYTHON">PYTHON</label>
            <input onChange={handelChange} name="myRadio" onClick={()=>{
               var radios = document.getElementsByName("myRadio");
               if(radios[3].checked){
                setCount(count+1);
              } else {
                setCount(count-1);
              } 
              livecheck();
            } } type="checkbox" className="checkbox" value="NORD"/>
            <label htmlFor="NORD">NORD</label>

          </div>
          <h3 id="checkboxcheck">{checkerror}</h3>
            <input  type="submit" onClick={submit} id="submit-js" className="SubmitBtn"  placeholder="confirm passsword" value="Submit"/>
        </form>

        <form  id="login" onSubmit={handelSubmitL} className="form login-form" style={change.B} >
          <div className="inputgroup">
            <input onChange={handelChangeL} type="email" id="email-log" placeholder="email" name="emailL"  value={formvalueL.emailL} />
            <h3 id="emailcheck_log">{formerrorsL.emailL}</h3>
          </div>
          <div className="inputgroup">
          <input onKeyUp={numberChangeL} onChange={handelChangeL} type="password"  name="passwordL" placeholder="passsword" value={formvalueL.passwordL} />
            <h3 id="passcheck">{formerrorsL.passwordL}</h3>
          </div>
          <div className="checkgroup">
            <input onChange={handelChangeL} type="checkbox" id="Remember"  className="checkbox"/>
            <label htmlFor="PHP">Remember me</label>
          </div>

          <input   type="submit" onClick={submitL} id="submit-log" className="SubmitBtn" name="submit" placeholder="confirm passsword" value="log in"/>
        </form>
      </div>
    </div>
  </div>
</div>
</div>
</>
)
}
export default Formvalidation;
  



