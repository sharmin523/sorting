function bubbleSort(array, callback){
  if (!callback) {
      callback = function(a, b) {
          if (a < b) return -1
          if (a > b) return 1
          return 0
      }
  }

  if (array.length === 0) return array;
  for (let i = 0; i < array.length; i++){
    for (let j = 0; j < array.length-1; j++){

      const a = array[j]
      const b = array[j + 1]
      if (callback(a, b) === 1){
        swap(array, j)
      }
    }
  }
  return array;
}

function swap(array, index){
  const temp = array[index]
  array[index] = array[index+1]
  array[index+1] = temp
}
