import regStr from '../../code/string/696'

test('00110011', () => {
  expect(regStr('00110011')).toEqual(['0011', '01', '1100', '10', '0011', '01'])
})

test('10101', () => {
  expect(regStr('10101')).toEqual(['10', '01', '10', '01'])
})
