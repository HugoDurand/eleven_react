import React, { Component } from 'react';
import { Client } from '../httpServices/Client';

export class PlaneteForm extends Component {

    constructor(props) {
        super(props);
        this.client = new Client('http://127.0.0.1:8000');
        this.state = {
            nom: '',
            couleur: '',
            ordre: 1,
          };
        this.handleChange = this.handleChange.bind(this);
      }


      postPlanete = event => {

        event.preventDefault();
        
        const planete = {
          nom : this.state.nom,
          couleur: this.state.couleur,
          ordre: this.state.ordre
        }
        console.log(planete)
  
        this.client.createPlanete(planete)
        .then(response => {
          console.log(response)
          window.location.reload();
        })
        .catch(error => {
          console.log(error);
        });
    }


    handleChange (event) {
        this.setState({ [event.target.name]: event.target.value });
      }


    render() {
        return (
           <form onSubmit={this.postPlanete}>
              <label htmlFor="">
             nom planete : 
              <input type="text" name="nom" onChange={this.handleChange}/>
              </label>

               <label htmlFor="">
              couleur planete : 
              <input type="text" name="couleur" onChange={this.handleChange}/>
              </label>

              <label htmlFor="">
              ordre planete : 
              <input type="text" name="ordre" onChange={this.handleChange}/>
              </label>
              <button type="submit">Add</button>
            </form>
        )
    }

}