

import React from 'react';
import Button from './components/Button';
import ThemaContext from './context/ThemaContext';

function App() {



    
  

  
  return (

     <ThemaContext.Provider value='dark'>
        <Button/>
     </ThemaContext.Provider>
  );
}

export default App;
