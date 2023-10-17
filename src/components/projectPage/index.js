import Header from '../Header'
import Project from '../Project'
import projects from '../../mocks'
import './index.css'
import ProfilePage from '../ProfilePage'

const ProjectPage = () => {
    return (
        <div>
            <ProfilePage />
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