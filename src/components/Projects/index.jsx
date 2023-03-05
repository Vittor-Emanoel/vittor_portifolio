import { ProjectsBox, ProjectsContainer, ProjectsContent } from './styles'

function Projects() {
  return (
    <ProjectsContainer>
      <p>Projetos</p>

      <ProjectsContent>
        <ProjectsBox>
          <strong>CLUBSTORE</strong>
          <p>
            Site de vendas de roupas, ultilizando React, Typescript & Firebase
          </p>
          <a href="">Visualizar Projeto</a>
        </ProjectsBox>
      </ProjectsContent>
    </ProjectsContainer>
  )
}

export default Projects
