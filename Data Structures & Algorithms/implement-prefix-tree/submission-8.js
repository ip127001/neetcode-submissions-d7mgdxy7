class TrieNode {
    constructor(character = '') {
        this.char = character;
        this.children = new Array(26).fill(null);
        this.isWordEnd = false;
    }
}

class PrefixTree {
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
    insert(word) {
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

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        const arr = word.split('');
        let curr = this.root;

        arr.forEach(char => {
            const idx = this.getCharIndex(char);
            if (curr.children[idx] === null || char !== curr.children[idx].char) {
                return false;
            }
            curr = curr.children[idx];
        })

        if (curr.isWordEnd) return true;
        return false;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        const arr = prefix.split('');
        let curr = this.root;

        for (let i = 0; i < arr.length; i++) {
            const char = arr[i];
            const idx = this.getCharIndex(char);
            if (curr.children[idx] === null || char !== curr.children[idx].char) {
                return false;
            }
            curr = curr.children[idx];
        }

        console.log('curr.children[idx]', curr)
        return arr.length ? true : false;
    }
}
