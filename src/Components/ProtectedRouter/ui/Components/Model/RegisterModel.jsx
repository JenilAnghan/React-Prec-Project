import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
  FormText,
  Form,
} from "reactstrap";
import Select from "react-select";
const userTypeOptions = [
  { value: "user", label: "User" },
  { value: "admin", label: "Admin" },
  { value: "employee", label: "Employee" },
];
export default function RegisterModel({ modal, toggle }) {
  let [user, setUser] = useState({
    email: "",
    password: "",
    gender: "",
    hobbes: [],
    userType: "",
  });

  const checkBoxXHandler = (item) => {
    const matchItem = check?.includes(item);
    if (matchItem) {
      let filter = check?.filter((e) => e !== item);
      setCheck(filter);
    } else {
      setCheck([...check, item]);
    }
  };
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="Email">Email</Label>
              <Input
                id="Email"
                name="email"
                onChange={(e) => setUser({ ...user, email: e?.target?.value })}
                placeholder="Enter Your Email"
                type="email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="Password">Password</Label>
              <Input
                id="Password"
                name="password"
                onChange={(e) =>
                  setUser({ ...user, password: e?.target?.value })
                }
                placeholder="Enter Your Password"
                type="password"
              />
            </FormGroup>
            <Label>Gender</Label>
            <FormGroup tag="fieldset" className="d-flex gap-3">
              <FormGroup check>
                <Input
                  checked={user?.gender === "male"}
                  onChange={() => setUser({ ...user, gender: "male" })}
                  name="radio1"
                  type="radio"
                />
                <Label check>Male </Label>
              </FormGroup>
              <FormGroup check>
                <Input
                  checked={user?.gender === "female"}
                  onChange={() => setUser({ ...user, gender: "female" })}
                  name="radio1"
                  type="radio"
                />
                <Label check>Female</Label>
              </FormGroup>
              <FormGroup check disabled>
                <Input
                  checked={user?.gender === "kids"}
                  onChange={() => setUser({ ...user, gender: "kids" })}
                  name="radio1"
                  type="radio"
                />
                <Label check>Kids</Label>
              </FormGroup>
            </FormGroup>
            <div>
              <Label>Hobbes</Label>
            </div>
            <FormGroup check inline>
              <Input
                checked={user?.hobbes?.includes("reading")}
                t
                type="checkbox"
              />
              <Label check>Reading</Label>
            </FormGroup>
            <FormGroup check inline>
              <Input
                checked={user?.hobbes?.includes("traveling")}
                t
                type="checkbox"
              />
              <Label check>Traveling</Label>
            </FormGroup>
            <FormGroup check inline>
              <Input
                checked={user?.hobbes?.includes("singing")}
                t
                type="checkbox"
              />
              <Label check>singing</Label>
            </FormGroup>
            <FormGroup check inline>
              <Input
                checked={user?.hobbes?.includes("sports")}
                type="checkbox"
              />
              <Label check>Sports</Label>
            </FormGroup>
            <Select
              onChange={(e) => setUser({ ...user, userType: e?.value })}
              options={userTypeOptions}
            />

            <Button color="danger" className="w-100 mt-3">
              Submit
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}
