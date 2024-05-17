import * as IO from "react-icons/io";
import PasswordMeter from "./components/PasswordMeter";
import { useEffect, useState } from "react";
import PasswordGenerator from "./components/PasswordGenerator";

function App() {

  const [password,setPassword] = useState("")
  const [score,setScore] = useState(0)


  let upCase = 0;
  let lwCase = 0;
  let numCase = 0;
  let spCase = 0;
  const checkPass = (val)=>{
    if(!/^\d+$/.test(val) && !/[^a-zA-Z0-9\-\/]/.test(val) && val === val.toUpperCase()){
      upCase = 14;
    }
    if(!/^\d+$/.test(val) && !/[^a-zA-Z0-9\-\/]/.test(val) && val === val.toLowerCase()){
      lwCase = 14;
    }
    if(/^\d+$/.test(val)){
      numCase = 14;
    }
    if( /[^a-zA-Z0-9\-\/]/.test(val)){
      spCase = 14;
    }
  }

  const handlePass = (val)=>{
    const arr = val.split('');
    arr.map((char)=>{
      checkPass(char)
    })

    let count = upCase + lwCase + numCase + spCase;
    let lenChar = -42;
    if(val.length >= 12){
      lenChar = 14
    }else if (val.length >= 8){
      lenChar = 0
    }

    
    if(val.length >= 24 && count <= 42){
      setScore(3)
      return;
    }
    count = count + lenChar;
    count == 70?
      count = count + 10
    :
      count = count - 10
    ;

    if(val.length == 0){
      setScore(0)
    }else if(Math.ceil((count / 80) * 4) <= 0){
      setScore(1)
    }else{
      setScore(Math.ceil((count / 80) * 4))
    }
    
  }

  const handleGenerated = (pass)=>{
    setPassword(pass)
  }

  useEffect(() => {
    handlePass(password)
  }, [password]);

  return (
    <div className="App vh-100 d-flex flex-column justify-content-between container">
      <div className="main d-flex flex-column align-items-center pt-5">
        <h4 className="d-flex align-items-center gap-1 text-muted"><IO.IoMdLock /> رمـــــــز ایمــــن</h4>

        <div className="d-flex flex-column align-items-center my-5 col-10 gap-4">
          <div className="form-group col-6">
            <input type="text" 
            onChange={(e)=>setPassword(e.target.value)}
            className="passInput form-control mb-3" 
            placeholder="رمز مورد نظرتان را وارد کنید..."
            value={password}
            />
            
            <PasswordMeter score={score} />
          </div>

          <div className="col-6">
            <PasswordGenerator generatedPass={handleGenerated} />
          </div>

        </div>
      </div>

      <div className="footer text-center py-3">
        <small> طراحی شده توسط <a href="https://hamidkamyab.ir/" target="_blank" className="text-muted">حمید کامیاب</a></small>
      </div>
    </div>
  );
}

export default App;
