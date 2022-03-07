import React, { useState } from "react";
import Alert from "./Alert";

const Bmi = () => {
  const [height, setHeight] = useState(0);
  const [mass, setMass] = useState(0);
  const [bmi, setBmi] = useState(0);
  let [status, setStatus] = useState("Check your BMK first")


  const calculate = (e) => {
    e.preventDefault();
    const formValid = +height > 0 && +mass > 0;
    if (!formValid) {
      return;
    }
    const bmi = +mass / (+height) ** 2;
    setBmi(bmi);

    if (bmi < 18.5) {
      status = "Underweight"
    } else if (bmi >= 18.5 && bmi <= 24.999999999999999) {
      status = "Normal"
    } else if (bmi >= 25 && bmi <= 29.999999999999999) {
      status = "Overweight"
    } else if (bmi >= 30) {
      status = "Obese"
    }
    setStatus(status)
  };

  // const cek = () =>{

  //   document.getElementById('status').value = status;
  // }

  const alert = () => {
    if (status === "") {
      return <div></div>;
    }
    if (status === "Underweight") {
      return <Alert type="danger">
        <p><b>{status}</b> ({bmi})</p>
      </Alert>

    }
    if (status === "Normal") {
      return <Alert type="success" children>
        <p><b>{status}</b> ({bmi})</p>
      </Alert>
    }
    if (status === "Overweight") {
      return <Alert type="warning">
        <p><b>{status}</b> ({bmi})</p>
      </Alert>
    }
    if (status === "Obese") {
      return <Alert type="danger">
        <p><b>{status}</b> ({bmi})</p>
      </Alert>
    }
  }


  return (
    <div className="formulir"><br /><br /><br /><br /><br />
      <div className="container d-flex align-items-center">
        <div className="card col-md-6 ">
          <div className="card-header bg-dark text-white text-center">
            <h4>Body Mass Index</h4>
          </div>
          <div className="card-body text-left">
            <form onSubmit={calculate}>
              <div>
                Height
                <input className="form-control" value={height} onChange={(e) => setHeight(e.target.value)} />
              </div><br />

              <div>
                Weight
                <input value={mass} onChange={(e) => setMass(e.target.value)} className="form-control" />
              </div><br />

              <button type="submit" className="btn btn-dark w-100" >Calculate</button>
            </form>
            {alert()}


          </div>
        </div>
      </div>
    </div>
  );
};

export default Bmi;