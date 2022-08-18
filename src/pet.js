const MAXIMUM_FITNESS = 10;
const pet = new Pet();
function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
    this.growUp = function() {
        this.age += 1;
        this.hunger += 5;
        this.fitness -= 3;
    };
    Pet.prototype.walk = function() {
     if((this.fitness +4) <= 10) {
        this.fitness +=4;
    } else {
        this.fitness= 10;
    }
    }
    Pet.prototype.hungerLevel = function() {
        if ((this.hunger -= 3) <= 0 ) {
            this.hunger -3;
        } else {
            this.hunger= 0;
        }
    }
    Pet.prototype.checkUp = function() {
        if (this.fitness <= 3) {
            this.fitness = 3;
            return 'i need a walk';
        }
    }
}
module.exports = Pet;