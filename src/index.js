module.exports = function towelSort(matrix = []) {
    const result = [];

    for (let i = 0; i < matrix.length; i++) {
        for (let y = 0; y < matrix[i].length; y++) {
            const reverseIndex = i % 2 === 0 ? y : matrix[i].length - y - 1;
            result.push(matrix[i][reverseIndex]);
        }
    }

    return result;
}


