import React from "react";
import { useSearchParams } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

export default function Profilepage() {
  const [searchParames, setSearchParames] = useSearchParams();

  const name = searchParames.get("name");
  const age = searchParames.get("age");
  const city = searchParames.get("city");


  return (
    <>
      <div>
        <Card
          style={{
            width: "18rem",
          }}
        >
          <img alt="Card" src="https://picsum.photos/300/200" />
          <CardBody>
            <CardTitle tag="h5">Name</CardTitle>
            <CardText></CardText>
          </CardBody>
          <ListGroup flush>
            <ListGroupItem>Name:{name}</ListGroupItem>
            <ListGroupItem>Age:{age}</ListGroupItem>
            <ListGroupItem>City:{city}</ListGroupItem>
          </ListGroup>
          <Button className="btn btn-danger">Button</Button>
        </Card>
      </div>
    </>
  );
}
