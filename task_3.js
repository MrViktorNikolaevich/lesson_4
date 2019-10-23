const year = new Date().getFullYear();

user = {firstName: String, lastName: String, birthYear: Number}

const age = (...user) => {
    let u = Object.values(user[0]);
    u.splice(2,1)
    user[0].fullName = u.join(' ');
    user[0].age = year - user[0].birthYear;
    return user[0];

};
console.log(age({firstName: 'Ivan', lastName: 'Ivanov', birthYear: 2000}));