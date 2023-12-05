import { ToastContainer } from "react-toastify";

import "./App.css";
import Class from "./Components/Components_structure/Class/Class";
import Function from "./Components/Components_structure/Function/Function";
import PrecticeCreateInput from "./Components/Input/PrecticeCreateInput";
import Singleinput from "./Components/Input/Singleinput";
import Lifecyclemethod from "./Components/LifeCycleMethod/Lifecyclemethod";
import Lifepro from "./Components/LifeCycleMethod/Lifepro";
import Unmount from "./Components/LifeCycleMethod/Unmount";
import Cards from "./Components/Props/Cards";
import Cards1 from "./Components/Props/Cards1";
import Classprops from "./Components/Props/Class/Classprops";
import Functionprops from "./Components/Props/Function/Functionprops";
import UseEfectCom from "./Components/Usestate/UseEfectCom";
import UseEfreectProject from "./Components/Usestate/UseEfectProject";
import Usestate from "./Components/Usestate/Usestate";
import SingleInputrev from "./Components/Input/SingleInputrev";

function App() {
  return (
    <>
      {/* <Class/> */}
      {/* <Function/> */}
      {/* <Classprops/> */}
      {/* <Functionprops/> */}
      {/* <Cards data={{name:"jenil", greeting:"Good morning"}}/> */}
      {/* <Cards1/> */}
      {/* <Usestate /> */}
      {/* <Lifecyclemethod /> */}
      {/* <Unmount/> */}
      {/* <Lifepro /> */}
      {/* <UseEfectCom/> */}
      {/* <UseEfreectProject/> */}
      <Singleinput/>
      {/* <PrecticeCreateInput/> */}
    <SingleInputrev/>


      <ToastContainer />
    </>
  );
}

export default App;
