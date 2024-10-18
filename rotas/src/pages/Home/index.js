import { Link } from "react-router-dom";
import Estilo from '../../assets/estilo.css'
function Home(){
    return(
        <div className="Home">
            <h1>Bem-vindo à página HOME.</h1>
            <Link to='/sobre'>Sobre</Link>
            <Link to='/contato'>Contato</Link>
        </div>
    );
}

export default Home;