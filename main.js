function Character (name, type, attack, defense) {
    this.name = name;
    this.type = type;

    let _attack = attack;
    let _defense = defense;

    this.getAttack = function(){
        return _attack;
    };
    this.setAttack = function (newAttack){
        _attack = newAttack;
        console.log(_attack);
    };

    this.getDefense = function(){
        return _defense;
    };
    this.setDefense = function(newDefense){
        _defense = newDefense;
        console.log(_defense);
    };
};


function Creeper (name){
    Character.call(this, name, 'Creeper', 100, 180);

    this.updateAttack = function(){
        const newAttack = this.getAttack() + 60;

        this.setAttack(newAttack);
    };

    this.updateDefense = function(){
        const newDefense = this.getDefense() + 60;

        this.setDefense(newDefense);
    };
};

function Paladin (name){
    Character.call(this, name, 'Paladin', 200, 200);

    this.updateAttack = function(){
        const newAttack = this.getAttack() + 100;

        this.setAttack(newAttack);
    };

    this.updateDefense = function(){
        const newDefense = this.getDefense() + 100;

        this.setDefense(newDefense);
    };
};

function Reckon (name){
    Character.call(this, name, 'Reckon', 60, 20);

    this.updateAttack = function (){
        const newAttack = this.getAttack() + 5;

        this.setAttack(newAttack);
    };

    this.updateDefense = function(){
        const newDefense = this.getDefense() + 5;

        this.setDefense(newDefense);
    };
};

const char = new Creeper('Ell');
const char1 = new Paladin('Jay');
const char2 = new Reckon('Samh');

console.log({char});
console.log({char1});
console.log({char2});

console.log({char2});
char2.updateAttack();

console.log({char1});
console.log(char1.getDefense());
char1.updateDefense();




