const factorial = (n) => {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

const fibonacci = (n) => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const sumArray = (arr)=> {
    if (arr.length === 0) return 0;
    return arr[0] + sumArray(arr.slice(1));

}

const reverseString = (str) => {
    if (str === "") return "";
    return reverseString(str.substr(1)) + str[0];
}

const findMax = (arr) => {
    if (arr.length === 1) return arr[0];
    const maxOfRest = findMax(arr.slice(1));
    return arr[0] > maxOfRest ? arr[0] : maxOfRest;
}

const power = (base, exponent) => {
    if (exponent === 0) return 1;
    return base * power(base, exponent - 1);
}

const gcd = (a, b) => {
    if (b === 0) return a;
    return gcd(b, a % b);
}

const binarySearch = (arr, target, low = 0, high = arr.length - 1) => {
    if (low > high) return -1;
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] > target) return binarySearch(arr, target, low, mid - 1);
    return binarySearch(arr, target, mid + 1, high);
}

const isPalindrome = (str) => {
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    return isPalindrome(str.slice(1, -1));
}

const flattenArray = (arr) => {
    return arr.reduce((flat, item) => {
        return flat.concat(Array.isArray(item) ? flattenArray(item) : item);
    }, []);
}

const RecursiveFunctions = {
    factorial,
    fibonacci,
    sumArray,
    reverseString,
    findMax,
    power,
    gcd,
    binarySearch,
    isPalindrome,
    flattenArray
}

module.exports = { RecursiveFunctions };
