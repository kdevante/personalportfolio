import PlaceHolder from "./PlaceHolder/PlaceHolder.jsx";
function App() {
  const dev_mode = true
  if (dev_mode) {
    return (
      <>
      </>
    );
  }else{
    return (
    <>
      <PlaceHolder/>
    </>
  );}
  
}

export default App;
