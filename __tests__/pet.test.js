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
describe('growUp', () => {
  it('increments the age by 1', () => {
    const pet = new Pet('Fido');

    pet.growUp();

    expect(pet.age).toEqual(1);
  });
  it('has a initial hunger of 0', () => {
    const pet = new Pet('Fido');
  
    expect(pet.hunger).toEqual(0);
  });
  });
  describe('growUp', () => {
    it('increments hunger by 5', () => {
      const pet = new Pet('Fido');
  
      pet.growUp();
  
      expect(pet.hunger).toEqual(5);
  });
  it('has a initial fitness of 10', () => {
    const pet = new Pet('Fido');
  
    expect(pet.fitness).toEqual(10);
  });
  });
  describe('growUp', () => {
    it('decreases fitness by 3', () => {
      const pet = new Pet('Fido');
  
      pet.growUp();
  
      expect(pet.fitness).toEqual(7);
  });
  describe('walk', () => {
    it('increases fitness by 4', () => {
      const pet = new Pet('fido');
  
      pet.fitness = 4;
      pet.walk();
  
      expect(pet.fitness).toEqual(8);
    });
  
  it('increases fitness by to a maximum of 10', () => {
    const pet = new Pet('fido');

    pet.fitness = 8;
    pet.walk();

    expect(pet.fitness).toEqual(10);
  });
});
describe('hungerLevel', () => {
  it('decreases hunger level by 3', () => {
    const pet = new Pet('fido');

    pet.hunger = 10;
    pet.hungerLevel();

    expect(pet.fitness).toEqual(10);
  });
  it('decreases fitness by to a minimum of 0', () => {
    const pet = new Pet('fido');

    pet.hunger = 10;
    pet.hungerLevel();

    expect(pet.fitness).toEqual(10);
  });
});
describe('checkUp', () => {
  it('returns a string that lets you know how the pet is feeling', () => {
    const pet = new Pet('fido');

    pet.fitness = 3;
    pet.checkUp();
   

    expect(pet.fitness).toEqual('i need a walk');
  });
});
});