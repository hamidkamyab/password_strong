import * as Vsc from "react-icons/vsc";
import PasswordMeter from "./components/PasswordMeter";

function App() {
  return (
    <div className="App vh-100 d-flex flex-column justify-content-between container">
      <div className="main d-flex flex-column align-items-center pt-5">
        <h4>رمـــــــز ایمــــن</h4>

        <div className="d-flex justify-content-center my-5 col-10">
          <div className="form-group col-6">
            <input type="text" className="passInput form-control mb-3" placeholder="رمز مورد نظرتان را وارد کنید..." />

            <PasswordMeter />
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
