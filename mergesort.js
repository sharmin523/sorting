function split(arr) {
    const middle = Math.floor(arr.length / 2)
    return [ arr.slice(0, middle), arr.slice(middle) ]
}

function merge(one, two, callback) {
    console.log(callback)
    const finalArr = []

    while (one.length && two.length) {
        if (callback(one[0], two[0]) === 1) {
            finalArr.push(two.shift())
        } else {
            finalArr.push(one.shift())
        }
    }

    if (one.length) {
        return finalArr.concat(one)
    }

    if (two.length) {
        return finalArr.concat(two)
    }
}

function mergeSort(array, callback) {

    if (!callback) {
        callback = function(a, b) {
            if (a < b) return -1
            if (a > b) return 1
            return 0
        }
    }

    // console.log(callback)

    if (array.length === 1) {
        return array
    }

    const [ one, two ] = split(array)

    const sortedOne = mergeSort(one)
    const sortedTwo = mergeSort(two)

    return merge(sortedOne, sortedTwo, callback)
}
