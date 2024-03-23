import  { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [quote,setQuote] = useState([]);
  const [author,setAuthor] = useState('');
  const [btnClick,setBtnClick] = useState(0);
  const [background,setBackground] = useState ();
  const [c,setC] = useState(0);
  const [savedQutoes,setSavedQutoes] = useState([]);

  useEffect(()=>{
    axios.get('https://api.quotable.io/random').then((data) => {
      setQuote(data.data.content);
      setAuthor(data.data.author);
    })
  },[btnClick]);

  const refresh =()=>{
    setBtnClick(btnClick+1);
    setC(c+1);
    const color = '#'+Math.round(Math.random()*10000000).toString(16)
    setBackground(color);
  };

  const save = ()=>{
    if(quote && author){
      console.log('hiii');
      setSavedQutoes([...savedQutoes,{quote,author}])
    }
  };

  const deleteQuote = (index) => {
    const updatedQutoes = [...savedQutoes];
    updatedQutoes.splice(index,1);
    setSavedQutoes(updatedQutoes);
  };

  return (
    <div className='center'>
        <div className='quote' style={{backgroundColor:background}}>
          <blockquote>"{quote}"</blockquote>
          <cite>~{author}</cite>
         
          <div className='btns'>
            <p id='c'>{c}</p>
            <button id='test' onClick={refresh}>New Quotes</button>
            <button id='demo' onClick={save}>Save</button>
          </div>
        </div>
        <div className='savedQuotesContainer'>
          {savedQutoes.map((item,index) =>(
            <div key={index} className='savedQuote'>
              <p>"{item.quote}"</p>
              <p>~{item.author}</p>
              <button onClick={()=>deleteQuote(index)}>✖️</button>
            </div>
          ))}

        </div>
    </div>
  );
};

export default App
