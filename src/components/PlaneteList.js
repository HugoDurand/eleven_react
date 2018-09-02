import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { Client } from '../httpServices/Client';

import { Planete } from './Planete';

export class PlaneteList extends Component {

    constructor(props) {
        super(props);
        this.client = new Client('http://127.0.0.1:8000');
        this.state = {
          planetes: [],
          planete: {}
    }}

    componentDidMount() {
        this.getPlanetes()
      }

      
    getPlanetes() {
        this.client.getPlanetes()
          .then(this.refreshPlanetsList)
          .catch(error => {
            console.log(error);
          });
      }

    refreshPlanetsList = response => this.setState({ planetes: response.data })

    render() {
        return (
            <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>id</th>
                <th>nom</th>
                <th>ordre</th>
                <th>couleur</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
              {this.state && this.state.planetes && this.state.planetes.map(planete => <Planete key={planete.id} data={planete} />)}
              </tr>
            </tbody>
          </Table>
        )
    }

}