let money = prompt("Ваш бюджет на месяц"),
    time = prompt("Введите дату в формате YY-DD-MM");

let appData = {
    bugdet: money,
    expences: {},
    optionalExpences: {},
    income: [],
    timeData: time,
    savings: false
}

// for (let i = 0; i < 2; i++) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько это обойдется", '');

//     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
//         && a != '' && b !='' && a.length < 50) {
//         appData.expences[a] == b;
//         } else {
//         i--;
//         }
//     }

let i = 0;
// while(i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько это обойдется", '');

//     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
//         && a != '' && b !='' && a.length < 50) {
//         appData.expences[a] == b;
//         i++;
//     } else {
//         i--;
//     }
//     }

do {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько это обойдется", '');

    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b !='' && a.length < 50) {
        appData.expences[a] == b;
        i++;
        } else {
        i--;
        }
    }

   while (i < 2);


    
appData.moneyPerDay = appData.bugdet / 30;
alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Уровень достатка минимальный")
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Уровень достатка средний")  
} else if (appData.moneyPerDay > 2000) {
    console.log("Уровень достатка высокий")
} else {
    console.log("Произошла ошибка")
}