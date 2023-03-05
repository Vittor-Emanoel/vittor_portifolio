import Header from '../../components/Header'
import { LayoutContainer } from './styles'

import { GlobalStyle } from '../../styles/global'

function Wrapper() {
  return (
    <LayoutContainer>
      <GlobalStyle />
      <Header />
    </LayoutContainer>
  )
}

export default Wrapper
