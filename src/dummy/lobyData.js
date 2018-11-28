import faker from 'faker';
import _ from 'lodash';

const Data = _()
  .range(12)
  .map(number => ({
    id: faker.random.number({ min: 1, max: 32000 }),
    number: faker.phone.phoneNumber(),
    creditTaken: 0,
  }))
  .value();

export default Data;
