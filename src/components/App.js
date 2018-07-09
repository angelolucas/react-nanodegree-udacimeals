import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addRecipe, removeFromCalendar } from '../actions'

class App extends Component {
  render() {

    return (
      <div>

      </div>
    )
  }
}

function mapStateToProps ({ food, calendar }) {
  const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

  return {
    calendar: dayOrder.map((day) => ({
      day,
      meals: {...food[day]}
    })),
  }
}

function mapDispatchToProps(){
  return {
   selectRecipe: addRecipe,
   remove: removeFromCalendar
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
