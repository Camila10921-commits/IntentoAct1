document.getElementById('noteForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtén los valores de los campos
    const title = document.getElementById('noteTitle').value;
    const content = document.getElementById('noteContent').value;

    // Crea un contenedor para la nueva nota
    const note = document.createElement('div');
    note.className = 'note';

    // Crea el título de la nota
    const noteTitle = document.createElement('h2');
    noteTitle.textContent = title;
    note.appendChild(noteTitle);

    // Crea el contenido de la nota
    const noteContent = document.createElement('p');
    noteContent.textContent = content;
    note.appendChild(noteContent);

    // Agrega la nueva nota a la lista de notas
    document.getElementById('notesList').appendChild(note);

    // Limpia el formulario
    document.getElementById('noteForm').reset();
});
