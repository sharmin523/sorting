describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
        expect(split([1, 2, 3, 4])).toEqual([ [1, 2], [3, 4] ])
    });
    it('is able to split an array with an odd number of elements into two halves', function() {
        expect(split([1, 2, 3, 4, 5])).toEqual([ [1, 2], [3, 4, 5] ])
    });
  });

// describe('Merge function', function(){
//     it('is able to merge two sorted arrays into one sorted array', function(){
//         expect(merge([1, 3], [2, 4, 5])).toEqual([ 1, 2, 3, 4, 5 ])
//     });
//     it('is able to merge two sorted arrays into one sorted array', function(){
//         expect(merge([1, 3, 6], [2, 4, 5])).toEqual([ 1, 2, 3, 4, 5, 6 ])
//     });
// });

describe('MergeSort function', function(){
    it('is able to sort an array', function(){
        expect(mergeSort([1, 3, 2, 4, 5])).toEqual([ 1, 2, 3, 4, 5 ])
    });
    it('sorts non-numerical arrays', function(){
        var arrToSort = [{ age: 4 }, { age: 8 }, { age: 2 }, { age: 9 }];
        var sorted = mergeSort(arrToSort, function comparator (a, b) {
            if (a.age < b.age) return -1; // returning `-1` means "a goes before b"
            if (a.age > b.age) return 1;  // returning  `1` means "b goes before a"
            return 0; // returning 0 means "a and b are equivalent"
        });

        expect(sorted).toEqual([{ age: 2 }, { age: 4 }, { age: 8 }, { age: 9 }]);
    })
});
