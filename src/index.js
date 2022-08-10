const numb = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    0: ''
}

const bigNumb = {
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety'
};

module.exports = toReadable = (number) => {
    if (number === 0) return 'zero';

    let result = '';

    if (number < 20) {
        result = numb[number]
    }
    if (number >= 20 && number < 100) {
        if (number % 10 === 0) {
            result = bigNumb[number / 10];
        } else {
            result = bigNumb[Math.floor(number / 10)] + ' ' + numb[number % 10];
        }
    }

    if (number >= 100) {
        if (number % 100 === 0) {
            result = numb[number / 100] + ' ' + 'hundred';
        } else if (+(('' + number)[1]) < 2) {

            result = numb[Math.floor(number / 100)] + ' ' + 'hundred' + ' ' + numb[number % 100];

        } else {
            if (number % 10 === 0) {
                result = numb[Math.floor(number / 100)] + ' ' + 'hundred' + ' ' + bigNumb[(number + '')[1]];
            } else {
                result = numb[Math.floor(number / 100)] + ' ' + 'hundred' + ' ' + bigNumb[(number + '')[1]] + ' ' + numb[number % 10];
            }
        }
    }

    return result;
}
