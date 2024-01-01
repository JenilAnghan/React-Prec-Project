import { Eye } from "lucide-react";
import React, { useState } from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { Table } from "reactstrap";
import Profile from "./Profilepage";

const users = [
  { name: "jenil", age: 21, city: "surat" },
  { name: "nikunj", age: 21, city: "surat" },
  { name: "shivam", age: 21, city: "surat" },
];

export default function Contact() {
  // const [searchParames, setSearchParames] = useSearchParams()
  const navigate = useNavigate();

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const setData = () => {
    // setSearchParames({name:"jenil", city :"surat"})
    navigate("/profilepage?name=jenil&age=21&city=surat");
  };

  return (
    <>
      <Profile toggle={toggle} modal={modal} />
      <Table className="me-5 ms-5" striped>
        <thead>
          <tr>
            <th>#</th>
            <th> Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.map?.((e, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{e?.name}</td>
                <td>{e?.age}</td>
                <td>{e?.city}</td>

                <td>
                  <Eye role="button" color="#9ba0a8" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
