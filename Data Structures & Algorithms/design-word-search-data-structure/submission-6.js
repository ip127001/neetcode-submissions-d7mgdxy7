class TrieNode {
    constructor(character = '') {
        this.char = character;
        this.children = new Array(26).fill(null);
        this.isWordEnd = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    getCharIndex(c) {
        return c.charCodeAt(0) - 'a'.charCodeAt(0);
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        const arr = word.split('');
        let curr = this.root;

        arr.forEach(char => {
            const idx = this.getCharIndex(char);
            if (curr.children[idx] === null) {
                curr.children[idx] = new TrieNode(char);
            }
            curr = curr.children[idx];
        })

        curr.isWordEnd = true;
    }

    searchIt(curr, word, currIdx) {
        // base case
        if (currIdx === word.length) {
            return curr.isWordEnd;
        }

        // recursion
        const char = word[currIdx];
        if (char === ".") {
            const filteredList = curr.children.filter(c => c !== null);
            for (let charObj of filteredList) {
                if (this.searchIt(charObj, word, currIdx+1)) {
                    return true;
                }
            }
            return false;
        } else {
            const idx = this.getCharIndex(char);
            if (curr === null || curr.children[idx] === null || curr.children[idx].char !== char) {
                return false;
            }
            curr = curr.children[idx];
            return this.searchIt(curr, word, currIdx+1);
        }
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        const result = this.searchIt(this.root, word, 0);
        return result;
    }
}
