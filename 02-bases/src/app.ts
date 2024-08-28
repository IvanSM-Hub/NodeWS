import { buildLogger } from "./plugins/logger.plugin";
// const { getUUID, getAge } = require('./plugins/index.plugin');

// const { emailTemplate } = require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');
// const { getUserById } = require('./js-foundation/03-callbacks');
// const { getUserById } = require('./js-foundation/04-arrow');
// const { buildMakePerson } = require('./js-foundation/05-factory');
// const getPokemonById = require('./js-foundation/06-promises');
// const {buildLogger} = require('./plugins/index.plugin');

const logger = buildLogger('app.js');

logger.log('Hola mundo');
logger.error('Esto es algo malo');


/* getPokemonById( 4 )
    .then( pokemon => console.log({ pokemon }) )
    .catch( err => console.error( err ) )
    .finally( () => console.log('Finalmente') ); */

// Token de acceso
// Autorizaciones públicas

//! Referencia a la función factory
// const makePerson = buildMakePerson({ getUUID, getAge });

// const obj = { name:'john', birthday: '1995-12-20'};

// const john = makePerson(obj);

// console.log({john});


