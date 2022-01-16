/*
LinkedList
 */

export function LinkedList() {
    let length = 0
    let head = null

    const Node = function (element) {
        this.element = element
        this.next = null
    }

    this.size = function () {
        return length
    }

    this.head = function () {
        return head
    }

    this.add = function (element) {
        const node = new Node(element)
        length += 1
        if (head === null) {
            head = node
        } else {
            let currentNode = head

            while (currentNode.next) {
                currentNode = currentNode.next
            }

            currentNode.next = node
        }
    }

    this.remove = function () {
        let currentNode = head

        if(currentNode.next) {
            head = currentNode.next
            length -= 1
        } else {
            head = null
            length = 0
        }
    }

    this.getListElement = function () {
        let currentNode = head
        const elements = []
        while (currentNode.next) {
            elements.push(currentNode.element)

            currentNode = currentNode.next
        }

        return elements
    }

    this.indexOf = function (element) {
        let currentNode = head
        let index = -1
        let indexOf = 0
        while (currentNode && index === -1) {
            if(currentNode.element === element) {
                index = indexOf
            }
            indexOf += 1
            currentNode = currentNode.next
        }

        return index
    }
}
