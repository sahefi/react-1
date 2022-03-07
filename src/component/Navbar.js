import React from "react"
import {Link} from "react-router-dom"
class Navbar extends React.Component{
    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar navbar-dark bg-primary">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse  justify-content-center" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link" href="http://localhost:3000/bmi">Hitung BMI</a>
                            <a class="nav-link" href="http://localhost:3000/utang">Nyicil Utang</a>
                            <a class="nav-link" href="http://localhost:3000">Home</a>
                            <a class="nav-link" href="http://localhost:3000/bayar">Hitung Bayar</a>
                            <a class="nav-link" href="http://localhost:3000/konversi">Konversi Bilangan</a>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
export default Navbar;
