class School {
    constructor(name, level, numberOfStudents) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
  
    get name() {
      return this._name;
    }  
  
    get level() {
      return this._level;
    }
  
    get numberOfStudents() {
      return this._numberOfStudents;
    }
  
    quickFacts() {
      console.log(`${this._name} educates ${this._numberOfStudents} at the ${this._level} school level.`);
    }
  
    static pickSubstituteTeacher(substituteTeacher) {
      let subs = Math.floor(Math.random() * substituteTeacher.length);
      return substituteTeacher[subs];
    }
  
    set numberOfStudents(number) {
      if (typeof(number) !== number) {
        return 'Invalid input: numberOfStudents must be set to a Number.';}
        else {
          this._numberOfStudents = number;
        }
    }
  }
  
  
  class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
      super(name, 'primary', numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    }
  
    get pickupPolicy() {
      return this._pickupPolicy;
    }
  }
  
  class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeam) {
      super(name, 'high', numberOfStudents);
      this._sportsTeam = sportsTeam;
    } 
  
    get sportsTeams() {
      return this._sportsTeam;
    }
  }
  
  const lorraineHansbury = new PrimarySchool
  ('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13');
  
  lorraineHansbury.quickFacts();
  console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));
  
  const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
  
  console.log(alSmith.sportsTeams);
  
  