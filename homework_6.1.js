function checkProbabilityTheory(count) {

    let evenCounter = 0;
    let oddCounter = 0;

    // Рандомне число від 100 до 1000
    for (let i = 0; i < count; i++) {
        
        let randomNum = Math.floor(Math.random() * 901) + 100;

        // Отримання парних/непарних чисел
        if (randomNum % 2 === 0) {
            evenCounter++;
        } else {
            oddCounter++;
        } 
    }

    // Отримання % парних/непарних чисел
    let evenPercent = (evenCounter / count) * 100;
    let oddPercent = (oddCounter / count) * 100;
    
    return {
        total: count,
        even: evenCounter,
        odd: oddCounter,
        evenPercent: evenPercent.toFixed(2) + '%',        
        oddPercent: oddPercent.toFixed(2) + '%',
        difference: Math.abs(evenPercent - 50).toFixed(2)
    }
}

const result = checkProbabilityTheory(250);
console.log(`Кількість згенерованих чисел: ${result.total}`);
console.log(`Кількість парних чисел: ${result.even}`);
console.log(`Кількість непарних чисел: ${result.odd}`);
console.log(`Відсоток парних чисел: ${result.evenPercent}`);
console.log(`Відсоток непарних чисел: ${result.oddPercent}`);
console.log(`Співвідношення парних до непарних чисел: ${result.difference}%`);