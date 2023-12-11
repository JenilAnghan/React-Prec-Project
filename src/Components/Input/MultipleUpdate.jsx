import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  Button,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Table,
} from "reactstrap";

export default function Multipleupdate() {
  let [user, setuser] = useState({
    email: "",
    password: "",
  });
  let [index, setIndex] = useState(null);
  let [alluser, setalluser] = useState([]);

  const adddata = (e) => {
    if (user?.email?.length > 0 && user?.password?.length > 0) {
      e.preventDefault();
      setalluser([...alluser, user]);
      setuser({
        email: "",
        password: "",
      });
      toast.success("User Added Successfully");
    } else {
      toast.error("Please Fill Data");
    }
  };

  const deleteHandler = (index) => {
    // console.log("-----");
    // alluser.splice(index, 1);
    // setuser([...alluser])

    let filterdata = alluser.filter((e, i) => i !== index);
    setalluser([...filterdata]);
  };

  const updateDate = () => {
    if (index || index === 0) {
      alluser.splice(index, 1, user);
      setuser([...alluser]);
      setuser({
        email: "",
        password: "",
      });
      setIndex(null);
    } else {
      toast("Please Select Data");
    }
  };
  const updateHandler = (data, index) => {
    setuser(data);
    setIndex(index);
  };
  return (
    <>
      <div>
        <Form className="border border-dark p-3 rounded-3">
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              value={user?.email}
              id="exampleEmail"
              name="email"
              placeholder="Enter Your Email"
              type="email"
              onChange={(e) => setuser({ ...user, email: e?.target?.value })}
            />
          </FormGroup>

          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              value={user?.password}
              id="examplePassword"
              name="password"
              placeholder="Enter Your Password"
              type="password"
              onChange={(e) => setuser({ ...user, password: e?.target?.value })}
            />
          </FormGroup>

          {index || index === 0 ? (
            <Button className="w-100 mt-3" color="danger" onClick={updateDate}>
              Update
            </Button>
          ) : (
            <Button
              className="w-100"
              color="danger"
              onClick={(e) => adddata(e)}
            >
              Submit
            </Button>
          )}
        </Form>

        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>email</th>
              <th>password</th>
              <th>edit</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {alluser.map((e, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{e.email}</td>
                  <td>{e.password}</td>
                  <td>
                    <Button
                      className="w-100"
                      color="danger"
                      onClick={() => updateHandler(e, i)}
                    >
                      edit
                    </Button>
                  </td>

                  <td>
                    <Button
                      onClick={() => deleteHandler(i)}
                      className="w-100"
                      color="danger"
                    >
                      delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}
