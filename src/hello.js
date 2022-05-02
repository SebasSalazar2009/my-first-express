export const hello = (request, response) => {
    response.send('hello. it is me you`re looking for?');
}

export const helloPerson = (request, response) => {
    const { person } = request.params;
    response.send(`Hello, ${person}.`);
}

export const greetNewPerson = (request, response) => {
    const {firstName, lastName } = request.body;
    response.send(`Hello there, ${firstName} ${lastName}`);
}
