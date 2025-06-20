import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { Notyf } from "notyf";
import axios from "axios";

export default function AddWorkout({ onAdd }) {
  const notyf = new Notyf();

  const [showAdd, setShowAdd] = useState(false);
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");

  const clearFields = () => {
    setName("");
    setDuration("");
  }

  const openAdd = () => {
    clearFields();
    setShowAdd(true);
  };

  const closeAdd = () => {
    setShowAdd(false);
    clearFields();
  };

  const createWorkout = (e) => {
    e.preventDefault();

    axios.post(
      `${process.env.REACT_APP_API_URL}/workouts/addWorkout`,
      {
        name: name,
        duration: duration
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json"
        }
      }
    )
    .then(res => {
      notyf.success("Workout added successfully!");
      closeAdd();
      if (onAdd) onAdd();
    })
    .catch(err => {
      console.error(err);
      const errorMsg =
        err.response?.data?.message || "Failed to add workout. Please try again.";
      notyf.error(errorMsg);
    });
  };

  return (
    <>
      <Button variant="primary" className="mx-2" onClick={openAdd}>Add Workout</Button>

      <Modal show={showAdd} onHide={closeAdd}>
        <Form onSubmit={e => createWorkout(e)}>
          <Modal.Header closeButton>
            <Modal.Title>Add Workout</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Duration"
                value={duration}
                onChange={e => setDuration(e.target.value)}
                required
              />
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={closeAdd}>Close</Button>
            <Button variant="primary" type="submit">Submit</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
