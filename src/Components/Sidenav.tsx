import React from 'react'
import resumo from '../Assets/icons/resumo.svg'
import configuracoes from '../Assets/icons/configuracoes.svg'
import contato from '../Assets/icons/contato.svg'
import sair from '../Assets/icons/sair.svg'
import vendas from '../Assets/icons/vendas.svg'
import webhooks from '../Assets/icons/webhooks.svg'
import { NavLink } from 'react-router-dom'
import FintechSVG from '../Assets/FintechSVG'

const Sidenav = () => {
  return (
    <nav className='box bg-3 sidenav'>
      <FintechSVG title='Fintech logo' />
      <ul>
        <li>
          <span>
            <img src={resumo} alt="" />
          </span>
          <NavLink to='/'>Resumo</NavLink>
        </li>
        <li>
          <span>
            <img src={vendas} alt="" />
          </span>
          <NavLink to='/'>Vendas</NavLink>
        </li>
        <li>
          <span>
            <img src={webhooks} alt="" />
          </span>
          <a>Webhooks</a>
        </li>
        <li>
          <span>
            <img src={configuracoes} alt="" />
          </span>
          <a>Configurações</a>
        </li>
        <li>
          <span>
            <img src={contato} alt="" />
          </span>
          <a>Contato</a>
        </li>
        <li>
          <span>
            <img src={sair} alt="" />
          </span>
          <a>Sair</a>
        </li>
      </ul>
    </nav>
  )
}

export default Sidenav