import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

// const navigate = useNavigate()
// const [modal, setModal] = Usestate(false);

// const toggle = () => setModal(!modal);
export default function Profile(modal, toggle) {
  const [paramsData] = useSearchParams();
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

            <FormGroup>
              <Label for="exampleText">Text Area</Label>
              <Input id="exampleText" name="text" type="textarea" />
            </FormGroup>

            <Button>Submit</Button>
          </Form>
        </ModalBody>
        <ModalFooter>
          {/* <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button> */}
        </ModalFooter>
      </Modal>
    </div>
  );
}

// import React from "react";
// import { useSearchParams } from "react-router-dom";
// import {
//   Button,
//   Card,
//   CardBody,
//   CardText,
//   CardTitle,
//   ListGroup,
//   ListGroupItem,
// } from "reactstrap";

// export default function Profilepage() {
//   const [searchParames, setSearchParames] = useSearchParams();

//   const name = searchParames.get("name");
//   const age = searchParames.get("age");
//   const city = searchParames.get("city");

//   return (
//     <>
//       <div>
//         <Card
//           style={{
//             width: "18rem",
//           }}
//         >
//           <img alt="Card" src="https://picsum.photos/300/200" />
//           <CardBody>
//             <CardTitle tag="h5">Name</CardTitle>
//             <CardText></CardText>
//           </CardBody>
//           <ListGroup flush>
//             <ListGroupItem>Name:{name}</ListGroupItem>
//             <ListGroupItem>Age:{age}</ListGroupItem>
//             <ListGroupItem>City:{city}</ListGroupItem>
//           </ListGroup>
//           <Button className="btn btn-danger">Button</Button>
//         </Card>
//       </div>
//     </>
//   );
// }
