import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Client } from '../httpServices/Client';

export class Planete extends Component {

    constructor(props) {
        super(props);
        this.client = new Client('http://127.0.0.1:8000');
        this.state = {
            id: null, nom: null, ordre: null, couleur: null
        };
    }

    render() {
        let { id, nom, ordre, couleur } = this.props.data;
        return (
            <tr>
                <td></td>
                <td>{id}</td>
                <td>{nom}</td>
                <td>{ordre}</td>
                <td>{couleur}</td>
                <td><Link to={`/planete/${id}`} >Detail</Link></td>
            </tr>
        )
    }

}