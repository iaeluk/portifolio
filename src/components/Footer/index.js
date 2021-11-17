import './style.scss'
import { Component } from 'react'


export default class Footer extends Component {

  render(){
      return (
          <div className="footer">
          <div id="contato">
           <a target="_blank" href="https://github.com/iaeluk"><img src="https://cdn1.iconfinder.com/data/icons/picons-social/57/github_rounded-512.png" /></a>
           <a href="mailto:lucas21rio@gmail.com"><img id="email-icon" src="https://cdn-icons.flaticon.com/png/512/3178/premium/3178158.png?token=exp=1637111020~hmac=6056adc8fec8426d8c0ebc0d9f1f0d61" /></a>
          </div>
          </div>
      )
  }

}
