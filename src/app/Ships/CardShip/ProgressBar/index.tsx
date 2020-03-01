import React from 'react';
import './index.css';
import { ProgressBarProps } from './types';

function ProgressBar({ value }: ProgressBarProps): JSX.Element {
    const width = isNaN(value) ? 0 : `${(value / 6) * 100}%`;
    const backgroundColor = width ? 'whitesmoke' : 'lightgrey';
    return (
        <div className="progress-bar--container" style={{ backgroundColor }}>
            <div className="progress-bar" style={{ width }} />
        </div>
    );
}

export default ProgressBar;
