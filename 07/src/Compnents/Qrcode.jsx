import { useState } from "react";
import "./styles.css"
import {QRCodeCanvas} from 'qrcode.react';

const Qrcode = () => {
    const [input ,setinput] = useState('');
    const [qr ,setqr] = useState('');
    
    const handleQrcode = () => {
        setqr(input);
        setqr('')
    }

  return (
    <div className='container'>
         <h1>QR Generated </h1>
        <input  onChange={(e)=>setinput(e.target.value)} 
        value={input}
        type="text" name="qr-code"  placeholder='Enter your Data' />
         <button
        //  disabled={input && input.trim() !== "" ? false : true}
         onClick={handleQrcode}>Generated</button>
         <QRCodeCanvas
           value={qr}
          size={300}/>
    </div>
  )
}

export default Qrcode
