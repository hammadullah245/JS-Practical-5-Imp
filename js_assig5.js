let array = [1, 2, 3, 4, 5];
let index = array.indexOf(3);
if (index !== -1) {
    array.splice(index);
}
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
