import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { Planete } from './Planete';
import { Client } from '../httpServices/Client';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.client = new Client('http://127.0.0.1:8000');
    this.state = {
      planetes: [],
      planete: {}
    };
    this.handleChangeNom = this.handleChangeNom.bind(this);
    this.handleChangeCouleur = this.handleChangeCouleur.bind(this);
    this.handleChangeOrdre = this.handleChangeOrdre.bind(this);
  }

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

  postPlanete = event => {
      event.preventDefault();
      console.log('click');
      const planete = {
        nom : this.state.nom,
        couleur: this.state.couleur,
        ordre: this.state.ordre
      }
      console.log(this.state.planete)

      this.client.createPlanete(this.state.planete)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleChangeNom = event => {
  this.setState({
    planete: {
          ...this.state.planete,
          nom: event.target.value
}})
  
  }

  handleChangeOrdre = event => {
    this.setState({
      planete: {
            ...this.state.planete,
            ordre: event.target.value
  }})
    
    }

    handleChangeCouleur = event => {
      this.setState({
        planete: {
              ...this.state.planete,
              couleur: event.target.value
    }})
      
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
        <tr>
          <td>
            <form onSubmit={this.postPlanete}>
              <label htmlFor="">
             nom planete : 
              <input type="text" name="nom" onChange={this.handleChangeNom}/>
              </label>

               <label htmlFor="">
              couleur planete : 
              <input type="text" name="couleur" onChange={this.handleChangeCouleur}/>
              </label>

              <label htmlFor="">
              ordre planete : 
              <input type="text" name="ordre" onChange={this.handleChangeOrdre}/>
              </label>
              <button type="submit">Add</button>
            </form>
          </td>
        </tr>
        </tbody>
      </Table>
    )


  }
}