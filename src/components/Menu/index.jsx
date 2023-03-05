import { X } from 'phosphor-react'
import { useContext } from 'react'
import { GlobalContext } from '../../contexts/globalContext'
import { MenuContainer, MenuHeader } from './styles'

function MenuComponent() {
  const { handleMenu, isVisible } = useContext(GlobalContext)

  return (
    <MenuContainer isVisible={isVisible}>
      <MenuHeader onClick={handleMenu}>
        <X size={30} />
      </MenuHeader>

      <ul>
        <li>Projetos</li>
        <li>Conhecimentos</li>
        <li>Contato</li>
      </ul>
    </MenuContainer>
  )
}

export default MenuComponent
