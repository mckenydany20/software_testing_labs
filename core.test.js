
//Rédaction de bonnes assertions
import { getCoupons } from './core';

describe('getCoupons', () => {
  it('should return an array of coupon objects', () => {
    const coupons = getCoupons();
    expect(coupons).toBeTruthy();
    expect(coupons).toBeInstanceOf(Array);
    expect(coupons).toHaveLength(2);

    expect(coupons[0]).toMatchObject({ code: 'SAVE20NOW', discount: 0.2 });
    expect(coupons[1]).toMatchObject({ code: 'DISCOUNT50OFF', discount: 0.5 });
  });
});

//Tests positifs et négatifs

import { fetchData } from './core';

test('fetchData returns data after a delay', async () => {
  const data = await fetchData();
  expect(data).toEqual([1, 2, 3]);
});