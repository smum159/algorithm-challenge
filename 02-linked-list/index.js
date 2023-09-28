var myArr = [1,2,3,4,5,6,7,8,9]

const middleOfList = ( arr ) => {

  let secondHalf = myArr.slice(Math.floor(myArr.length/2), myArr.length)
    let node1 = myArr[Math.floor(myArr.length/2)-1]
    let node2 = myArr[Math.floor(myArr.length/2)]
    let middleNode = myArr[Math.floor(myArr.length/2)]
  if (arr.length % 2 == 0) {
    console.log(`OUTPUT: [${secondHalf}]`);
    console.log(`since the list has two middle nodes (${node1} & ${node2}) we return the second one`);
  } else {
    console.log(`OUTPUT: [${secondHalf}]`);
    console.log(`The middle node of this list is: ${middleNode}`);
  }
}

middleOfList(myArr);


