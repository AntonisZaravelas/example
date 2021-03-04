import React, {useState} from 'react'



function App() {
  const [sent,setSent] = useState('');
  const [sent2,setSent2] = useState('');
  
  const handleClick = (id)=>{
    switch(id){
      case 'yes':
        setSent('Take a Kiss')
        break;
      case 'no':
        setSent('That\'s a shame..'+String.fromCodePoint(0x1F621))
        break;
      case 'maybe':
        setSent2('Another kiss')
        break;
      case 'enough':
        setSent2('hmm..')
        break;
      default:
        setSent2('')
    }

  
  
}

  return (
    <div className="App">
      <div className="question">Do you wanna be surprised?</div>
      <button onClick={()=>handleClick('yes')}>Yes</button>
      <button onClick={()=>handleClick('no')}>No</button>
      <h2>{sent}</h2>
      {sent==='Take a Kiss' &&
      <>
        <div>Do you want to be surprised even more?</div>
        <button onClick={()=>handleClick('maybe')}>...maybe?</button>
        <button onClick={()=>handleClick('enough')}>no it's enough</button>
       </>
       }
       {sent2=='Another kiss' && 
       <>
        <h2>{sent2}</h2>
        <div style={{marginTop:150}} class="center-on-page">
  
          <div  class="heart pulse"></div>
  
        </div>
        </>
        }
        {sent2=='hmm..' && 
         <>
          <br/><br/>
          <h1>ASSHOLE!!!</h1>
          </>
        }

        
       
        
    </div>
  );
}

export default App;
