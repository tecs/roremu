const map = {
    'b': 'ビ',
    'c': 'ク',
    'd': 'ヅ',
    'f': 'フ',
    'g': 'グ',
    'h': 'イ',
    'j': 'ジ',
    'k': 'ク',
    'm': 'ム',
    'p': 'ップ',
    'q': 'キュ',
    'r': 'ル',
    's': 'ッス',
    't': 'ット',
    'v': 'ブ',
    'w': 'ウ',
    'x': 'ックス',
    'y': '',
    'z': 'ズ',
    '.': '。',
    ',': '、',
    ';': '；',
    '!': '！',
    '?': '？'
};

const defaults = {
    'count': 5,
    'units': 'paragraphs',
    'sentenceLowerBound': 5,
    'sentenceUpperBound': 15,
    'paragraphLowerBound': 3,
    'paragraphUpperBound': 7,
    'startWithLipsum': true
};

const lorem = require('lorem-ipsum');
const romaji = require('romaji');

module.exports = options => {
    const fullOptions = Object.assign({}, defaults, options);
    const lipsum = ['', '0', 0, 'false', false, 'null', null, 'no'].indexOf(fullOptions.startWithLipsum) === -1;
    delete fullOptions.startWithLipsum;

    return (lipsum ? 'ロレム イップスム ドロル ッスイット アメット、 クオンセクテトゥル アディピッスクイング エリット。' : '') +
        lorem(fullOptions)
        .toLowerCase()
        .replace(/l/g, 'r')
        .split(' ')
        .map(word => romaji.toKatakana(word))
        .join(' ')
        .split('')
        .map(letter => letter in map ? map[letter] : letter)
        .join('');
};
