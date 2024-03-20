import './Main.css'
function Main(){
    return(
        <main>
            <div className="box-estudante">
                <img src="https://github.com/guilhermeterenciani.png" alt="Foto Estudante"/>
                <h3 className="nome-estudante">
                    Guilherme Figueiredo Terenciani
                </h3>
                <p className="descricao-estudante">
                    Professor do IFMS nas matérias de 
                    Desenvolvimento / Desenvolvimento Web
                </p>
                <a href="https://github.com/guilhermeterenciani">
                    GitHub
                </a>
            </div>
        </main>
    )
}
export default Main