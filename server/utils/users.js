// class Person {
//   constructor (name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   getUserDescription () {
//     var yearWord = this.age === 1 ? 'year' : 'years'
//     return `${this.name} is ${this.age} ${yearWord} old.`
//   }
// }
//
// var me = new Person('Paul', 1);
// var description = me.getUserDescription();
// console.log(description);

class Users {
  constructor () {
    this.users = [];
  }
  addUser (id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }
  removeUser (id) {
    var user = this.getUser(id);

    if (user) {
      this.users = this.users.filter((user) => user.id !== id);
    }

    return user;
  }
  getUser (id) {
    return this.users.filter((user) => user.id === id)[0];
  }
  getUserList (room) {
    var users = this.users.filter((user) => user.room === room);
    var namesArray = users.map((user) => user.name);

    return namesArray;
  }
}

module.exports = {Users};
