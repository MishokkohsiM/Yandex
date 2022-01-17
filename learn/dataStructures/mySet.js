/*
Set
 */

function MySet (array = []) {
    const collection = [...array]

    this.has = function (element) {
        return collection.indexOf(element) !== -1
    }

    this.values = function () {
        return collection
    }

    this.add = function (element) {
        if (!this.has(element)) {
            collection.push(element)
            return true
        }

        return false
    }

    this.size = function () {
        return collection.length
    }

    this.clear = function () {
        while (collection.length) {
            collection.pop()
        }
    }

    this.subSet = function (otherSet) {
        return collection.every((value) => {
            return otherSet.has(value)
        })
    }

    this.intersection = function (otherSet) {
        const result = new MySet()
        collection.forEach(value => {
            if(otherSet.has(value)) {
                result.add(value)
            }
        })

        return result
    }

    this.union = function (otherSet) {
        const result = new MySet()
        collection.concat(otherSet.values()).forEach(value => {
            result.add(value)
        })

        return result
    }
}

module.exports = {
    MySet,
}
