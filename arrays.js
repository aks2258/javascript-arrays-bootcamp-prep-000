var chocolateBars=["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(chocolateBars, butterfinger){
  return ["butterfinger", ...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, butterfinger){
  chocolateBars.unshift("butterfinger")
  return chocolateBars
}

function addElementToTheEndOfArray(chocolateBars, butterfinger){
  return
}