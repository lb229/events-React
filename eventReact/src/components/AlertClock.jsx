export function AlertClock ({onClick}){
  function eventClick (){
    const currentTime = new Date();
    alert(`The current Time is${currentTime.toLocaleTimeString()}`);
    
  }
  return (
    <div>
      <p>If you click this button, it will show you the current time!</p>
      <button onClick={eventClick}>Click me!</button>
    </div>
  )
}