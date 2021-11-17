import './style.scss'
import { Component } from 'react'

const listaDeProjetos = [
    {
        imagem: "https://i.imgur.com/CUCQi90.jpeg",        
        titulo: "Netflix",
        repositorio: "https://github.com/iaeluk/netflix-clone",
        site: "https://netflix-clone-iaeluk.netlify.app/"
    },
    {
        imagem: "https://i.imgur.com/nGd5WA1.jpeg",        
        titulo: "Lyrics",
        repositorio: "https://github.com/iaeluk/praticando--coisas--aleatorias/tree/main/Lyrics",
        site: "https://iaeluk.github.io/praticando--coisas--aleatorias/Lyrics"
    },
    {
        imagem: "https://i.imgur.com/JZXdBDq.jpeg",        
        titulo: "Calculadora",
        repositorio: "https://github.com/iaeluk/praticando--coisas--aleatorias/tree/main/calculadora",
        site: "https://iaeluk.github.io/praticando--coisas--aleatorias/calculadora/"
    },
    {
        imagem: "https://i.imgur.com/12gr64C.jpeg",        
        titulo: "FinanceYou",
        repositorio: "https://github.com/iaeluk/dev-finance",
        site: "https://dev-finance-iaeluk.vercel.app/"
    },
    {
        imagem: "https://i.imgur.com/8B5gDJt.jpeg",        
        titulo: "Starbucks",
        repositorio: "https://github.com/iaeluk/praticando--coisas--aleatorias/tree/main/starbucks-site",
        site: "https://iaeluk.github.io/praticando--coisas--aleatorias/starbucks-site/"
    }
]

  const projetos = []

  for (const [index, projeto] of listaDeProjetos.entries()) {

         projetos.push(
      
            <div id="portifolio" className="container--portifolio">
            <div className="container--img">
            <img src={projeto.imagem}/>
            </div>
            <h3>{projeto.titulo}</h3>
            <div className="url">
            <a title="Github" target="_blank" href={projeto.repositorio}><img className="github-icon" src="https://cdn1.iconfinder.com/data/icons/picons-social/57/github_rounded-512.png"/></a>
            <a title="Acessar site" target="_blank" href={projeto.site}> <img src="https://cdn4.iconfinder.com/data/icons/top-search-7/128/_web_Internet_network_www_communication_global_worldwide-512.png"/></a>
           </div>
            </div>
    )
  }


export default class Portifolio extends Component {

  render(){

      return (
        <>
         <h2 id="portifolio">Portifólio</h2>
        <div className="container">
          {projetos}
        </div>
        </>
      )
  }

}