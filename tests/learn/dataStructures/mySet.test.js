const { MySet } = require('../../../learn/dataStructures/mySet.js')

const createSet = (array = []) => {
    return new MySet(array)
}

const firstArray = [1,2,3,4]
const secondArray = [3,4,5,6]

describe('MySet', () => {
    test('create', () => {
        const set = createSet(firstArray)

        secondArray.forEach(value => {
            set.add(value)
        })

        expect(set.values()).toEqual([1,2,3,4,5,6])
    })
})
