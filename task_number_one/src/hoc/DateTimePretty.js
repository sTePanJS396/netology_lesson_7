import React from 'react'

const DateTimePretty = (Conponent) => {
    const presentYear = new Date().getTime(); // сегодняшний по счету год с 01.01.1970
    const pastSecunds = (a, b) => (Math.round((a - b) / 1000)); // вычисление прошедших секунд
    const pastMinuts = (a, b) => (Math.round((a - b) / 60000)); // вычисление прошедших минут
    const pastHours = (a, b) => (Math.round((a - b) / 3_600_000)); // вычисление прошедших часов
    const pastDays = (a, b) => (Math.round((a - b) / 86_400_000)); // вычисление прошедших суток
    const pastMonths = (a, b) => (Math.round((a- b) / 2_628_000_000)); // вычисление прошедших месяцев
    const pastYears = (a, b) => (Math.round((a - b) / 31_540_000_000)); // вычисление прошедших годов
    return function (props) {
        let newDate = '';
        function dateСalculation() {
            if (pastSecunds(presentYear, new Date(props.date).getTime()) <= 60) {
                newDate = `${pastSecunds(presentYear, new Date(props.date).getTime())} секунд назад...`
            }

            if (pastMinuts(presentYear, new Date(props.date).getTime()) <= 60) {
                newDate = `${pastMinuts(presentYear, new Date(props.date).getTime())} минут назад...`
            }

            if (pastHours(presentYear, new Date(props.date).getTime()) <= 60) {
                newDate = `${pastHours(presentYear, new Date(props.date).getTime())} часов назад...`
            }

            if (pastDays(presentYear, new Date(props.date).getTime()) <= 30) {
                newDate = `${pastDays(presentYear, new Date(props.date).getTime())} дней назад...`
            }

            if (pastMonths(presentYear, new Date(props.date).getTime()) <= 12) {
               newDate = `${pastMonths(presentYear, new Date(props.date).getTime())} месяцев назад...`
            }

            if (pastYears(presentYear, new Date(props.date).getTime()) > 1) {
                newDate = `${pastYears(presentYear, new Date(props.date).getTime())} лет назад...`
            }
            return newDate
        }
        return <Conponent {...props} date={dateСalculation()}/>
    }
}

export default DateTimePretty

/*
Можно было использовать библиотеку "moment.js", но не стал делать этого потому, что:
1. Там есть подобная функция, но вывод там на аглийском языке, а техническое задание требует вывод на русском языке.
2. Работа с датой, можно сказать - самое частое, с чем встречается Frontend-разроботчик в своей работе (тавтология, но что поделать :) ),
поэтому работать с датой надо уметь.
3. Мне было интересно попробовать реализовать подобное, как, например, у ВКонтакте, где обозначение последнего посещения пользователя выводится
в минутах.
*/