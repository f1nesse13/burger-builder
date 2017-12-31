import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import styles from './Burger.css'

const Burger = (props) => {
   return (
      <div className={styles.Burger}> 
         <BurgerIngredient type='bread-top' />
         <BurgerIngredient type='bread-bottom' />
      </div>
   )
}