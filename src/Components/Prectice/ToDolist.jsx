import { configure } from "@testing-library/react";
import { Divide } from "lucide-react";
import React, { useState } from "react";
import { ArrowRight, CheckCircleFill, Trash3 } from "react-bootstrap-icons";
import { toast } from "react-toastify";
import { Button, Input, Label } from "reactstrap";

export default function ToDoList() {
  let [task, setTask] = useState("");
  let [pendingTask, setPendingTask] = useState([]);
  let [doneTask, setDoneTask] = useState([]);
  let [selectIndex, setselectIndex] = useState([]);
  let [allselectIndex, setallselectIndex] = useState([]);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const getData = (eleDetails) => {
    let inputValue = eleDetails?.target?.value;
    setTask(inputValue);
  };

  const addTask = () => {
    let allData = [...pendingTask, task]; // combine old + new data
    setPendingTask(allData);
    setTask(""); // to empty input value after add task
    toast.success("Success");
  };

  const deleteHandler = (index) => {
    let arr = pendingTask.filter((e, i) => i !== index);
    alert("Deleted");
    setDoneTask([...arr]);
  };

  const doneTaskHandler = (index) => {
    setDoneTask([...doneTask, pendingTask[index]]);
    let newData = pendingTask?.filter((e, i) => i !== index);
    setPendingTask(newData);
    alert("Conform Done Task?");
    // ConfirmDialog("LL")
  };

  const panddingTask = (index) => {
    setPendingTask([...pendingTask, doneTask[index]]);
    let newData1 = doneTask?.filter((e, i) => i !== index);
    alert("Return Pandding Task?");
    setDoneTask(newData1);
  };

  // const panddingTask = (index) => {
  //   let con =("are you sure")
  //   if (con) {

  //     setPendingTask([...pendingTask, doneTask[index]]);
  //   }else{

  //     let newData1 = doneTask?.filter((e, i) => i !== index);
  //     setDoneTask(newData1);
  //   }
  // };

  const selectHandler = (index) => {
    let available = selectIndex.includes(index);
    if (available) {
      let filter = selectIndex?.filter((e) => e !== index);
      setselectIndex(filter);
    } else {
      setselectIndex([...selectIndex, index]);
    }
  };

  // const allDoneHandler = (index) => {
  //     let allData = allselectIndex.includes(index)
  //     if(allData){
  //       let filterData = allselectIndex?.filter((e) => e !== index)
  //       setallselectIndex(filterData)
  //     }else{
  //       setallselectIndex([...allselectIndex,index])
  //     }
  // }

  return (
    <>
      <div className="d-flex align-items-end">
        <div>
          <Label className="justify-content-center ms-5">Add Task</Label>
          <Input
            value={task}
            className="ms-5"
            onChange={(e) => getData(e)}
            placeholder="Enter Task"
          />
        </div>
        <div>
          <Button
            onClick={addTask}
            className="ms-5"
            style={{ backgroundColor: "green", color: "white" }}
          >
            Add Task
          </Button>
        </div>
      </div>
      <div className="d-flex w-100 p-4 justify-content-between ">
        <div
          style={{ minWidth: "45%" }}
          className="border border-dark rounded-2 pe-2 mt-3"
        >
          <h1 className="text-center">Pending Task</h1>
          <Input
            className="me-0"
            type="checkbox"
            // onClick={() => allselectHandler()}
          />
          <hr style={{ padding: "5px", backgroundColor: "orange" }} />
          <ul>
            {pendingTask.map((element, i) => {
              return (
                <>
                  <div className="d-flex justify-content-between ">
                    <li key={i}>
                      {i + 1}. {element}
                    </li>
                    <div className="d-flex gap-2">
                      <CheckCircleFill
                        role="button"
                        color="green"
                        // onClick={toggle}
                        onClick={() => doneTaskHandler(i)}
                      />

                      <Input
                        onChange={() => selectHandler(i)}
                        type="checkbox"
                        checked={selectIndex.includes(i)}
                      />
                    </div>
                  </div>
                  <hr />
                </>
              );
            })}
          </ul>
          <Button className="w-100 m-2" color="danger">
            DONE
          </Button>
        </div>
        <div
          style={{ minWidth: "45%" }}
          className="border border-dark rounded-2 pe-2 mt-3"
        >
          <h1 className="text-center">Done Task</h1>
          <hr style={{ padding: "5px", backgroundColor: "orange" }} />
          <ul>
            {doneTask.map((element, i) => {
              return (
                <>
                  <div className="d-flex justify-content-between ">
                    <li key={i}>
                      {i + 1}. {element}
                    </li>

                    <div className="d-flex gap-2">
                      <CheckCircleFill
                        role="button"
                        color="red"
                        onClick={() => panddingTask(i)}
                      />

                      <Trash3
                        color="red"
                        role="button"
                        onClick={() => deleteHandler(i)}
                      />

                      <Input type="checkbox" />
                    </div>
                  </div>
                  <hr />
                </>
              );
            })}
          </ul>
          <Button
            className="w-100"
            color="danger"
            //  onClick={(i)=>allDoneHandler(i)}
          >
            DONE
          </Button>
        </div>
      </div>
      ;
    </>
  );
}
