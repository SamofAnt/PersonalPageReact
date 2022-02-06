import React from 'react';
import classes from './Skills.module.css'

class Skills extends React.Component{
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <div className={classes.skills}>
               
                <h3>Мои навыки</h3>
                <dl className={classes.skillsList}>
                    <dt className={classes.skillCsharp}>C#</dt>
                    <dd className={classes.level}>
                        <div className={classes.levelSharp}>60%</div>
                    </dd>
                    <dt className={classes.skillHtml}>HTML</dt>
                    <dd className={classes.level}>
                        <div className={classes.levelHtml}>20%</div>
                    </dd>
                    <dt className={classes.skillCss}>CSS</dt>
                    <dd className={classes.level}>
                        <div className={classes.levelCss}>20%</div>
                    </dd>
                </dl>
            </div>
        );
    }
}

export default Skills;