const { Stack } = require('../../learn/stack.js')

const createStack = (size) => {
    const stack = new Stack()
    for (let i = 0; i < size; i++) {
        stack.push(i + 1)
    }

    return stack
}

describe('Stack', () => {
    test('Add stack', () => {
        const stack = createStack(5)

        expect(stack.pip()).toEqual([5, 4, 3, 2, 1])
    })

    test.each([
        ['Pop if is no empty', 5, 3, [5,4,3]],
        ['Pop if isEmpty', 0, 3, []],
        ['Pop if size less popCount', 5, 10, [5,4,3,2,1]],
    ])('%s', (_, size, popCount, expected) => {
        const stack = createStack(size)
        const result = []
        while (popCount) {
            const elem = stack.pop()
            if (elem) {
                result.push(elem)
            }
            popCount -= 1
        }

        expect(result).toEqual(expected)
    })

    test.each([
        ['Size if is no empty', 5, 3, 2],
        ['Size if isEmpty', 0, 3, 0],
        ['Size if size less popCount', 5, 10, 0],
    ])('%s', (_, size, popCount, expected) => {
        const stack = createStack(size)
        while (popCount) {
            stack.pop()
            popCount -= 1
        }

        expect(stack.size()).toEqual(expected)
    })
})
