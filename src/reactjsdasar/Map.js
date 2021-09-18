import React from 'react'
//rafc

const Makanans = [
    {
        nama: 'Soto',
        harga: 15000
    },
    {
        nama: 'Bakso',
        harga: 13000
    },
    {
        nama: 'Nasi Goreng',
        harga: 10000
    },
    {
        nama: 'Mie Ayam',
        harga: 18000
    },
]

//const
const total_bayar = Makanans.reduce((total_harga,makanan)=>{
    return total_harga+makanan.harga;
}, 0);

const Map = () => {
    return (
        <div>
            <h2>Map</h2>
            <ul>
                {Makanans.map((makanan, index) => (
                    <li>{index+1}. {makanan.nama} - {makanan.harga}</li>
                ))}
            </ul>

            <h2>Makanan yang harganya diatas Rp. 10.000</h2>
            <ul>{Makanans
                .filter((makanan) => makanan.harga > 10000)
                .map((makanan,index) => (
                    <li>{index+1}. {makanan.nama}-{makanan.harga}</li>
                ))}
            </ul>

            <h3>Total harga: {total_bayar}</h3>

        </div>
    )
}

export default Map