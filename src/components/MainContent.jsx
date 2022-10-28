import AboutContainer from './AboutContainer'
import ProjectsContainer from './ProjectsContainer'
import TecnlogiesContainer from './TecnlogiesContainer'

import '../styles/components/maincontent.sass'
 
const MainContent = () => {
  return (
    <main id='main-content'>
      <AboutContainer />
      <TecnlogiesContainer />
      <ProjectsContainer />
    </main>
  )
}

export default MainContent