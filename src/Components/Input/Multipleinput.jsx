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

export default function Multipleinput() {
  let [user, setuser] = useState({
    email: "",
    password: "",
  });

  let [alluser, setalluser] = useState([]);
  // {
  //   email:"test@gmail.com"
  //   password:"123456789"
  // }

  const adddata = (e) => {
    if (user.email.length > 0 && user.password.length > 0) {
      e.preventDefault();
      setalluser([...alluser, user]);
      toast.success("User Added Successfully");
    } else {
      toast.error("Please Fill Data");
    }
  };
  return (
    <>
      <div>
        {/* <h1>{user.email}</h1> */}
        {/* <h1>{user.password}</h1>   */}
        <Form className="border border-dark p-3 rounded-3">
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
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
              id="examplePassword"
              name="password"
              placeholder="Enter Your Password"
              type="password"
              onChange={(e) => setuser({ ...user, password: e?.target?.value })}
            />
          </FormGroup>

          <Button className="w-100" color="danger" onClick={(e) => adddata(e)}>
            Submit
          </Button>
        </Form>

        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>email</th>
              <th>passwpred</th>
            </tr>
          </thead>
          <tbody>
            {alluser.map((e, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{e.email}</td>
                  <td>{e.password}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}
