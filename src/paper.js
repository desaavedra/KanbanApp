import React, { Component } from 'react';
import Lista from "./lista";
class Paper extends Component {
    state = {
        title: 'My Kanban App',
        lists: [
            {
                id: '1',
                title: 'To do',
                idInicial:1,
                type: 'primary',
                cards: [
                
                ]
            },
            {
                
                id: '2',
                type: 'warning',
                title: 'Doing',
                idInicial:1,
                cards: [
                   
                ]
            },
            {
                id: '3',
                title: 'Done',
                type: 'success',
                idInicial:1,
                cards: [
                    
                ]
            }
        ]
    }

    render() {
        console.log(this.state)
        return (
            <div className="container">
                <h1>{this.state.title}</h1>
                <div className="row">
                    {this.state.lists.map(l => (
                        <Lista lista={l} key={l.id} id={l.id} />
                    ))}
                </div>
            </div>
        )

    }

}
export default Paper;
