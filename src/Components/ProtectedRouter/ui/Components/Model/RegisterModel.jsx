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
export default function RegisterModel({ modal, toggle }) {
  return (
    <>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
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

            <Label>Gender</Label>
            <FormGroup tag="fieldset" className="d-flex gap-3">
              <FormGroup check>
                <Input name="radio1" type="radio" />
                <Label check>Male </Label>
              </FormGroup>
              <FormGroup check>
                <Input name="radio1" type="radio" />
                <Label check>Female</Label>
              </FormGroup>
              <FormGroup check disabled>
                <Input name="radio1" type="radio" />
                <Label check>Kids</Label>
              </FormGroup>
            </FormGroup>

            <div>
              <Label>Hobbes</Label>
            </div>

            <FormGroup check inline>
              <Input type="checkbox" />
              <Label check>Reading</Label>
            </FormGroup>
            <FormGroup check inline>
              <Input type="checkbox" />
              <Label check>Traveling</Label>
            </FormGroup>

            <FormGroup check inline>
              <Input type="checkbox" />
              <Label check>singing</Label>
            </FormGroup>
            <FormGroup check inline>
              <Input type="checkbox" />
              <Label check>Sports</Label>
            </FormGroup>

            <Select />

            <Button color="danger" className="w-100 mt-3">
              Submit
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
}
