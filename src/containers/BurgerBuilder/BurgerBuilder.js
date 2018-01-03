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
            totalPrice: 0,
            purchaseable: false
      }
addIngredient = (type) => {
       const ingredientUpdate = {...this.state.ingredients}
       ingredientUpdate[type] += 1
       const updatedPrice = INGREDIENTS_PRICES[type] + this.state.totalPrice
      this.setState({totalPrice: updatedPrice, ingredients: ingredientUpdate})
      this.updatePurchaseState(ingredientUpdate)
      }

removeIngredient = (type) => {
      const ingredientUpdate = {...this.state.ingredients}
       ingredientUpdate[type] -= 1 
       const updatedPrice = this.state.totalPrice - INGREDIENTS_PRICES[type]
      this.setState({totalPrice: updatedPrice, ingredients: ingredientUpdate})
      this.updatePurchaseState(ingredientUpdate)
            
}


updatePurchaseState (ingredients) {
      let sum = Object.keys(ingredients).map(ingKeys => ingredients[ingKeys]).reduce((sum, el) => {
            return sum + el
      }, 0);
      return this.setState({purchaseable: sum > 0})
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
                  disabled={disabledInfo} price={this.state.totalPrice} purchaseable={this.state.purchaseable}  /> </div>
            </Auxiliary>
      )
   }
}

export default BurgerBuilder;