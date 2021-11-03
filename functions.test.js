const { expect } = require('@jest/globals');
const functions = require('./functions');

test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2,2)).toBe(4);
});

test('Adds 2 + 2 to NOT eqal 5', () => {
    expect(functions.add(2,2)).not.toBe(5);
});

test('Schould be null', () => {
    expect(functions.isNull()).toBeNull();
});

test('Schould be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
});

test('user should be Artur Booom obj', () => {
    expect(functions.createUser()).toStrictEqual({firstName: 'Artur', lastName: 'Booom'});
});

//less than greater than
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
});

//regex
test('there is no I in team', ()=> {
    expect('team').not.toMatch(/I/);
})

//arrays
test('Admin should me in usernames', ()=> {
    usernames = ['john', 'artur', 'admin'];
    expect(usernames).toContain('admin')
})

//async data

//promise
// test('User fetched name should be Leanne Graham', ()=> {
//     expect.assertions(1);
//     return functions.fetchUser()
//         .then(data => {
//             expect(data.name).toEqual('Leanne Graham1');
//         })
// });

//async await
test('User fetched name should be Leanne Graham', async()=> {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
        
});