const firstName = "John";
const lastName = "Doe";
const pi = 3.14;
console.log(`${firstName} ${lastName}`);
// // + Вивести 10 консоль.логів у консоль
for (let i = 0; i < 10; i++) {
    console.log(`Число з циклу for - ${i}`);
}
// + Вивести тільки парні
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(`Число з циклу for - ${i}`);
    }
}
console.log(this);
console.dir(document);
// Задача: створити невеличкий додаток, який може обчислити факторіал числаAdd commentMore actions
// Факторіал числа - добуток всіх цілих чисел від 1 до цього числа включно
// 5! = 1 * 2 * 3 * 4 * 5 = 120
const form = document.querySelector('#factorial-form');
const stepList = document.querySelector('#factorial-steps');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    // Очищаємо список перед виведенням нових результатів
    stepList.textContent = '';
    // Отримати введене число
    const numberInput = document.querySelector('#number');
    const number = Number(numberInput.value);
    // Обчисляємо факторіал та додавання кожної ітерації до списку
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
        const listItem = document.createElement('li');
        listItem.textContent = `${factorial}`;
        stepList.appendChild(listItem);
    }
});
