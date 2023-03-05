import ButtonComponent from '../Button'
import {
  PresentationContainer,
  PresentationSubtitle,
  PresentationTitle,
} from './styles'

function Presentation() {
  return (
    <PresentationContainer>
      <PresentationTitle>
        <p>Desenvolvedor</p>
        <span>Frontend</span>.
      </PresentationTitle>
      <PresentationSubtitle>
        <p>
          Apesar de ter o foco no frontend, sou generalista. Utilizo a Stack
          Javascript, com Node(Backend) & React (Frontend).
        </p>
      </PresentationSubtitle>

      <ButtonComponent />
    </PresentationContainer>
  )
}

export default Presentation
