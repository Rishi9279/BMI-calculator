import React, { useState } from "react";

const BmiCalculator = () => {
  const [Weight, setWeight] = useState("");
  const [Height, setHeight] = useState("");
  const [Bmi, setBmi] = useState(null);
  const [Category, setCategory] = useState("");

  const calculateBmi = () => {
    if (Weight && Height) {
      const meter = Height / 100;
      const bmiValue = (Weight / (meter * meter)).toFixed(2);
      setBmi(bmiValue);

      if (bmiValue < 18.5) {
        setCategory("Underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setCategory("Normal Weight");
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setCategory("Overweight");
      } else if (bmiValue >= 30) {
        setCategory("Obese");
      } else {
        alert("Please enter valid weight and height");
      }
    }
  };
  const Reset = () => {
    setWeight("");
    setHeight("");
    setCategory("");
    setBmi("");
  };

  return (
    <div style={{
      margin:'0',
      padding: '0',
      boxSizing:'border-box',
      display : 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background:'#262626'

   
    }}>
     <div style={{
      width:'300px',
    
      boxShadow:"4px 6px 8px rgba(0,0,0,1)",

     borderRadius:'15px'
     }}> <h2 style={{
      color:'#ff004f',
     
      textAlign:'center',
      fontSize:'1.7rem',
      fontWeight:'900'
     }}>BMI CALCULATOR</h2>
     <input
        style={{
         
          width:'80%',
           padding: '10px 15px',
           margin: '15px',
           borderRadius : '6px',
           fontSize : '1rem',
           border: 'none',
            // boxShadow:"4px 6px 8px rgba(0,0,0,.8)",
           outline:'none',
         
          }}
        type="number"
        placeholder="Weight (Kg)"
        value={Weight}
        onChange={(e) => {
          setWeight(e.target.value);
        }}
      />
      <input 
       style={{
        width:'80%',
        padding: '10px 15px',
       marginLeft:'15px',
        borderRadius : '6px',
        fontSize : '1rem',
         border: 'none',
           outline:'none',
          //  boxShadow:"4px 6px 8px rgba(0,0,0,.8)",
         
       }}
        type="number"
        placeholder="Height (Cm)"
        value={Height}
        onChange={(e) => {
          setHeight(e.target.value);
        }}
      />
     <div style={{
      display:'flex',
      justifyContent:'space-evenly'
     }}>
     <button style={{
        padding:'10px 15px',
        marginTop:'35px',
        borderRadius:'9px',
        fontSize:'1rem',
        border:'none',
        background:'blue',
        color:'white',
        cursor:'pointer'
      }} onClick={calculateBmi}>Calculate BMI</button>
      <button style={{
         padding:'10px 20px',
         marginTop:'35px',
         borderRadius:'9px',
         fontSize:'1rem',
         border:'none',
         background:'red',
         color:'white'

      }} onClick={Reset}>Reset</button>
     </div>
      <div>
        <h1 style={{
          textAlign:'center',
          fontSize:'1.9rem',
          color:'wheat'
        }}> Your BMI is : {Bmi}</h1>
        <h2 style={{
          textAlign:'center',
          color:'#ff004f',
          fontSize:'1.5rem'
        }}>{Category}</h2>
      </div>
     </div>
    </div>
  );
};

export default BmiCalculator;
