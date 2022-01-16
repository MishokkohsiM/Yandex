/*
Queue - First In First Out
 */

import { LinkedList } from './linkedList.js';

export function Queue () {
    const queue = new LinkedList()

    this.push = function (element) {
        queue.add(element)
    }

    this.size = function () {
        return queue.size()
    }

    this.dequeue = function () {
        const head = queue.head()
        queue.remove()

        return head.element
    }

    this.printQueue = function () {
        return queue.getListElement()
    }
}

