import { ToastContainer } from "react-toastify";

import "./App.css";
import Class from "./Components/Components_structure/Class/Class";
import Function from "./Components/Components_structure/Function/Function";
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
import Multipleinput from "./Components/Input/Multipleinput";
import Multipledelete from "./Components/Input/Multipledelete";
import Multipleupdate from "./Components/Input/Multipleupdate";
import ComA from "./Components/Hook/UseContaxt2/ComA";
import UseMainContaxt from "./Components/Hook/UseContaxt2/UseMainContaxt";
import UseReducercom from "./Components/Hook/UseReducer/UseReducercom";

function App() {
  return (
    <>
      <div className="appContainer">
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
        {/* <Singleinput/> */}
        {/* <SingleInputrev/> */}
        {/* <Multipleinput /> */}
        {/* <Multipledelete /> */}
        {/* <Multipleupdate /> */}
        {/* <ComA/> */}
        {/* <UseMainContaxt/> */}
        <UseReducercom />
      </div>

      <ToastContainer />
    </>
  );
}

export default App;
