# roremu

Roremu is a Node.js module for generating passages of lorem ipsum text transliterated in Japanese. It is based on the
[lorem-ipsum.js](https://github.com/knicklabs/lorem-ipsum.js) and [romaji.js](https://github.com/markni/romaji.js)
packages.

## Using in Node.js

Require the roremu.js module and use it to generate a passage of lorem ipsum text.

```javascript
const roremu = require('./roremu');
const output = roremu();
```

### Options

You can pass an options object to the `roremu()` function to fine-tune the output:

| Name                | Description                                                                      |
|---------------------|----------------------------------------------------------------------------------|
| count               | Number of words, sentences, or paragraphs to generate.                           |
| units               | Generate words, sentences, or paragraphs.                                        |
| sentenceLowerBound  | Minimum words per sentence.                                                      |
| sentenceUpperBound  | Maximum words per sentence.                                                      |
| paragraphLowerBound | Minimum sentences per paragraph.                                                 |
| paragraphUpperBound | Maximum sentences per paragraph.                                                 |
| format              | Plain text or html                                                               |
| words               | Custom word dictionary. Uses dictionary.words (in lib/dictionary.js) by default. |
| random              | A PRNG function. Uses Math.random by default                                     |
| suffix              | The character to insert between paragraphs. Defaults to default EOL for your OS. |
| startWithLipsum     | Start with 'Lorem ipsum dolor sit amet...'                                       |

Example:

```javascript
output = roremu({
    count: 5,
    units: 'paragraphs',
    sentenceLowerBound: 5
    sentenceUpperBound: 15,
    format: 'plain',
    words: ['ad', 'dolor', ... ],
    random: Math.random
});
```

## Using as an API

You can also use roremu as a web API by invoking:

```bash
$ npm start
```

### GET parameters

| Name                | Description                                                                      |
|---------------------|----------------------------------------------------------------------------------|
| count               | Number of words, sentences, or paragraphs to generate.                           |
| units               | Generate words, sentences, or paragraphs.                                        |
| sentenceLowerBound  | Minimum words per sentence.                                                      |
| sentenceUpperBound  | Maximum words per sentence.                                                      |
| paragraphLowerBound | Minimum sentences per paragraph.                                                 |
| paragraphUpperBound | Maximum sentences per paragraph.                                                 |
| startWithLipsum     | Start with 'Lorem ipsum dolor sit amet...'                                       |
