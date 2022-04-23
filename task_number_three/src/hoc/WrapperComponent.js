import React from 'react'

const WrapperComponent = (Component) => {
    function getMounts(str) {
        const month = ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Des']
        return month[new Date(str).getMonth()]
    }

    function getYear(str) {
        return new Date(str).getFullYear();
    }

    return function (props) {
        switch (Component.name) {
            case 'MonthTable':
                return <Component {...props} list={props.list.map(el => ({month: getMounts(el.date), amount: el.amount}))}/>
            case 'SortTable':
                return <Component {...props}/>
            case 'YearTable':
                return <Component {...props} list={props.list.map(el => ({year: getYear(el.date), amount: el.amount}))}/>

            default:
                return <Component {...props}/>
        }
    }
}

export default WrapperComponent