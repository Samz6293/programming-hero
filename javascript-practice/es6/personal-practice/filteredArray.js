// Given an array of raw API user objects, write an ES6 expression or function logic to 
// return an array of strings in the format "Name (Role)"
// but only for active users.

// Requirements:
// Filter out inactive users.
// Extract name and role using destructuring (default role to "guest" if missing).
// Return the array of formatted strings.
// Expected Output:
// ["Rafi (admin)", "Nishat (guest)"]

function filterUsers(users) {

    let acitveUsers = users.filter(users => users.isActive);
    let filteredUsers = []

    for (user of acitveUsers) {

        // extracting name and role
        let {profile: {name, role="guest"}} = user;
        filteredUsers.push(`${name} (${role})`);

    }

    return filteredUsers;
}

const apiUsers = [
  { id: 101, profile: { name: "Rafi", role: "admin" }, isActive: true },
  { id: 102, profile: { name: "Karim", role: "editor" }, isActive: false },
  { id: 103, profile: { name: "Nishat" }, isActive: true } // Note: role is missing!
];

console.log(filterUsers(apiUsers));