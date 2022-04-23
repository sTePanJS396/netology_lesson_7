import './App.css';
import React from 'react';
import YearTable from './components/YearTable';
import SortTable from './components/SortTable';
import MonthTable from './components/MonthTable';

export default class App extends React.Component {
    state = {
      list: []
    };

    componentDidMount() {
      try {
        fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hoc/aggregation/data/data.json')
        .then(res => res.json()).then(res => this.setState({ list: res.list }))
      } catch (error) {
        alert('Произошла ошибка!');
        console.log(error)
      }
    }

    render() {
        const {list} = this.state;
        return (
            <div id="app">
                <MonthTable list={list} />
                <YearTable list={list} />
                <SortTable list={list} />
            </div>
        );
    }
}