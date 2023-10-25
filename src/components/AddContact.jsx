import Button from "react-bootstrap/Button";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function AddContact(props) {
  const { addContact, newContact } = props;
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleCreate = (e) => {
    e.preventDefault();
    if (
      !firstname.trim() ||
      !lastname.trim() ||
      !email.trim() ||
      !phone.trim()
    ) {
      alert("Заполните все поля!");
      return;
    }

    const newContact = {
      firstname,
      lastname,
      email,
      phone,
    };

    addContact(newContact);
    navigate("/table");
  };

  return (
    <Form className="w-50 m-auto" onSubmit={handleCreate}>
      <Form.Group className="mb-3">
        <Form.Label>Firstname</Form.Label>
        <Form.Control
          onChange={(e) => setFirstname(e.target.value)}
          type="text"
          placeholder="Firstname"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Lastname</Form.Label>
        <Form.Control
          onChange={(e) => setLastname(e.target.value)}
          type="text"
          placeholder="Lastname"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>E-mail</Form.Label>
        <Form.Control
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="E-mail"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          onChange={(e) => setPhone(e.target.value)}
          type="text"
          placeholder="Phone"
        />
      </Form.Group>

      <Button onClick={handleCreate} variant="primary" type="submit">
        Create Product
      </Button>
    </Form>
  );
}

export default AddContact;
