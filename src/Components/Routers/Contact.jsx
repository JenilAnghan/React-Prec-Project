import { Eye } from "lucide-react";
import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Table } from "reactstrap";
import Profile from "./Profilepage";

const users = [
  { name: "jenil", age: 21, city: "surat" },
  { name: "nikunj", age: 21, city: "surat" },
  { name: "shivam", age: 21, city: "surat" },
];

export default function Contact() {
  const navigate = useNavigate();

  const [modal, setModal] = useState(false);

  const [searchParames, setSearchParames] = useSearchParams();
  const toggle = () => setModal(!modal);

  const showData = (e) => {
    // setSearchParames({name:"jenil", city :"surat"})
    // navigate("/profilepage?name=jenil&age=21&city=surat");
    toggle();
    setSearchParames(e);
  };

  return (
    <>
      <Profile toggle={toggle} modal={modal} />
      <Table className="me-5 ms-5" striped>
        <thead>
          <tr>
            <th>Sr.</th>
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
                  <Eye
                    onClick={() => showData(e)}
                    role="button"
                    color="#9ba0a8"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
