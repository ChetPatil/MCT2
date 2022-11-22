import {useState,useEffect,useRef} from 'react';
import TextContainer from './components/TextContainer';
import './../src/App.css'

function App() {

  const [permission,setPermission] = useState('enabled');
  const [color,setFontColor] = useState('black');
  const [size,setSize] = useState(12);
  const [family,setFamily] = useState('Monospace');

  const reference1 = useRef(null);
  const reference2 = useRef(null);
  const reference3 = useRef(null);

  useEffect(() => {
    if(permission === 'disabled'){
      reference1.current.disabled = true;
      reference2.current.disabled = true;
      reference3.current.disabled = true;
    }else{
     reference1.current.disabled = false;
     reference2.current.disabled = false;
     reference3.current.disabled = false;
  }},[permission]);

  
  return (
    <>
      <div className="Navigation">
        <div className="subNavigation">
          <select name="editOption" className="opt1" onChange={(e)=>{setPermission(e.target.value)}}>
            <option value="enabled">Allow edit</option>
            <option value="disabled">Edit not allowed</option>
          </select>
          <select name="fontColor"className="opt2" ref={reference1} onChange={(e)=>setFontColor(e.target.value)} >
            <option value="black">Black</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>
          <select name="fontSize" className="opt3" ref={reference2}  onChange={(e)=>setSize(e.target.value)}>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">20</option>
            
          </select>
          <select name="fontFamily"className="opt4" ref={reference3}  onChange={(e)=>setFamily(e.target.value)} >
            <option value="Monospace">Monospace</option>
            <option value="Sans-Serif">Sans-Serif</option>
            <option value="Serif">Serif</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Cursive">Cursive</option>
            <option value="Roboto">Roboto</option>
            <option value="Arial">Arial</option>
            
          </select>
        </div>
      </div>
       <TextContainer color={color} size={size} family={family}/>      
    </>
  );
}

export default App;
