import React from 'react';
import styles from './BuildControls.css'
import BuildControl from '../BuildControls/BuildControl/BuildControl'

const controls = [
    { label: 'Lettuce', type: 'lettuce' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
]

const buildControls = (props) => (
    <div className={styles.BuildControls} >
    <p> Current Price: ${props.price.toFixed(2)} </p>
        {controls.map(ctrl => (
            <BuildControl
            key={ctrl.label} label={ctrl.label}
            added={() => props.ingredientAdded(ctrl.type)} 
            removed={() => props.ingredientRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
             />
        ))}
        <button className={styles.OrderButton} disabled={!props.purchaseable} >Checkout</button> 
    </div>
)



export default buildControls