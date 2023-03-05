import Header from '../../components/Header'
import { LayoutContainer } from './styles'

import Presentation from '../../components/Presentation'
import Projects from '../../components/Projects'
import { GlobalStyle } from '../../styles/global'

function Wrapper() {
  return (
    <LayoutContainer>
      <GlobalStyle />
      <Header />
      <Presentation />
      <Projects />
    </LayoutContainer>
  )
}

export default Wrapper
