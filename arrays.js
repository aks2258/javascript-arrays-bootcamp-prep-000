var chocolateBars=["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(chocolateBars, butterfinger){
  chocolateBars=["butterfinger", ...chocolateBars]
  return chocolateBars
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, butterfinger){
  chocolateBars.unshift("butterfinger")
  return chocolateBars
}