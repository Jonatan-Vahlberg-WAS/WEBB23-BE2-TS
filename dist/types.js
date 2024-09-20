const person = {
    id: "1",
    firstName: "Jonatan",
    lastName: "Vahlberg",
    age: 27,
};
const persons = [
    person,
    {
        id: 2,
        firstName: "Jane",
        lastName: "Doe",
        age: 24,
        address: "123 Street st",
    },
];
function getPerson(id) {
    const person = persons.find((person) => person.id == id) || null;
    if (!person) {
        return "404: not found";
    }
    return "200: ok";
}
console.log(getPerson(1), getPerson("1"), getPerson("3"));
function getPersonResponse(id) {
    const person = persons.find((person) => person.id == id) || null;
    return {
        status: !person ? "404: not found" : "200: ok",
        data: person,
    };
}
const _response = getPersonResponse(1);
const _response2 = getPersonResponse(2);
if (_response.data && _response.status === "200: ok") {
    console.log("Data Get: for id", 1, _response.data);
}
console.log(_response, _response2);
function getAddressFromPerson(person) {
    return person.address || null;
}
//@ts-ignore
import books from "../data/books.js";
//Created seperate types in d.ts file
const importedBooks = [...books];
console.log(importedBooks.map((book) => book.title));
//TODO Create a function "search" search takes a string and will search the list of books for "title", author.firstName, author.lastName and show the books that match the search,
//Tips: konvertera all text till lowercase vid sökning
function searchBooks(query) {
    query = query.toLowerCase();
    const filtredBooks = importedBooks.filter((book) => {
        const authorName = `${book.author.firstName} ${book.author.lastName}`
            .toLowerCase();
        return book.title.toLowerCase().includes(query) || authorName.includes(query);
    });
    return filtredBooks;
}
//TODO Create a seperate function that takes a ISBN: string and searches the books that have a ISBN to begin with that is to say first filter then find the one whoose ISBN matches if any and if none match return null.
function getbookByISBN(ISBN) {
    const book = importedBooks.filter(book => book.ISBN).find(book => book.ISBN === ISBN) || null;
    return book;
}
console.log(searchBooks("catcher"));
console.log(searchBooks("J.R.R"));
console.log(getbookByISBN("978-0-385-50420-7"));
console.log(getbookByISBN("978-0-385-50420-8"));
