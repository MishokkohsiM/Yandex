/*
Queue - First In First Out
 */

const { LinkedList } = require('./linkedList.js');

function Queue () {
    const queue = new LinkedList()

    this.push = function (element) {
        queue.add(element)
    }

    this.size = function () {
        return queue.size()
    }

    this.dequeue = function () {
        return queue.remove()
    }

    this.printQueue = function () {
        return queue.getListElement()
    }
}

module.exports = {
    Queue,
}
