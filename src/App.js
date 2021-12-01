import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./static/css/App.css";
import SideBar from "./components/sidebar/SideBar";
import Content from "./contents/Contents";


function App() {

  const [isOpen, setIsOpen] = useState(false);


	const toggle = () => setIsOpen(!isOpen)

  return (
    <div className="App wrapper">
      <SideBar toggle={toggle} isOpen={isOpen} />
      <Content toggle={toggle} isOpen={isOpen} />
        
  </div>
  );
}

export default App;