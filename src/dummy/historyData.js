import faker from 'faker';
import _ from 'lodash';

const Data = _()
  .range(12)
  .map(number => ({
    number: faker.phone.phoneNumber(),
    date: faker.date.recent(),
    credit: faker.commerce.price(100, 1000, 0),
    type: faker.random.arrayElement(['placeBet', 'takeCredit', 'win', 'lose']),
    bet: faker.random.arrayElement([
      'dog',
      'dragon',
      'goat',
      'horse',
      'monkey',
      'ox',
      'pig',
      'rabbit',
      'rat',
      'rooster',
      'snake',
      'tiger',
    ]),
    roomName: faker.random.arrayElement(['Om Happy', 'Om Girang']),
  }))
  .value();

export default Data;
