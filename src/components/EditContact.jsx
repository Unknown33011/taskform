import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";

function EditContact(props) {
  const { getOneContact, oneContact, saveContact } = props;
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const params = useParams();

  useEffect(() => {
    getOneContact(params.id);
  }, []);

  useEffect(() => {
    if (oneContact) {
      setFirstname(oneContact.firstname);
      setLastname(oneContact.lastname);
      setEmail(oneContact.email);
      setPhone(oneContact.phone);
    }
  }, [oneContact]);

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

    saveContact(params.id, newContact);
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
          value={firstname}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Lastname</Form.Label>
        <Form.Control
          onChange={(e) => setLastname(e.target.value)}
          type="text"
          placeholder="Lastname"
          value={lastname}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>E-mail</Form.Label>
        <Form.Control
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="E-mail"
          value={email}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          onChange={(e) => setPhone(e.target.value)}
          type="text"
          placeholder="Phone"
          value={phone}
        />
      </Form.Group>

      <Button onClick={handleCreate} variant="primary" type="submit">
        Save changes
      </Button>
    </Form>
  );
}

export default EditContact;
