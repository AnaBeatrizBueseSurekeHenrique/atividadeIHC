import Slime from '../../assets/Slime.png'

function Produto(){
    return(
        <div>
            <h1>Conheça nosso mais novo produto: </h1>
            <img src={Slime} className='foto'/>
            <h3>O slime verde</h3>
        </div>
    );
}

export default Produto;