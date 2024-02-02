import {BrowserRouter,} from "react-router-dom"
import './App.css';
import Routes from "./Routes";
import { AppProvider } from "./components/Context";
import { useEffect, useState } from "react";
import { GeneralProgress } from "./custom/generalProgress";

function App() {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const loadingTime = setTimeout(()=>{
setLoading(false)
    }, 3000)

    return () => {
      clearTimeout(loadingTime)
    };
  }, []);
  return (
    
   <>
    
    {
      loading ? <GeneralProgress/> :
      (
        <AppProvider>
        <div className="App">
      < BrowserRouter style={{backgroundColor: "purple"}}>
      <Routes/>
      </BrowserRouter>

    </div>
    </AppProvider>
      )
    }</>

  
  );
}

export default App;
