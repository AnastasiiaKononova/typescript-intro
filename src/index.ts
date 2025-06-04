const firstName: string = "John";
const lastName: string = "Doe";

const pi: number = 3.14;

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

const form = document.querySelector('#factorial-form') as HTMLFormElement;
const stepList = document.querySelector('#factorial-steps') as HTMLOListElement;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    // Очищаємо список перед виведенням нових результатів
    stepList.textContent = '';

    // Отримати введене число
    const numberInput = document.querySelector('#number') as HTMLInputElement;
    const number: number = Number(numberInput.value);

    // Обчисляємо факторіал та додавання кожної ітерації до списку
    let factorial: number = 1;
    for(let i = 1; i <= number; i++) {
        factorial *= i;

        const listItem: HTMLLIElement = document.createElement('li');
        listItem.textContent = `${factorial}`;
        stepList.appendChild(listItem);
    }
});