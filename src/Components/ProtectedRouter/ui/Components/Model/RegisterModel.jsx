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
export default function RegisterModel({ modal, toggle }) {
  return (
    <div>
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

            <FormGroup tag="fieldset">
              <legend>Radio Buttons</legend>
              <FormGroup check>
                <Input name="radio1" type="radio" />
                <Label check>
                  Option one is this and that—be sure to include why it‘s great
                </Label>
              </FormGroup>
              <FormGroup check>
                <Input name="radio1" type="radio" />
                <Label check>
                  Option two can be something else and selecting it will
                  deselect option one
                </Label>
              </FormGroup>
              <FormGroup check disabled>
                <Input disabled name="radio1" type="radio" />
                <Label check>Option three is disabled</Label>
              </FormGroup>
            </FormGroup>

            <Button>Submit</Button>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
