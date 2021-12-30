import "./App.css";
import { useState } from "react";
import { parse } from 'papaparse';
import Axios from "axios";
import ReportingList from './ReportingList';

function App() {
  const [ File, setFile ] = useState([]);
  const [ date, setDate ] = useState('');
  
  const fileUpload = ( event ) => {
    
    Array.from(event.target.files)
    .filter((file) => file.type === "text/csv")
    .forEach((file) => { console.log('fileddddddd')});
    
    setDate( event.target.files[0].lastModifiedDate )
    const arrayOfSomething = [];
    const arrayOfFilesUploaded = Object.values(event.target.files);
    const arrayOfCsvFiles = arrayOfFilesUploaded.filter( ( file ) => file.type === 'text/csv')
    const productCount = 0;
    arrayOfCsvFiles.forEach(async (file) => {

      const { name } = file;
      console.log('fileddddddd', file, name)

      // converted the csv file into object containing data -> array of objects containing data row wise.
      // using this validation of 5lack row can be applied from here
      const text = await file.text();
      const result = parse(text, { header: true });
      console.log('resultT', result.data );
      result.data.forEach( ( data ) => { arrayOfSomething.push( { ...data, filename: name } ); })
      console.log( 'arrayOfSomething', arrayOfSomething );
      setFile(arrayOfSomething);
      // console.log('result', JSON.stringify({ title: result }));
    })
    
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body:  {title : 'result'}
    };
        }
        
   onsubmit = ( ) => {
     const productCount = File.length
        console.log('FFFFFFFFFFFIIIILE', productCount)
        
        const payload = new FormData();
        payload.append("name", "fileName");
    payload.append("file", File[0]);
    
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': "application/x-www-form-urlencoded" },
      body:  payload
    };
    const url = "https://httpbin.org/anything";
    if( productCount < 500000 ){
      Axios.post("http://localhost:3003/files", File)
      .then(res => console.log('axois', res))
      .catch(err => console.log(err));
    }
    
   }

    return (
    <div className="App">
      <header className="App-header">
        <input type="file" name="fileUplaod" id="fileUpload" onChange = { (event) => fileUpload(event)} multiple></input>
        <button type="button" class="btn btn-dark" onClick={ () => onsubmit() }>
          Upload
        </button>
        <ReportingList />
      </header>
    </div>
  );
}

export default App;
