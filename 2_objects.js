const person = {
    name: 'Max',
    age: 30
}

Object.getOwnPropertyDescriptor(person, 'age')  // { value: 30, writable: true, enumerable: true, configurable: true }

Object.getOwnPropertyDescriptors(person)                //  {  name: {
                                                        //     value: 'Max',
                                                        //     writable: true,
                                                        //     enumerable: true,
                                                        //     configurable: true
                                                        //            },
                                                        //     age: { value: 30, writable: true, enumerable: true, configurable: true }
                                                        //              }


Object.entries(person)   // [ [ 'name', 'Max' ], [ 'age', 30 ] ]

Object.fromEntries([['name', 'Max'], ['age', 30]])   // { name: 'Max', age: 30 }

for (const [key, value] of Object.entries(person)) {
    console.log(`${JSON.stringify(key)}: ${JSON.stringify(value)}`);
    
}
