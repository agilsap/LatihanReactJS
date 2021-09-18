import React, { Component } from 'react'
//rcc
export default class Operan extends Component {

    // gantimakanan(makanan_baru){
    //     this.setState({
    //         makanan:makanan_baru
    //     })
    // }

    render() {
        const {makanan,gantimakanan} = this.props
        return (
            <div>
                <h2> Operan State yang menjadi Props: {makanan}</h2>
                <button onClick={() => gantimakanan('Soto')}>Ganti Makanan</button>
            </div>
        )
    }
}
