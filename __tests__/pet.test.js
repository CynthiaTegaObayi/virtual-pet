const Pet = require('../src/pet')
describe('constructor', () => {
  it('sets the name property', () => {
    const pet = new Pet('Fido');

    expect(pet.name).toEqual('Fido');
  });

   
it('has a initial age of 0', () => {
  const pet = new Pet('Fido');

  expect(pet.age).toEqual(0);
});
});