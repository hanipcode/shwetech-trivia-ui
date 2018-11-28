import faker from 'faker';
import _ from 'lodash';

const Data = _()
  .range(12)
  .map(number => ({
    id: faker.random.number({ min: 100, max: 1000 }),
    date: faker.date.recent(),
    credit: faker.commerce.price(100, 1000, 0),
    roomName: faker.random.arrayElement([
      'Fun Game',
      'Lucky Man',
      'Play Here',
      'Cupucabra',
      'Rich Man',
      'Wow Much Money',
    ]),
  }))
  .value();

export default Data;
