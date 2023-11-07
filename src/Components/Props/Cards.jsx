import React from "react";

import {
  Card,
  Button,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

export default function Cards(Props) {
  return (
    <Card
      style={{
        width: "18rem",
      }}
    >
      <img alt="Sample" src="https://picsum.photos/300/200" />
      <CardBody>
        <CardTitle tag="h5">
          {Props?.data?.title ?? "Title Unavaliable"}
        </CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {Props?.data?.price} Rs.
        </CardSubtitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {Props?.data?.price} Rs. After Discount Price
        </CardSubtitle>
        <CardText>{Props?.data?.description}</CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>
  );
}
