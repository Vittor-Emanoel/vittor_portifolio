import { List } from 'phosphor-react'
import { useContext } from 'react'
import { GlobalContext } from '../../contexts/globalContext'
import { HeaderContainer, HeaderLogo, HeaderMenu } from './styles'

function Header() {
  const { handleMenu, isVisible } = useContext(GlobalContext)

  return (
    <HeaderContainer isVisible={isVisible}>
      <HeaderLogo>
        <p>
          <span>V</span>
          ittor
        </p>
      </HeaderLogo>

      <HeaderMenu onClick={handleMenu}>
        <List size={40} />
      </HeaderMenu>
    </HeaderContainer>
  )
}

export default Header
