const roremu = require('./roremu');
const url = require('url');

const server = require('http').createServer((req, res) => {
    const params = url.parse(req.url, true).query;
    for (const key in params) {
        if ([
            'count',
            'units',
            'sentenceLowerBound',
            'sentenceUpperBound',
            'paragraphLowerBound',
            'paragraphUpperBound',
            'startWithLipsum'
        ].indexOf(key) === -1) {
            delete params[key];
        }
    }
    const ripusumu = roremu(params)
        .split('\n')
        .map(paragraph => `<p>${paragraph}</p>`)
        .join('');
    res.end(`<!DOCTYPE html><html><head><meta charset="UTF-8"></head><body>${ripusumu}</body></html>`);
});

server.listen(3000, () => {
    console.log('Connected...');
});
