const Person = require('./person');

const person1 =  new Person('Alex Soto', 30);

const Logger =  require('./logger');

const logger =  new Logger();

logger.on('message', data => console.log('Called Listener', data));
logger.log('Hola perros');


person1.greeting();