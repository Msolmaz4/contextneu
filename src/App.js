

import React from 'react';
import Button from './components/Button';
import User from './components/User';
import { ThemaProvider}  from './context/ThemaContext';
import {UserProvider} from './context/UserContext'

function App() {



    
  

  
  return (

     <ThemaProvider>
      <UserProvider>
      <Button/>
      <User/>
      </UserProvider>
      
     </ThemaProvider>
  );
}

export default App;
