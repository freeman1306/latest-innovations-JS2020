const start = ' Hello Youtube '
const end = 'this is new      '

console.log(start.trimStart() + end.trimEnd());
console.log((start + end).trim());
console.log('vk'.padStart(16, 'www.'));


//===========

function tag(string, name, age) {
    const [s1, s2, s3] = string
    const ageStr = age > 42 ? 'elder' : 'younger'
    return `${s1}${name}${s2}${ageStr}${s3}`
}


const person = {
    name: 'Максим', 
    age: 30
}


const output = tag`man name ${person.name} is ${person.age}`