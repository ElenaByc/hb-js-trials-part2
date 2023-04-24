'use strict';

function wordsInCommon(words1, words2) {
   // """Return a list of unique words that appear in `words1` and `words2`
    
    const words1_set = new Set(words1)
    const words2_set = new Set(words2)

    const result = new Set()

    for (const word of words1_set) {
        if (words2_set.has(word)) {
            result.add(word)
        }
    }
    return [...result]
}

function kidsGame(names) {
    const output = [names.shift()]

    const first_letter_to_words = {}

    // Make a dictionary of {first-letter: [words-starting-with-that-letter]}
    // Note that we could also use .setdefault here
    for (const name of names) {

        if (!first_letter_to_words.hasOwnProperty(name[0])) {
            first_letter_to_words[name[0]] = [name]
        } else {
            first_letter_to_words[name[0]].push(name)
        }
    }

    // Chain together words until we run out
    let last_word, word
    let start_letter
    while (true) {

        // Our starting letter will be the last letter of last word
        last_word = output[output.length - 1]
        start_letter = last_word[last_word.length - 1]

        // If there are no candidate words, we're done
        if (first_letter_to_words[start_letter] === undefined ||
            first_letter_to_words[start_letter].length === 0)
            break

        // Get the first word with that letter and remove it
        word = first_letter_to_words[start_letter].shift()
        output.push(word)
    }

    return output
}
