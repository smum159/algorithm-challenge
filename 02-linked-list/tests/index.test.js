const middleOfList = require("..");

const arrOdd1 = [1,2,3,4,5,6,7,8,9];
const arrEven1 = [1,2,3,4,5,6,7,8,9,10];
const arrOdd2 = [1,2,3,4,5,6,7,8,9,10,11,12,13]
const arrEven2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

describe('02-linked-list', () => {
  test('Should return 5 as middle node in an odd lenght number array from 1 to 9 "[1,2,...,8,9]" ', () => { 
    const response = middleOfList(arrOdd1);
    expect(response).toBe("OUTPUT: [5,6,7,8,9]. EXPLINATION: The middle node of this list is: 5");
  })

  test('Should return 6 as middle node in an even lenght number array from 1 to 10 "[1,2,...,8,9]" ', () => { 
    const response = middleOfList(arrEven1);
    expect(response).toBe("OUTPUT: [6,7,8,9,10]. EXPLINATION: Since the list has two middle nodes (5 & 6) we return the second one");
  })

  test('Should return 5 as middle node in an odd lenght number array from 1 to 13 "[1,2,...,12,13]" ', () => { 
    const response = middleOfList(arrOdd2);
    expect(response).toBe("OUTPUT: [7,8,9,10,11,12,13]. EXPLINATION: The middle node of this list is: 7");
  })

  test('Should return 6 as middle node in an even lenght number array from 1 to 16 "[1,2,...,8,9]" ', () => { 
    const response = middleOfList(arrEven2);
    expect(response).toBe("OUTPUT: [9,10,11,12,13,14,15,16]. EXPLINATION: Since the list has two middle nodes (8 & 9) we return the second one");
  })
  
});