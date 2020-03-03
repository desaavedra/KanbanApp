import React, { Component } from 'react';
import './index.css'
class Tarea extends Component {

    //state=this.props.card
    state = this.props.card
    handleEliminar(){
        this.props.handleDelete(this.state.id);
    }
    render() {
        return (
            <div>
                <div className={`card border-${this.state.type} mb-3`}>
                    <div className={`card-body text-${this.state.type}`} >
                        <h5 className="card-title">{this.state.title}</h5>
                        <p className="card-text">{this.state.text}</p>
                        <button type="button" className="btn btn-danger" onClick={() => this.handleEliminar()}>Eliminar</button>
                    </div>
                </div>
            </div>
        )
    }


}
export default Tarea;