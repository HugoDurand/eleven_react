import React, { Component } from 'react';
import { PlaneteList } from './PlaneteList';
import { PlaneteForm } from './PlaneteForm';

export class Home extends Component {

  refreshPlanetsList = response => this.setState({ planetes: response.data })

  render() {
    return (
      <section>
        <PlaneteList />
        <PlaneteForm />
       </section>
    )


  }
}