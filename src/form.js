import React, { Component } from 'react';
import './index.css'
class Lista extends React.Component {
    state = {
        edit: false,
        name: '',
        title: '',
        text: ''
    }
    handleCancelar() {
        this.setState({
            edit: false
        })
    }
    handleEditar() {

        this.setState({
            edit: true
        })
    }
    handleAceptar() {

        this.props.Add(this.state.title, this.state.text);
        this.setState({
            edit:false,
            title:'',
            text:''
        })
    }
    handleChange= (event) => {
        const name = event.target.name;
        this.setState(
            {
                [name]: event.currentTarget.value
            }
        );
    }
    render() {
        if (!this.state.edit) {
            return (
                <button type="button" className="btn btn-primary" onClick={() => this.handleEditar()}>Añadir tarea</button>
            )
        }

        return (
            <form>
                <div className="row">
                    <input type="text" value={this.state.title} onChange={this.handleChange} name="title" className="task-input" placeholder="Set a title for this task" />
                </div>
                <div className="row">
                    <input type="text" value={this.state.text} onChange={this.handleChange} name="text" className="task-input" ref={input => this.textInput = input} placeholder="Set a description for this task" />
                </div>
                <br></br>
                <button type="button" className="btn btn-success mr-2" onClick={() => this.handleAceptar()}>Aceptar</button>
                <button type="button" className="btn btn-danger" onClick={() => this.handleCancelar()}>Cancelar</button>

            </form>
        )

    }
}
export default Lista;