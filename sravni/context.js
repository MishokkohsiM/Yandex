function foo () {
    console.log(this.name);
}

const f = foo.bind({name: "Вася"});
f();

const bind = (fn, context) => {
    const obj = {
        ...context,
        fn: fn
    }

    return function () {
        return obj.fn()
    }
}

const a = bind(foo, {name: 'Миша'})

a()
