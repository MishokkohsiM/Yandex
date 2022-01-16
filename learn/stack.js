/*
Stack - Last In First Out
 */

export function Stack () {
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
