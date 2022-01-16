/*
doublyLinkedList

Append
Delete
Find
DeleteTail
DeleteHead
FromArray
ToArray
ToString
Reverse
 */

function DoublyLinkedList () {
    let length = 0
    let head = null
    let tail = null

    const Node = function (element) {
        this.element = element
        this.next = null
        this.prev = null
    }

    this.size = function () {
        return length
    }

    this.add = function (element) {
        const node = new Node(element)
        length += 1
        if (head === null) {
            head = node
        } else {
            let currenNode = head

            while (currenNode.next) {
                currenNode = currenNode.next
            }

            currenNode.next = node
            node.prev = currenNode
            tail = node
        }
    }

    this.deleteHead = function () {
        let currentNode = head

        if(currentNode && currentNode.next) {
            const nextNode = currentNode.next
            head = nextNode
            nextNode.prev = null
        } else {
            head = null
        }
    }

    this.deleteTail = function () {
        const prevNode = tail && tail.prev

        if (prevNode) {
            prevNode.next = null
            tail = prevNode
        }
    }

    this.delete = function (element) {
        let currentNode = head
        let prevNode = null
        let indexOf = -1

        while (currentNode && indexOf === -1) {
            if (currentNode.element === element) {
                indexOf = 1
                if (prevNode) {
                    const node = currentNode.next
                    if(!node) {
                        this.deleteTail()
                    } else {
                        node.prev = prevNode
                        prevNode.next = node
                    }
                } else {
                    this.deleteHead()
                }
            } else {
                prevNode = currentNode
                currentNode = currentNode.next
            }
        }
    }

    this.getArray = function () {
        let currentNode = head
        const array = []

        while (currentNode) {
            array.push(currentNode.element)
            currentNode = currentNode.next
        }

        return array
    }
}

const doubleList = new DoublyLinkedList()

for (let i = 0; i <= -1; i++) {
    doubleList.add(i)
}

doubleList.deleteHead()
console.log(doubleList.getArray())
