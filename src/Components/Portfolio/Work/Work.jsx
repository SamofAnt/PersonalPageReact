import React from 'react';
import classes from './Work.module.css'

class Work extends React.Component{
    constructor(props) {
        super(props);
        this.nameWork= props.NameWork;
        this.workInfo = props.WorkInfo;
        this.link = props.Link;
    }

    render() {
        return(
            <div>
                <h3>{this.nameWork}</h3>
                <p>{this.workInfo}</p>
                <a className={classes.button}   target="_blank" href={this.link}>Открыть страницу</a>
            </div>
        );
    }
}
export default Work;