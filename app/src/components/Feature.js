import React from 'react';
import Chip from 'material-ui/Chip';

const styles = {
    container: {
        marginBottom: '30px'
    },
    title: {
        margin: '10px'
    },
    button: {
        display: 'inline-block',
        margin: '5px'
    },
    clicked: {
        backgroundColor: 'rgb(0, 188, 212)'
    }
}

const Feature = ({ parentIndex, text, children, toggleButton }) => (
    <div style={styles.container}>
        <p style={styles.title}>
            {text}
        </p>
        <div>
            {children.map((obj, idx) => (
                <Chip
                    key={`Chip_${idx}`}
                    style={obj.clicked ? {...styles.button, ...styles.clicked} : styles.button}
                    onTouchTap={()=> toggleButton(parentIndex, idx)}
                >
                    {obj.name}
                </Chip>
            ))}
        </div>
    </div>
);

export default Feature;