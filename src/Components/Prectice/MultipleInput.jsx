import React, { useState } from "react";
import { toast } from "react-toastify";
import { Form, Button, FormGroup, Input, Label, Table } from "reactstrap";

export default function MultipleInput() {
  let [setUser, setAllUser] = useState({
    email: "",
    password: "",
  });
  let [user, allUser] = useState([]);

  const addData = (e) => {
    if (setUser?.email?.length > 0 && setUser?.password?.length > 0) {
      e.preventDefault();
      allUser([...user, setUser]);
      setAllUser({
        email: "",
        password: "",
      });
      //   setAllUser("");
      toast.success("Verify");
    } else {
      toast.error("Place Enter Details");
    }
  };
  return (
    <>
      <Form className="border-dark ms-5 me-5 p-2">
        <FormGroup>
          <Label>Email</Label>
          <Input
            value={setUser?.email}
            placeholder="with a placeholder"
            type="email"
            onChange={(e) => setAllUser({ ...setUser, email: e?.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            value={setUser?.password}
            placeholder="password placeholder"
            type="password"
            onChange={(e) =>
              setAllUser({ ...setUser, password: e?.target.value })
            }
          />
        </FormGroup>

        <Button onClick={(e) => addData(e)}>Submit</Button>
      </Form>
      <Table dark>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {user.map((e, i) => {
            return (
              <tr>
                <th scope="row">{i + 1}</th>
                <td>{e.email}</td>
                <td>{e.password}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
