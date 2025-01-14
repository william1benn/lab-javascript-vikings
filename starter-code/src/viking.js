// Soldier
class Soldier {
    constructor(health, strength) {

        this.health = health;
        this.strength = strength;

    }
    attack(){

        return this.strength;

    }

    receiveDamage(theDamage){

        this.health =  this.health - theDamage;

       
    }
}

// Viking
class Viking extends Soldier{
    constructor(name,health,strength){
        super(health,strength);
        this.name = name;  
    }
receiveDamage(theDamage){
    super.receiveDamage(theDamage)
        if (this.health > 0){
            return `${this.name} has received ${theDamage} points of damage`;
            } else {
                return `${this.name} has died in act of combat`;
            }
        }
    
    battleCry(){
        return "Odin Owns You All!"
    }
}



// Saxon
class Saxon extends Soldier {

    constructor(health,strength){
    super(health,strength);

    }
    receiveDamage(theDamage){
        super.receiveDamage(theDamage)
            if (this.health > 0){
                return `A Saxon has received ${theDamage} points of damage`;
                } else {
                    return `A Saxon has died in combat`;
                }
            }
}

// War
class War  {

      saxonArmy =[];
      vikingArmy=[];

    constructor() {
        this.saxonArmy;
        this.vikingArmy;
    }

       
     addViking(Viking){
       
      this.vikingArmy.push(Viking);

    }
     addSaxon(Saxon){
    
      this.saxonArmy.push(Saxon);
        
    }

    vikingAttack(){
      //super.receiveDamage();

    let saxonWar = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
    let vikingGuy =  this.vikingArmy[Math.floor(Math.random()*this.saxonArmy.length)];

     let thehealth = saxonWar.receiveDamage(vikingGuy.strength);
   // let theHealth = saxonWar.health - vikingGuy.strength;
    if (thehealth === "A Saxon has died in combat") {   
        this.saxonArmy.splice([Math.floor(Math.random()*this.vikingArmy.length)], 1);
    }
   return thehealth;



  
        
    }

    saxonAttack(){
  
    let vikingWarrior = this.vikingArmy[Math.floor(Math.random()*this.saxonArmy.length)];
    let saxonWarrior =  this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];

    

let thehealth = vikingWarrior.receiveDamage(saxonWarrior.strength);
   // let theHealth = saxonWar.health - vikingGuy.strength;
    if (thehealth.match(/died/i)) {   
        this.vikingArmy.splice([Math.floor(Math.random()*this.saxonArmy.length)], 1);
    }
   return thehealth;

    }


 
    showStatus(){
   
         if(this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!";
        }
         if(this.vikingArmy.length === 0 ){
            return "Saxons have fought for their lives and survive another day...";
        }
        if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0){
       
            return "Vikings and Saxons are still in the thick of battle.";
      
              }
    }


    
}// end of the class
