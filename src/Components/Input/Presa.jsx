import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

export default function Presa() {
  let [add, setAdd] = useState();
  let [alladd, setAlladd] = useState();

  const addData = () => {
    setAlladd([...alladd, add]);
  };
  return (
    <>
      <div className="border m-0 p-5">
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="with a placeholder"
              type="email"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="password placeholder"
              type="password"
            />
          </FormGroup>

          <Button onClick={addData}>Submit</Button>
        </Form>
      </div>

      {alladd.map((e, i) => {
        return (
          <h1 className="border border-dark" key={i}>
            {e}
          </h1>
        );
      })}
    </>
  );
}
