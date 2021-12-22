import "./App.css";
import { useState } from "react";
import { parse } from 'papaparse';

function App() {
  const [ file, setFile ] = useState([]);
  const [ date, setDate ] = useState('');
  
  const fileUpload = ( event ) => {
    
    Array.from(event.target.files)
    .filter((file) => file.type === "text/csv")
    .forEach((file) => { console.log('file', file)});
    
    setFile( event.target.files); 
    setDate( event.target.files[0].lastModifiedDate )
    
    const arrayOfFilesUploaded = Object.values(event.target.files);
    arrayOfFilesUploaded.filter( ( file ) => file.type === 'text/csv')
    .forEach(async (file) => {

      // converted the csv file into object containing data -> array of objects containing data row wise.
      // using this validation of 5lack row can be applied from here
      const text = await file.text();
      const result = parse(text, { header: true });
    })

  }
  
   
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
