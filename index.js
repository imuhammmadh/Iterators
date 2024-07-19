//Introduction
function iterator(a) {
    let nextIndex = 0
    return {
        next: function () {
            if (nextIndex < arr.length) {
                return {
                    value: arr[nextIndex++],
                    done: false
                }
            }
            else {
                return { done: true }
            }
        }
    }
}
let arr = [1, 2, 3, 4]
let i = iterator(arr)
console.log(i.next().value);
console.log(i.next().value);
console.log(i.next().value);
console.log(i.next().value);
