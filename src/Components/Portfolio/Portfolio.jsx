import React from 'react';
import classes from './Portfolio.module.css'
import Work from "./Work/Work";

class Portfolio extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <section className={classes.portfolio}>
                <div className={classes.container}>
                    <h2 className={classes.subheading}>Мои работы</h2>
                    <Work NameWork="Первое веб-приложение на ASP.Net Core" WorkInfo="Первый опыт работы с ASP.Net Core и Blazor." Link="https://github.com/SamofAnt/LiveStore"/>
                    <Work NameWork="Первое использование ORM" WorkInfo="Первый опыт работы с Entity Framework Core" Link="https://github.com/SamofAnt/TravelAgency"/>
                </div>
            </section>
        );
    }
}

export default Portfolio;