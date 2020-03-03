import React, { Component } from 'react';
import Tarea from "./tarea";
import Form from './form';
import './index.css'

class Lista extends Component {


    Add(title, text) {
        let number = this.s
        this.setState({
            idInicial: (this.state.id++)
        })
        console.log(this.state)
        let card = {
            id: this.state.id,
            title: title,
            text: text,
            type: this.state.type
        }
        let cards1 = this.state.cards.push(card)
        this.setState({
            cards:this.state.cards
        })
        console.log(this.state.cards)
        //const cards = this.state.cards.push(card)
        //this.setState({cards})
    }
    handleDelete(param){
        console.log("Deleting " + param);
        const cards = this.state.cards.filter(c => c.id !== param);
        this.setState({ cards });//Como tengo elementos que la clave y el error se repiten entonces puedo poner esto
    }
    handleAgregar = () => {

    }
    state = this.props.lista;

    render() {
        return (
            <div className="card border-white col-4 pr-0">
                <div className="card-header">{this.state.title}</div>
                <div className="card-body text-dark">

                    <div>
                        {this.state.cards.map(c => (
                            <Tarea handleDelete={(id) => this.handleDelete(id)} key={c.id} card={c} />
                        ))}
                    </div>
                    <Form Add={(title, text) => this.Add(title, text)} />
                </div>
            </div>

        );

    }
}
export default Lista;