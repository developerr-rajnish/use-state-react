import { useState } from "react"; 

export function Counter() {
  const [value, setvalue] = useState(0);

  const [item, setitem] = useState();           

  const [price, setprice] = useState();      

  function add() {
    setvalue(value + 1)  
  }

  function sub() {
    setvalue(value - 1) 
  }

  const myitem = (e) => {    
    setitem(e.target.value);
  };

  const myprice = (e) => { 
    setprice(e.target.value);              
  };

  return (
    <div className="box">

      <div className="item-list">
        <h1>Item : {item}</h1>
        <h1>Price : {price}</h1> 
        <h1>Products Left : {value}</h1> 
      </div>

      <div className="myinput"> 
        <input className="mytext" type="text" value={item} onChange={myitem}  />  
        <br />
        <input className="mytext" type="number" value={price} onChange={myprice} />      
      </div> 

      <div className="mybtn">
        <button className="btn btn2" onClick={sub}> - </button>
        <h1>{value}</h1>                                   
        <button className="btn" onClick={add}> + </button>
      </div> 

    </div>
  );
}

