//наполнение теста
const test = [{
        id: 1,
        text: 'Какого типа данных нет в JS?',
        answers: [{
                text: 'NaN',
                isTrue: false
            },
            {
                text: 'number',
                isTrue: false
            },
            {
                text: 'boolean',
                isTrue: false
            },
            {
                text: 'unsigned int',
                isTrue: true
            },
        ]
    },
    {
        id: 2,
        text: 'Какая функция позволяет узнать тип переменной?',
        answers: [{
                text: 'typeof()',
                isTrue: true
            },
            {
                text: 'pop()',
                isTrue: false
            },
            {
                text: 'push()',
                isTrue: false
            },
            {
                text: 'alert()',
                isTrue: false
            },
        ]
    },
    {
        id: 3,
        text: 'Расшифруйте аббревиатуру DOM: ',
        answers: [{
                text: 'Document Object Model',
                isTrue: true
            },
            {
                text: 'Digital Optical Modulation',
                isTrue: false
            },
            {
                text: 'Domestic Object Mode',
                isTrue: false
            },
            {
                text: 'Все ответы неверны',
                isTrue: false
            },
        ]
    },
    {
        id: 4,
        text: 'Какие ключевые слова используются в JavaScript для того, чтобы объявить переменную?',
        answers: [{
                text: 'var, let, const',
                isTrue: true
            },
            {
                text: 'var, let',
                isTrue: false
            },
            {
                text: 'byte, short, int, long, float',
                isTrue: false
            },
            {
                text: 'int, short,var',
                isTrue: false
            },
        ]
    },
    {
        id: 5,
        text: 'Этот метод разбивает строку на подстроки: ',
        answers: [{
                text: 'filter()',
                isTrue: false
            },
            {
                text: 'prompt()',
                isTrue: false
            },
            {
                text: 'split()',
                isTrue: true
            },
            {
                text: 'typeof()',
                isTrue: false
            },
        ]
    },
    {
        id: 6,
        text: 'Расшифруйте аббревиатуру ES: ',
        answers: [{
                text: 'EffectService',
                isTrue: false
            },
            {
                text: 'EnterSafe',
                isTrue: false
            },
            {
                text: 'Европейский союз',
                isTrue: false
            },
            {
                text: 'ECMAScript',
                isTrue: true
            },
        ]
    },
    {
        id: 7,
        text: 'Что такое замыкание в JS?',
        answers: [{
                text: 'Это способность функции - вызвать другую функцию',
                isTrue: false
            },
            {
                text: 'Это способность функции - вызывать саму себя',
                isTrue: false
            },
            {
                text: 'Такого термина нет в JS',
                isTrue: false
            },
            {
                text: 'Это способность функции - запоминать область видимости, в которой эта функция была объявлена',
                isTrue: true
            },
        ]
    },
    {
        id: 8,
        text: 'Как можно получить элемент DOM с помощью id ?',
        answers: [{
                text: 'window.getElementById(...)',
                isTrue: false
            },
            {
                text: 'page.getElementById(...)',
                isTrue: false
            },
            {
                text: 'document.innerHTML.getElementById(...)',
                isTrue: false
            },
            {
                text: 'document.getElementById(...)',
                isTrue: true
            },
        ]
    },
    {
        id: 9,
        text: 'Как считать свойство b объекта a?',
        answers: [{
                text: 'a[b]',
                isTrue: false
            },
            {
                text: 'a.b',
                isTrue: true
            },
            {
                text: 'a->b',
                isTrue: false
            },
            {
                text: 'a::b',
                isTrue: false
            },
        ]
    },
    {
        id: 10,
        text: 'Какие конструкции для циклов есть в javascript?',
        answers: [{
                text: 'Только две: for и while.',
                isTrue: false
            },
            {
                text: 'Три: for, while и do...while.',
                isTrue: true
            },
            {
                text: 'Только одна: for.',
                isTrue: false
            },
            {
                text: 'Четыре: for, foreach, while и do...while.',
                isTrue: false
            },
        ]
    },
];

let currentCount = 0;
let userSum = 0;

//функции-состояния теста
//beginOfTest -> startTest -> setQuestion -> endOfTest -> beginOfTest

function startTest() {
    document.getElementsByClassName('start_block')[0].style.display = 'none';
    document.getElementsByClassName('question_block')[0].style.display = 'block';
    Array.from(document.getElementsByClassName('next_btn')).forEach(
        x => x.addEventListener('click', setQuestion)
    );
    document.getElementsByClassName('final_btn')[0].addEventListener('click', beginOfTest);
    setQuestion(null);
}

function setQuestion(e) {
    if (currentCount != 0)
        userSum += +e.currentTarget.value;
    if (currentCount == test.length)
        endOfTest();
    let question = test[currentCount];
    document.getElementsByClassName('test_header')[0].innerHTML = question.text;
    for (let i = 0; i < question.answers.length; i++) {
        let btnClass = 'answer_' + i;
        let button = document.getElementsByClassName(btnClass)[0];
        button.textContent = question.answers[i].text;
        button.value = question.answers[i].isTrue ? 1 : 0;
    }
    currentCount++;
}

function beginOfTest(){
    currentCount = 0;
    resultSum = 0;
    userSum = 0;
    document.getElementsByClassName('end_block')[0].style.display = 'none';
    document.getElementsByClassName('start_block')[0].style.display = 'block';
}

function endOfTest() {
    document.getElementsByClassName('question_block')[0].style.display = 'none';
    document.getElementsByClassName('end_block')[0].style.display = 'block';
    document.getElementsByClassName('test_result')[0].innerHTML = 'Ваш результат - '+ userSum + ' баллов из ' + currentCount;
}