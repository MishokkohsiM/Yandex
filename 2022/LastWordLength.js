var lengthOfLastWord = function(s) {
    const result = s.replace(/\s+/g, ' ').trim().split(' ').pop().length

    console.log(result)
    return result
};
