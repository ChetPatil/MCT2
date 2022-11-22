import {useState,useEffect,useRef} from 'react';
import Textarea from './components/Textarea';
import './../src/App.css'

function App() {

  const [permit,setPermit] = useState('enabled');
  const [color,setColor] = useState('black');
  const [size,setSize] = useState(12);
  const [family,setFamily] = useState('Monospace');

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  useEffect(() => {
    if(permit === 'disabled'){
      ref1.current.disabled = true;
      ref2.current.disabled = true;
      ref3.current.disabled = true;
    }else{
     ref1.current.disabled = false;
     ref2.current.disabled = false;
     ref3.current.disabled = false;
  }},[permit]);

  
  return (
    <>
      <div className="main-nav">
        <div className="sub-nav">
          <select name="edit-option" className="edit1" onChange={(e)=>{setPermit(e.target.value)}}>
            <option value="enabled">Allow edit</option>
            <option value="disabled">Edit not allowed</option>
          </select>
          <select name="font-color" ref={ref1} onChange={(e)=>setColor(e.target.value)} className="edit2">
            <option value="black">Black</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>
          <select name="font-size" ref={ref2}  onChange={(e)=>setSize(e.target.value)} className="edit3">
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
          </select>
          <select name="font-family" ref={ref3}  onChange={(e)=>setFamily(e.target.value)} className="edit4">
            <option value="Monospace">Monospace</option>
            <option value="Serif">Serif</option>
            <option value="Sans-Serif">Sans-Serif</option>
            <option value="Cursive">Cursive</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Arial">Arial</option>
            <option value="Roboto">Roboto</option>
          </select>
        </div>
      </div>
       <Textarea color={color} size={size} family={family}/>      
    </>
  );
}

export default App;
