import { useState, useEffect } from "react";
import {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
  getNoteById,
} from "../components/functions/NotesApi";
import { motion } from "framer-motion";
import { Button, Card, Container, Form, Modal } from "react-bootstrap";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    getNotes()
      .then((data) => {
        setNotes(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setNote({});
    setIsEdit(false);
  };

  const handleOpenEditModal = (note) => {
    setShowModal(true);
    getNoteById(note.id).then((data) => {
      setNote(data);
    });
    setIsEdit(true);
  };

  const handleAddNote = (e) => {
    e.preventDefault();
    createNote(note).then((data) => {
      setNotes([...notes, data]);
      handleCloseModal();
    });
  };

  const handleUpdateNote = (e) => {
    e.preventDefault();
    updateNote(note.id, note).then((data) => {
      setNotes(notes.map((n) => (n.id === data.id ? data : n)));
      handleCloseModal();
    });
  };

  const handleDeleteNote = () => {
    deleteNote(note.id).then((data) => {
      setNotes(notes.filter((n) => n.id !== data.note.id));
      setNote({});
      setIsEdit(false);
      handleCloseModal();
    });
  };

  console.log(notes);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
    >
      <Container className="my-5">
        <h1>Notes</h1>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <div className="d-flex flex-wrap gap-3">
            {notes.map((note) => (
              <Card
                key={note.id}
                onClick={() => handleOpenEditModal(note)}
                className="cursor-pointer"
              >
                <Card.Header>
                  <Card.Title className="text-truncate">
                    {note.title}
                  </Card.Title>
                </Card.Header>
                <Card.Body>
                  <p>{note.content}</p>
                </Card.Body>
              </Card>
            ))}
            <Button
              variant="transparent"
              className="add-note-btn"
              onClick={handleOpenModal}
            >
              <i className="fa-solid fa-plus"></i>
            </Button>
          </div>
        )}
      </Container>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Form onSubmit={isEdit ? handleUpdateNote : handleAddNote}>
          <Modal.Header>
            <Modal.Title>{isEdit ? "Edit Note" : "Add Note"}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="title" className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                value={note.title}
                onChange={(e) => setNote({ ...note, title: e.target.value })}
                required
                autoFocus
              />
            </Form.Group>
            <Form.Group controlId="content">
              <Form.Label>Content</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter content"
                value={note.content}
                onChange={(e) => setNote({ ...note, content: e.target.value })}
                required
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            {isEdit && (
              <Button
                variant="danger"
                className="delete-note-btn"
                style={{ marginRight: "auto" }}
                onClick={handleDeleteNote}
              >
                <i className="fa-solid fa-trash"></i>
              </Button>
            )}
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            <Button
              variant="primary"
              style={{ marginLeft: "0" }}
              type="submit"
            >
              {isEdit ? "Update Note" : "Add Note"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </motion.div>
  );
}

export default Notes;
