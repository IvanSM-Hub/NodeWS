
// const { getUUID, getAge } = require('../plugins/index.plugin');

interface BuildMakerPersonOptions {
    getUUID: () => string;
    getAge: (birthdate: string) => number;
  }
  
  interface PersonOptions {
    name: string;
    birthdate: string;
  }
  
  
export const buildMakePerson = ({ getAge, getUUID }: BuildMakerPersonOptions) => {
  
    return ({ name, birthdate }: PersonOptions) => {
  
      return {
        id: getUUID(),
        name: name,
        birthdate: birthdate,
        age: getAge(birthdate),
      }
    }
}  

// const john = buildPerson( obj );

// console.log(john);

// function calculateAge( birthday ) {
    
//     const currentDate = new Date();
//     const factoryBirthDay = new Date(birthday);
    
//     const age = currentDate.getFullYear() - factoryBirthDay.getFullYear();
    
//     if( currentDate.getMonth() < factoryBirthDay.getMonth() ) return age - 1 ;

//     return age;

// }

