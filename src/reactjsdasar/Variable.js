import React from 'react'

// const harga = 3000; const tidak bisa diubah

// var harga= 20000; var dapat diubah secara global
// if(true){
//     var harga =30000;
// }

let harga=20000; //let tidak dapat diubah di dalam scope tetapi jika di scopenya letnya diapus dapat diubah. disarankan pake let

if(true){
    let harga =30000;
}


const Variable = () => {
    return (
        <div>
            <h2>Harga : {harga}</h2>
        </div>
    )
}
export default Variable
