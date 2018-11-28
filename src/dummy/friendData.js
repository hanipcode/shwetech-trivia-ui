import faker from 'faker';
import _ from 'lodash';

const Data = _()
  .range(20)
  .map(number => ({
    number: faker.phone.phoneNumber(),
    date: faker.date.recent(),
  }))
  .value();

export default Data;
