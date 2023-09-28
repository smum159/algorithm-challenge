"use strict";

const middleOfList = ( myArr ) => {

  let secondHalf = myArr.slice(Math.floor(myArr.length/2), myArr.length)
    let node1 = myArr[Math.floor(myArr.length/2)-1]
    let node2 = myArr[Math.floor(myArr.length/2)]
    let middleNode = myArr[Math.floor(myArr.length/2)]
  if (myArr.length % 2 == 0) {
    return (
      `OUTPUT: [${secondHalf}]. EXPLINATION: Since the list has two middle nodes (${node1} & ${node2}) we return the second one`
    )
  } else {
    return (
      `OUTPUT: [${secondHalf}]. EXPLINATION: The middle node of this list is: ${middleNode}`
    )
  }
}

module.exports = middleOfList;

