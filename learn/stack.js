/*
Stack - Last In First Out
 */

const Stack = function () {
    let size = 0
    let storage = {}

    this.push = function (element) {
        storage[size] = element
        size += 1
    }

    this.pop = function () {
        if(!size) {
            return undefined
        }
        size -= 1
        const elem = storage[size]
        delete storage[size]

        return elem
    }

    this.size = function () {
        return size
    }

    this.pip = function () {
        return Object.values(storage).map(v => v)
    }
}

const stack = new Stack()

for (let i = 0; i <= 10; i++) {
    stack.push(i)
}

console.log(stack.pip())

while (stack.size()) {
    console.log(stack.pop())
}
