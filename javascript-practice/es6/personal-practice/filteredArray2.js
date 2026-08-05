function filterUsers(users) {

    return acitveUsers = users.filter(users => users.isActive)
    .map(({profile: {name, role="guest"}}) => 
        `${name} (${role})`);
}

const apiUsers = [
  { id: 101, profile: { name: "Rafi", role: "admin" }, isActive: true },
  { id: 102, profile: { name: "Karim", role: "editor" }, isActive: false },
  { id: 103, profile: { name: "Nishat" }, isActive: true } // Note: role is missing!
];

console.log(filterUsers(apiUsers));