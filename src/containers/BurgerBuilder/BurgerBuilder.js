import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'


const INGREDIENTS_PRICES = {
      lettuce: 0.5,
      cheese: 0.4,
      meat: 1.3,
      bacon: 1
}
class BurgerBuilder extends Component {
      state = {
            ingredients: {
                  lettuce: 0,
                  meat: 0,
                  cheese: 0,
                  bacon: 0
            },
            totalPrice: 0
      }
addIngredient = (type) => {
       const ingredientUpdate = {...this.state.ingredients}
       ingredientUpdate[type] += 1
       const updatedPrice = INGREDIENTS_PRICES[type] + this.state.totalPrice
      this.setState({totalPrice: updatedPrice, ingredients: ingredientUpdate})
            }


removeIngredient = (type) => {
      if (this.state.ingredients[type] > 0){
      const ingredientUpdate = {...this.state.ingredients}
       ingredientUpdate[type] -= 1
       const updatedPrice = this.state.totalPrice - INGREDIENTS_PRICES[type]
      this.setState({totalPrice: updatedPrice, ingredients: ingredientUpdate})
}
}
   
 render() {
       const disabledInfo = {
             ...this.state.ingredients
            }
            for (let key in disabledInfo) {
                  disabledInfo[key] = disabledInfo[key] <= 0
            }
      return (
         <Auxiliary>
            <div> <Burger ingredients={this.state.ingredients} /> </div>
            <div> <BuildControls ingredientAdded={this.addIngredient} ingredientRemoved={this.removeIngredient}
                  disabled={disabledInfo} price={this.state.totalPrice}  /> </div>
            </Auxiliary>
      )
   }
}

export default BurgerBuilder;