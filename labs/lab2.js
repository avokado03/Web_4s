// печать массива
function printArray(array){
    let result = '';
    for(let i = 0; i < array.length; i++){
        result += array[i] + ' ';
    }
    return result;
}

//первая
function l2_first(){
    let array1 = [3,4,5];
    let array2 = new Array(1,2,5);
    let array3 = Array.of(5,9,10);

    let arraysStr = 'let array1 = [3,4,5]; print - ' + printArray(array1) + '\n'
                  + 'let array2 = new Array(1,2,5); print - ' + printArray(array2) + '\n'
                  + 'let array3 = Array.of(5,9,10); print - ' + printArray(array3)
    alert(arraysStr);
}

// вторая
function l2_second(){
    let array = Array(0, 1, 2, 3, 4, 5);
    let fifth = array[5];
    let result = "Old 5th element = " + fifth + "\n";
    array[5] = 100;
    result += "New 5th element = "+ array[5];
    alert(result);
}


//третья
let arrayCount = 0;
const l2_third_listener = function (e){
    document.getElementsByClassName('l2_third_result')[0].innerHTML = arrayCount;
}
function l2_third(){
    let array = [1,2,3,4,5];
    arrayCount = array.length;
    document.addEventListener("mousemove", l2_third_listener);
}

function l2_third_stop(){
    document.getElementsByClassName('l2_third_result')[0].innerText = "-";
    document.removeEventListener("mousemove", l2_third_listener);
}

//четвертая
function l2_fourth(){
    let funcCode = printArray.toString();
    document.getElementsByClassName("l2_fourth_result")[0].innerHTML = funcCode;
}

// задачи с 5 по 8
function l2_arrayFunctions(){
    let arrayStr = ["a", "b", "c"];
    let arrayNumber = [1, 2, 3];

    let concatenated = arrayStr.concat(arrayNumber);
    let result = '//Concatenated: ' + printArray(concatenated);

    let last = concatenated.pop();
    result += '<br>//Pop last: ' + last;

    concatenated.unshift('15');
    result += '<br>//Push first: ' + concatenated[0] + '<br>';

    result += l2_arrayFunctions;
    document.getElementsByClassName("l2_fifth_result")[0].innerHTML = result;
}

//девятая
function l2_ninth(){
    alert(new Date());
}

//десятая
function l2_tenth(){
    let options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
    alert(new Date().toLocaleString("ru", options));
}

//одиннадцатая
function l2_eleventh(){
    function getRandomValue(min, max){
        return Math.floor(Math.random() * (max - min)) + min;
    }

    let random1 = getRandomValue(0, 50);
    let random2 = getRandomValue(0, 50);

    let result = random1 + ' * ' + random2 + ' = ' + (random1 * random2);
    alert(result);
}
