import Header from '../Header'
import Portfolio from '../Portfolio'
import projects from '../../mocks'
import './index.css'

const ProjectPage = () => {
    return (
        <div>
            <Header />

             <div className="projectPage">{projects.map((index) => {
                    return(
                        <Portfolio
                            key = {index}
                            image = {index.image}
                            title = {index.title}
                            url = {index.url}
                            desc = {index.desc}
                        />
                    )
                })

                }

            </div>

         </div>
    )
    }    

export default ProjectPage;