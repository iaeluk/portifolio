import './style.scss'
import { Component } from 'react'


export default class Footer extends Component {

  render(){
      return (
          <div className="footer">
          <div id="contato">
           <a target="_blank" href="https://github.com/iaeluk"><img src="https://cdn1.iconfinder.com/data/icons/picons-social/57/github_rounded-512.png" /></a>
           <a href="mailto:lucas21rio@gmail.com"><img id="email-icon" src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_email-512.png" /></a>
          </div>
          </div>
      )
  }

}
