const baseUrl = process.env.API_URL || 'http://localhost:4000/api/v1';

export const getNotes = async () => {
    const response = await fetch(`${baseUrl}/notes`);
    const data = await response.json();
    return data;
}

export const createNote = async (note) => {
    const response = await fetch(`${baseUrl}/notes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
    });
    const data = await response.json();
    return data;
}

export const updateNote = async (id, note) => {
    const response = await fetch(`${baseUrl}/notes/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
    });
    const data = await response.json();
    return data;
}

export const deleteNote = async (id) => {
    const response = await fetch(`${baseUrl}/notes/${id}`, {
        method: 'DELETE',
    });
    const data = await response.json();
    return data;
}

export const getNoteById = async (id) => {
    const response = await fetch(`${baseUrl}/notes/${id}`);
    const data = await response.json();
    return data;
}