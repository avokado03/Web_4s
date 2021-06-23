function zero(i){
    let type = typeof(i);
    if (type == 'number'){
        alert('This is number = ' + i)
    }
    else if (type == 'string')
    {
        alert('This is string \'' + i + '\'')
    }
    else if (type == 'undefined'){
        alert ('This is undefined')
    }
    else{
        alert('Unknown type')
    }
}

function first(){
    var zodiac = prompt('Введите знак зодиака: ', '');

    switch (zodiac.toLowerCase()) {
        case 'весы':
            alert("Ваш знак ВЕСЫ");
            break;

        case 'дева':
            alert("Ваш знак ДЕВА");
            break;

        case 'скорпион':
            alert("Ваш знак СКОРПИОН");
            break;

        case 'лев':
            alert("Ваш знак ЛЕВ");
            break;

        default:
            alert("Знак не найден");
            break;
    }

    function second(){
        let forStr = '';
        let whileStr = '';
        let doWhileStr = '';

        let i = 1;
        while(i <= 40){
            whileStr += i + ' ';
            i++;
        }

        let j = 1;
        do{
            doWhileStr += j + ' ';
        }while(j <= 40);

        for(let i = 1; i <= 40; i++){
            forStr += i + ' ';
        }

        let result = "For: " + forStr + "<br/>"
                   + "While: " + whileStr + "<br/>"
                   + "DoWhile: " + doWhileStr;
        alert(result);
    }

    function third(){
        while(true){
            alert('');
        }
    }

    function fourth(){
        let isCorrect = true;
        while (true){
            let value = prompt("Введите число: ", '');
            let condition = value != null && !isNaN(value) && res > 5;
            if (condition){
                alert("Ура!");
                isCorrect = false;
            }
            else{
                alert("Некорректный ввод - попробуйте еще");
            }
        }
    }

    function fifth(){
        let result = '';
        for (let i = 8; i <= 20; i+2)
        {
            result += i + ' ';
        }
        alert(result);
    }

    function sixth(){
        let result = '';
        for (let i = 1; i <= 7; i+2)
        {
            if (i != 5)
                result += i + ' ';
        }
        alert(result);
    }
}


