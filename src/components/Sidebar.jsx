import Avatar from '../img/eu.jpg'

import "../styles/components/sidebar.sass"
import SocialNetworks from './SocialNetworks'

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Eduardo Ferreira"/>
      <p className="tittle">Desenvolvedor</p>
      <SocialNetworks />
      <p>informações de contato</p>
      <a href="" className="btn">Download Curriculo</a>
     </aside>
  )
}

export default Sidebar