function printArray(array){
    let result = '';
    array.forEach(element => {
        result += element + ' ';
    });
    return result;
}

function l2_first(){
    let array1 = [3,4,5];
    let array2 = new Array(1,2,5);
    let array3 = Array.of(5,9,10);

    let arraysStr = 'let array1 = [3,4,5]; print - ' + printArray(array1) + '\n'
                  + 'let array2 = new Array(1,2,5); print - ' + printArray(array2) + '\n'
                  + 'let array3 = Array.of(5,9,10); print - ' + printArray(array3)
    alert(arraysStr);
}

function l2_second(){
    let array = Array(0, 1, 2, 3, 4, 5);
    let fifth = array[5];
    let result = "Old 5th element = " + fifth + "\n";
    array[5] = 100;
    result += "New 5th element = "+ array[5];
    alert(result);
}

let arrayCount = 0;
const l2_third_listener = function (e){
    document.getElementsByClassName('l3_third_result').innerText = arrayCount;
}
function l2_third(){
    let array = [1,2,3,4,5];
    arrayCount = array.length;
    document.addEventListener("mousemove", l2_third_listener);
}

function l2_third_stop(){
    document.getElementsByClassName('l3_third_result').innerText = "-";
    document.removeEventListener("mousemove", l2_third_listener);
}