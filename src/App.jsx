import { useEffect, useState } from 'react'


function App() {
  const [clicks, setClicks] = useState(0);
  const [overClicks, setOverClicks] = useState(false);
  const [isActive, setIsActive] = useState(false);

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
  }, [clicks]);

  
  
  return (
    <> 
      <button onClick={clickBarToggle}>{isActive ? "Hide click bar" : "Show click bar"}</button>
      <br />
      {isActive && 
        <>
          <button onClick={handleClick} disabled={overClicks}>clicks:{clicks}</button>
        <p>You clicked {clicks} times</p>
        </>}
      <hr />
      
    </>
  )
}

export default App
