const { Queue } = require('../../learn/queue.js');

const createQueue = (size) => {
    const queue = new Queue()

    for (let i = 0; i < size; i++) {
        queue.push(i + 1)
    }

    return queue
}

describe('Testing queue', ()=> {
    test('Testing add to queue', () => {
        const queue = createQueue(5)

        expect(queue.printQueue()).toEqual([1,2,3,4])
    })

    test.each([
        ['if queue isEmpty', 0, 3, undefined],
        ['if queue no isEmpty', 5, 3, 3],
        ['if queue no isEmpty, but queue size less then dequeueCount', 5, 10, undefined],
    ])('deQueue %s', (_, size, dequeueCount,expected) => {
        const queue = createQueue(size)
        let result = undefined

        while (dequeueCount) {
            result = queue.dequeue()
            dequeueCount -= 1
        }

        expect(result).toBe(expected)
    })

    test.each([
        ['if queue isEmpty', 0, 3, 0],
        ['if queue no isEmpty', 5, 3, 2],
        ['if queue no isEmpty, but queue size less then dequeueCount', 5, 10, 0],
    ])('Size %s', (_, size, dequeueCount,expected) => {
        const queue = createQueue(size)

        while (dequeueCount) {
            queue.dequeue()
            dequeueCount -= 1
        }

        expect(queue.size()).toBe(expected)
    })
})
