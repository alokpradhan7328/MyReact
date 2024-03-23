import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import {createPortal} from "react-dom"

function App() {
    const [modalOpen,setModalOpen] =  useState(false);
    const [message,setMessage] = useState("");

    const handleButtonClick = (value)=>{
        setModalOpen(false);
        setMessage(value);
    };

    return(
        <div className="App">
            {message}
            <button className="btn btn-open" onClick={()=>setModalOpen(true)}>Open</button>
           {modalOpen && 
           createPortal(
            <Modal 
            onSubmit={handleButtonClick} 
            onCancel={handleButtonClick} 
            onClose={handleButtonClick}
            >
            <h1>Welome TO Hyderabad</h1>
             <p>The city of Pearls</p>
           </Modal>,document.body
           )}
        </div>
    );
}
export default App