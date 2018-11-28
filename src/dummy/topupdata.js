import faker from 'faker';
import _ from 'lodash';

const Data = _()
  .range(12)
  .map(number => ({
    number: faker.phone.phoneNumber(),
    date: faker.date.recent(),
    isAgent: faker.random.boolean(),
    ammount: faker.commerce.price(1000, 10000),
  }))
  .value();

export default Data;
