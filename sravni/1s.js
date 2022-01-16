const add = (value) => {
    if (typeof value !== 'undefined') {
        return (secondValue) => {
            if (typeof secondValue !== 'undefined') {
                return add(secondValue + value)
            } else {
                return value
            }
        }
    } else {
        return value
    }
};

console.log(add(2)(3) ()) // 5;
