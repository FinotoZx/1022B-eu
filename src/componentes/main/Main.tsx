import Estudante from '../estudante/Estudante'
import "./Main.css"

function Main(){
    return(
    <main>
        <Estudante 
            nome= "Guilherme Finoto"
            imagem='https://github.com/FinotoZx.png'
            descricao='Estudante do IFMS'
            githubLink='https://github.com/FinotoZx'

        />
    </main>
    )
}
export default Main