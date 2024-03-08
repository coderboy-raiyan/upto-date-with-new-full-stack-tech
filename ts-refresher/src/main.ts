type Options = {
  debug?: boolean;
};

function printPerson(person: { name: string }, obj: Options = {}) {
  console.log(obj.debug);
}

const person = { name: "kyle", age: 23 };

printPerson(person);
