import React, { Component } from 'react'
import Operan from './Operan';

//pake rcc
export default class StateProps extends Component {
    constructor(props){
        super(props);
        this.state = {
            makanan : 'Bakso'
        }
    }

gantimakanan = (makanan_baru)=>{
    this.setState({
        makanan:makanan_baru
    })
}

    render() {
        return (
            <div>
                <h2>{this.state.makanan}</h2>
                <button onClick={() => this.gantimakanan('Soto')}>Ganti Makanan</button>
                <Operan makanan={this.state.makanan}gantimakanan={this.gantimakanan}/>
            </div>
        )
    }
}

