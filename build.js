function makeStruct(input) {
    // remove spaces
    input = input.replace(/\s+/g, '');
    // into array of chars
    var chars = input.split('');

    let exps = 0; // number of expressions
    for (let i = 0; i < chars.length; i++) {
        const char = chars[i];
        if (char == '(') {
            exps++;
        }
    }

    for (let i = 0; i < chars.length; i++) {
        const char = chars[i];
        if (char == '&') {

        }
    }
}

//function