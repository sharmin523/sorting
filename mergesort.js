function split(arr) {
    const middle = Math.floor(arr.length / 2)
    return [ arr.slice(0, middle), arr.slice(middle) ]
}

function merge(one, two) {
    const finalArr = []

    while (one.length && two.length) {
        if (one[0] < two[0]) {
            finalArr.push(one.shift())
        } else {
            finalArr.push(two.shift())
        }
    }

    if (one.length) {
        return finalArr.concat(one)
    }

    if (two.length) {
        return finalArr.concat(two)
    }
}

function mergeSort(array) {
    if (array.length === 1) {
        console.log(array)
        return array
    }

    const [ one, two ] = split(array)
    const sortedOne = mergeSort(one)
    const sortedTwo = mergeSort(two)
    return merge(sortedOne, sortedTwo)
}
