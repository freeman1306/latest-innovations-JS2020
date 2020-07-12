(async () => {
    const module = await import('./module.js')
    console.log(module);

    const Person = module.default

const person = new Person('Max')

})()



