class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */

    dfs(row, col, word, index, board) {
        if (word.length === index) {
            return true;
        }

        if (row < 0 
            || col < 0 
            || row >= board.length 
            || col >= board[0].length 
            || word[index] !== board[row][col]) {
            return false;
        }

        let result = false;
        let temp = board[row][col];
        board[row][col] = '*';

        let offsets = [
            [0,1],
            [1,0],
            [0,-1],
            [-1,0]
        ]

        for (let offset of offsets) {
            result = this.dfs(row+offset[0], col+offset[1], word, index+1, board)
            if (result) {
                break;
            }
        }

        board[row][col] = temp;
        return result;
    }

    exist(board, word) {
        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board[0].length; col++) {
                if (this.dfs(row, col, word, 0, board)) return true;
            }
        }
        return false;
    }
}
