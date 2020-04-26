import React , { Component} from 'react'
import { FaGithub } from 'react-icons/fa'
import {Link} from 'react-router-dom'

export default class Main extends Component {
    render(){
        return(
        <React.Fragment>
           <section className="section-main">
                <section className="welcome-section">
                   <h2 style={{color:'#764abc'}}>DRUGOC</h2>
                   <p>Drug Oversight and Controle, le nouvel outil connecté <br></br>conçu pour la pharmacovigilance en Algérie. </p>
                   <Link to="/log-in">
                        <button className="main-log-in">Se connecter</button>
                    </Link>
                    <Link to="/sign-up">
                        <button className="main-sign-up">S'inscrire</button>
                    </Link>
               </section>
               <section className="img-section">
                   <img src='../../undraw_medical_care_movn.svg' alt="Medical Care" height="400" width="400" title="undraw_medical_care_movn"/>
               </section>
           </section>
               <footer>
               Pour plus de détails, jetez un oeil sur la documentation en cliquant ici
                   <a href="http://selamasalem.me/DRUGOC-Documentation/" rel="opener">
                   <FaGithub 
                   style={{marginLeft:"5px" ,color:"black"}}
                   />
                   </a>
               </footer>
        </React.Fragment>
        )
    }
}