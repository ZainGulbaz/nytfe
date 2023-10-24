import './App.css';
import { HashRouter,Route,Routes  } from 'react-router-dom';
import Login from './views/login/login';
import Signup from './views/signup/signup';
import Posts from './views/posts/posts';
import { ChakraProvider } from '@chakra-ui/react'
import Nav from './components/navbar';


function App() {
  return (
    <ChakraProvider>
    <HashRouter>
    <Routes>
 <Route exact path="/login" element={<Login/>}/>
 <Route exact path="/stories" element={<><Nav></Nav><Posts/></>}/>
 <Route exact path={"/signup"} element={<Signup/>}/>
 <Route exact path={"/"} element={<Signup/>}/>
    </Routes>    
    </HashRouter>
    </ChakraProvider>
  )
}

export default App;
