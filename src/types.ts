//Type alias str or num
type Id = string | number;

// Type Declaration of schema
type Person = {
  id: Id;
  firstName: string;
  lastName: string;
  age: number;
  address?: string;
};

// Type alias of Person or null
type NullablePerson = Person | null;

// Type alias of constant values
type Status = "200: ok" | "404: not found";

//Type declaration of nested typings
type PersonResponse = {
    status: Status,
    data: NullablePerson
}

const person: Person = {
  id: "1",
  firstName: "Jonatan",
  lastName: "Vahlberg",
  age: 27,
};

const persons: Person[] = [person, {
    id: 2,
    firstName: "Jane",
    lastName: "Doe",
    age: 24,
    address: "123 Street st"
}];

function getPerson(id: Id): Status {
  const person: NullablePerson =
    persons.find((person) => person.id == id) || null;

  if (!person) {
    return "404: not found";
  }
  return "200: ok";
}
console.log(getPerson(1), getPerson("1"), getPerson("3"));

function getPersonResponse(id: Id): PersonResponse {
    const person: NullablePerson =
      persons.find((person) => person.id == id) || null;
    
      return {
        status: !person ? "404: not found" : "200: ok",
        data: person
      }
}

  const _response: PersonResponse = getPersonResponse(1)
  const _response2: PersonResponse = getPersonResponse(2)

  if(_response.data && _response.status === "200: ok"){
    console.log("Data Get: for id", 1, _response.data)
  }

  console.log(_response, _response2)

  function getAddressFromPerson(person: Person): string | null {
    return person.address || null
  }



  //TODO Skriv en bok typ som ska ha titel, description, rating, Author: nested, ISBN optional. Author ska ha firstName, lastName och yearOfBirth

  //TODO Create a list of books

  //TODO Create a function "search" search takes a string and will search the list of books for "title", author.firstName, author.lastName and show the books that match the search,

  //TODO Create a seperate function that takes a ISBN: string and searches the books that have a ISBN to begin with that is to say first filter then find the one whoose ISBN matches if any and if none match return null.