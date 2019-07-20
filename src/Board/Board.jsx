import React from 'react';
import './Board.css'
import pieChartIcon from './img/pieChart.svg';
import barChartIcon from './img/barChart.svg';
import barChartIcon2 from './img/barChart2.svg';

export default class Board extends React.Component {
    render() {
        return(
            <div className="Board">
                <header className="Board-Header"></header>
                <nav className="Board-Navbar">
                    <button className="Board-Navbar-Button"><img className="Board-Navbar-Button-Image" src={pieChartIcon} alt="Pie chart"/></button>
                    <button className="Board-Navbar-Button"><img className="Board-Navbar-Button-Image" src={barChartIcon} alt="First bar chart"/></button>
                    <button className="Board-Navbar-Button"><img className="Board-Navbar-Button-Image" src={barChartIcon2} alt="Second bar chart"/></button>
                </nav>
                <div className="Board-ChartContaier"></div>
                <footer className="Board-Footer"></footer>
            </div>
        );
    }
}