describe('Bubble Sort', function(){
    beforeAll(function(){
        spyOn(window, 'swap').and.callThrough()
    });

    beforeEach(function(){
        swap.calls.reset()
    })

    it('sorts non-numerical arrays', function(){
        var arrToSort = [{ age: 4 }, { age: 8 }, { age: 2 }, { age: 9 }];
        var sorted = bubbleSort(arrToSort, function comparator (a, b) {
            if (a.age < b.age) return -1; // returning `-1` means "a goes before b"
            if (a.age > b.age) return 1;  // returning  `1` means "b goes before a"
            return 0; // returning 0 means "a and b are equivalent"
        });

        expect(sorted).toEqual([{ age: 2 }, { age: 4 }, { age: 8 }, { age: 9 }]);
    })

    it('sorts an array', function(){
        bubbleSort([1, 5, 3]);
        expect(swap.calls.count()).toEqual(1);
    });

    it('sorts an array', function (){
        bubbleSort([1, 9, 5, 3, 7]);
        expect(swap.calls.count()).toEqual(4);
    })

    it('sorts an array', function (){
        bubbleSort([9, 7, 5, 3, 1]);
        expect(swap.calls.count()).toEqual(10);
    })

    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });

    it('sorts an array of numbers', function(){
        expect( bubbleSort([1, 9, 5, 3, 7])).toEqual([1, 3, 5, 7, 9]);
    });

    it('sorts an array of numbers', function(){
        expect( bubbleSort([9, 7, 5, 3, 1])).toEqual([1, 3, 5, 7, 9]);
    });

    it('checks if an array is already sorted and returns the sorted array', function(){
        expect( bubbleSort([2, 4, 6, 8, 10])).toEqual([2, 4, 6, 8, 10]);
    });
  });