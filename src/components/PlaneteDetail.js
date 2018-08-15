import React, { Component } from 'react';
import { Client } from '../httpServices/Client';

export class PlaneteDetail extends Component {

  constructor(props) {
    super(props);
    this.client = new Client('http://127.0.0.1:8000');
    this.state = {
      planet: null
    };
  }

  componentDidMount() {
    this.getPlanete(this.props.match.params.id)
  }

  getPlanete(id) {
    this.client.getPlaneteDetail(id)
      .then((response) => {
        this.setState({ planet: response.data })
      })
      .catch(error => {
        console.log(error);
      });
  }

  deletePlanete() {
    this.client.deletePlanete(this.state.planet.id)
      .then(response => {
        this.props.history.push('/')
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        {this.state && this.state.planet &&
          <div>
            <p>{this.state.planet.id}</p>
            <p>{this.state.planet.nom}</p>
            <p>{this.state.planet.ordre}</p>
            <p>{this.state.planet.couleur}</p>
            <p><button className="btn btn-default" onClick={this.deletePlanete.bind(this)}>Delete</button></p>
          </div>
        }
      </div>
    )
  }
}