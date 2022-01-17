const { LinkedList } = require('../../../learn/dataStructures/linkedList.js');

const getList = (size) => {
    const list = new LinkedList()
    for (let i = 0; i < size; i++) {
        list.add(i + 1)
    }

    return list
}

describe('LinkedList', () => {
    test('Add element to list', () => {
        const list = getList(5)

        const result = list.getListElement()

        expect(result).toEqual([1, 2, 3, 4])
    })

    test.each([
        ['Delete to list', 5, 1],
        ['Delete to list if list isEmpty', 0, undefined],
    ])('%s', (_, size, expected ) => {
        const list = getList(size)

        expect(list.remove()).toBe(expected)
    })

    test.each([
        ['indexOf to list', 5, 2, 1],
        ['indexOf to list if list isEmpty', 0, 2, -1],
        ['indexOf to list if no result', 0, 10, -1],
    ])('%s', (_, size, element, expected) => {
        const list = getList(size)

        const indexOf = list.indexOf(element)

        expect(indexOf).toBe(expected)
    })

    test.each([
        ['Get list size', 5, 5],
        ['Get list size', 10, 10],
        ['Get list size if list isEmpty', 0, 0],
    ])('%s', (_, size, expected) => {
        const list = getList(size)

        expect(list.size()).toBe(expected)
    })
})

