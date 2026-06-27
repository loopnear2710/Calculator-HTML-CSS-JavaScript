#  Calculator (HTML + CSS + JavaScript)

Простой, но функциональный калькулятор, созданный с использованием **HTML**, **CSS** и **Vanilla JavaScript**.  
Проект реализует базовые математические операции и имитирует поведение классического калькулятора.

---

##  Демонстрация

> Калькулятор поддерживает:
- Сложение ➕
- Вычитание ➖
- Умножение ✖️
- Деление ➗
- Десятичные числа
- Очистку (AC)
- Непрерывные вычисления

---

##  Интерфейс

Калькулятор имеет современный минималистичный дизайн:

- Темный дисплей
- Кнопки с hover-эффектами
- Цветовое разделение операторов и результата

---

## Технологии

- HTML5
- CSS3 (Grid Layout, Flexbox)
- JavaScript (ES6+)
- DOM Manipulation
- Dataset API

---

## Структура проекта

Calculator-HTML-CSS-Java…
│
├── css/
│   └── styles.css
│
├── js/
│   └── script.js
│
├── index.html
└── README.md

---

## ⚙️ Как работает

Логика калькулятора построена на обработке событий кнопок:

- Числа добавляются в дисплей
- Операторы сохраняются в `dataset`
- Вычисления выполняются через функцию `calculate()`
- Поддерживается цепочка операций
- Реализована защита от деления на 0

---

 ## Как запустить 

1. Клонируйте репозиторий

   git clone https://github.com/loopnear2710/MyCalculator.git

2. Перейдите в папку проекта

cd ИМЯ РЕПОЗИТОРИЯ 

3. Откройте файл index.html в любом современном браузере.

Для удобной разработки рекомендуется использовать расширение Live Server в Visual Studio Code.

---

##Deployment 

Проект доступен по ссылке:

https://my-repository-sable-rho.vercel.app/

##  Основная логика

```js
function calculate(n1, operator, n2) {
    const first = parseFloat(n1);
    const second = parseFloat(n2);

    if (operator === 'add') return first + second;
    if (operator === 'subtract') return first - second;
    if (operator === 'multiply') return first * second;
    if (operator === 'divide') return second === 0 ? 'Error' : first / second;
}
