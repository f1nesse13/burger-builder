import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'


class BurgerBuilder extends Component {
      state = {
            ingredients: {
                  lettuce: 1,
                  meat: 2,
                  cheese: 2,
                  bacon: 1,

            }
      }
   
 render() {
      return (
         <Auxiliary>
            <div> <Burger ingredients={this.state.ingredients} /> </div>

            <div> Controls </div>
            </Auxiliary>
      )
   }
}

export default BurgerBuilder;