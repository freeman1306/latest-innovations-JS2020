class Person {
    name = 'unknpwn name'
    #year = 1993
    
    get age() {
        return new Date().getFullYear() - this.#year
    }
}
const person = new Person()

console.log(person.age);
