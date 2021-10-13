import React from 'react';
import crushPic from '../../assets/images/react-js-crushcourse-with-hitesh.jpg';
import classes from '../../styles/Video.module.css';

export default function Video() {
    return (
        <a href="quiz.html">
            <div className={classes.video}>
                <img src={crushPic} alt="React Crush Course" />
                <p>React JS Crush Course with Hitesh</p>
                <div className={classes.qmeta}>
                    <p>10 Questions</p>
                    <p>Score : Not taken yet</p>
                </div>
            </div>
        </a>
    );
}
