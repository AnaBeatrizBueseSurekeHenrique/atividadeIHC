import { Link } from "react-router-dom";

function Sobre(){
    return(
        <div>
            <h1>Bem-vindo à página SOBRE.</h1>
            <Link to='/contato'>Contato</Link>
            <Link to='/'>Home</Link>
        </div>
    );
}

export default Sobre;