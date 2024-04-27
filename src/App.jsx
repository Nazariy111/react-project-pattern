import { useEffect, useState } from 'react'
import ClickBar from './components/ClickBar/ClickBar';


function App() {
  const [clicks, setClicks] = useState(() => {
    const savedClicks = localStorage.getItem("my-clicks");
    console.log(`i return to you:${savedClicks} type : ${typeof savedClicks}`);
    
    if (savedClicks !== null ) {
      
      return JSON.parse(savedClicks);      
    }

    return 0;
  });

  const [overClicks, setOverClicks] = useState(false);
  const [isActive, setIsActive] = useState(() => {
    const savedIsActive = localStorage.getItem("is-active");
    if (savedIsActive !== null) {
      return JSON.parse(savedIsActive);
    }

    return false;
  });

  const handleClick = () => {
    console.log("click");
    setClicks(clicks + 1);
  };

  const clickBarToggle = () => { 
    setIsActive(!isActive);
  };
  
  useEffect(() => {
    if (clicks === 10) {
      setOverClicks(!overClicks)
    }

    localStorage.setItem("my-clicks", clicks);
  }, [clicks]);

  useEffect(() => {
    localStorage.setItem("is-active", isActive)
  }, [isActive]);

  const onReset = () => {
    setClicks(0);
  }

  
  
  return (
    <> 
      <button onClick={clickBarToggle}>{isActive ? "Hide click bar" : "Show click bar"}</button>
      <br />
      {isActive && <ClickBar
        clickChanger={handleClick}
        overClicks={overClicks}
        clicks={clicks}
        onReset={ onReset} />}
      <hr />
      
    </>
  )
}

export default App
