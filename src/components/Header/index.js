import './style.scss'
import { Component } from 'react'


export default class Header extends Component {

  render(){
      return (
          <>
        <nav>
           <div>
           <img id="logo" src="https://i.imgur.com/4vrTRZB.jpeg" />
           </div>
            <ul>
                <li><a href="#sobre">Sobre mim</a></li>
                <li><a href="#portifolio">Portifólio</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </nav>
        </>
      )
  }

}