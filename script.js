const players = ['John', 'Bob', 'Alice', 'Poppy'];

const person = {
  name: 'John Doe',
  age: 80
};

const team = players;
const team1 = [...players];
const cap1 = {...person};

export {players, person, team, team1, cap1};