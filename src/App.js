import "./App.css";
import { useState } from "react";
import FormData from "form-data";

function App() {
  const [ file, setFile ] = useState([]);
  const [ date, setDate ] = useState('');
  
  const fileUpload = ( event ) => {
    // setFile( event.target.files[0].name);
    setFile( event.target.files); 
    setDate( event.target.files[0].lastModifiedDate )
  }
  
    console.log('event', file, date);
  
   onsubmit = ( ) => {
     
   }

    return (
    <div className="App">
      <header className="App-header">
        <input type="file" name="fileUplaod" id="fileUpload" onChange = { (event) => fileUpload(event)} multiple></input>
        <button type="button" class="btn btn-dark" onClick={ onsubmit() }>
          Upload
        </button>
      </header>
    </div>
  );
}

export default App;
