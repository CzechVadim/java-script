const orderedQuantity = 6;
const pricePerDroid = 800;
const deliveryFee = 50;
const totalPrice = (orderedQuantity * pricePerDroid + deliveryFee);
const message = `Вы заказали дроидов на сумму ${totalPrice} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`


// 1. ОБЬЯВЛЕНИЕ И ВЫЗОВ ФУНКЦИИ

    // 1.1 Объявление функции sayHi
    function sayHi() {
        // Тело функции
        console.log('Привет, это моя первая функция!')
    }
    // 1.2 Вызов функции sayHi
    sayHi();


// 2. ПАРАМЕТРЫ И АРГУМЕНТЫ

    // 2.1 Объявление параметров a, b, c
    function add(a, b, c) {
        console.log(`Результат сложения равен ${a + b + c}`);
    }

    // 2.2 Передача аргументов
    add(15, 27, 10);
    add(10, 20, 30);
    add(5, 10, 15);


// 3. ВОЗВРАТ ЗНАЧЕНИЯ

    // 3.1 Объявление функции add(a, b, c)
    function add(a, b, c) {         
        // Оператор return завершает функцию и возвращает вычесленное значение в программу
        return a + b + c;
    }
    
    add(2, 5, 8);
    
    // 3.2 Выводит результат в консоль
    console.log(add(15, 27, 10));
    console.log(add(10, 20, 30));
    console.log(add(5, 10, 15));


// 4. ШАБЛОННЫЕ СТРОКИ 2.0

    function makeMessage (name, price) {
        const message = `Вы выбрали ${name}, цена за штуку ${price} кредитов`;
        return message;
    };


// 5. ОПЕРАТОРЫ СРАВНЕНИЯ >, >=, < и <=

function isAdult(age) {
    // Пиши код ниже этой строки
    const passed = 20 > 18;
  
    // Пиши код выше этой строки
    return passed;
  }