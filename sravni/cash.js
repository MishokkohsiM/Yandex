const fib = (value) => {
    return value <= 1 ? value : fib(value - 1) + fib(value - 2)
}

const memo = () => {
    const cash = {}

    return (value) => {
        if (cash[value]) {
            return cash[value]
        } else {
            cash[value] = fib(value)
            return cash[value]
        }
    }
}

const bar = memo()

console.time('First')
console.log(bar(7))
console.timeEnd('First')

console.time('Second')
console.log(bar(7))
console.timeEnd('Second')
