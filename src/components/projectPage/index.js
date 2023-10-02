import Header from '../Header'
import Project from '../Project'
import projects from '../../mocks'
import './index.css'

const ProjectPage = () => {
    return (
        <div>
            <Header />

             <div className="projectPage">{projects.map((index) => {
                    return(
                        <Project
                            key = {index}
                            id = {index.id}
                            title = {index.title}
                            url = {index.url}
                            desc = {index.desc}
                            image = {index.image}
                        />
                    )
                })

                }

            </div>

         </div>
    )
    }    

export default ProjectPage;