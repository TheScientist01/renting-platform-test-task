const notes=[
    {
        id: 1,
        title: "Note 1",
        content: "This is the first note",
    },
    {
        id: 2,
        title: "Note 2",
        content: "This is the second note",
    },
]

const generateId = () => {
    if (notes.length === 0) {
        return 1;
    }
    const maxId = Math.max(...notes.map(note => note.id));
    return maxId + 1;
}

exports.getAllNotes = async (req, res) => {
    try {
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getNoteById = async (req, res) => {
    try {
        const note = notes.find(note => note.id === parseInt(req.params.id));
        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.createNote = async (req, res) => {
    try {
        if (!req.body.title || !req.body.content) {
            return res.status(400).json({ message: "Title and content are required" });
        }
        const note = {
            id: generateId(),
            title: req.body.title,
            content: req.body.content,
        }
        notes.push(note);
        res.status(201).json(note);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.updateNote = async (req, res) => {
    try {
        const note = notes.find(note => note.id === parseInt(req.params.id));
        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }
        if (!req.body.title || !req.body.content) {
            return res.status(400).json({ message: "Title and content are required" });
        }
        note.title = req.body.title;
        note.content = req.body.content;
        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.deleteNote = async (req, res) => {
    try {
        const note = notes.find(note => note.id === parseInt(req.params.id));
        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }
        const index = notes.indexOf(note);
        notes.splice(index, 1);
        res.status(200).json({ message: "Note deleted successfully", note });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}