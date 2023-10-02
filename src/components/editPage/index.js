import Header from '../Header'
import './index.css'
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Projects from '../../mocks'
import Design2 from '../../images/Design2.avif'

const EditPage = () => {
const params = useParams();

const projectId = Projects.find((item) => {
    return item.id == params.id;
});

const navigate = useNavigate();
const [projectName, setName] = useState(projectId ? projectId.title : '');
const [projectUrl, setUrl] = useState(projectId ? projectId.url :  '' );
const [projectDesc, setDesc] = useState(projectId ? projectId.desc : '');


    const handleSave = (event) => {
        const Project = {
            id: projectId ? projectId.id : Projects.length + 1,
            title: projectName,
            url: projectUrl,
            desc: projectDesc,
            image: projectId ? projectId.image : Design2,
        }
        if (params.id === undefined){
            Projects.push(Project);
        } else {
            Projects[Number(params.id) - 1] = Project;
        }
           navigate("/")
    }

    const projectTitle = (event) =>{
        const title = event.target.value;
        setName(title);
    }

    const projectLink = (event) =>{
        const title = event.target.value;
        setUrl(title);
    }

    const projectSummary = (event) =>{
        const title = event.target.value;
        setDesc(title);
    }

    return(
        <div>
            <Header />
            <div className='editPage'>
                 <div className='editadd'>
                    {params.id === undefined ? 'ADD' : 'EDIT' }
                    <span> PROJECT</span> 
                </div>
                <img src = {projectId ? projectId.image : Design2} alt="placeholder"/>
                <input type='file'/>

                <input 
                onChange={projectTitle}
                value={projectName}
                type='text' 
                placeholder='PROJECT TITLE' />

                <input
                onChange={projectLink}
                value={projectUrl}
                 type='text' 
                 placeholder='PROJECT URL' />

                <textarea 
                onChange={projectSummary}
                value={projectDesc}
                id="text" 
                placeholder='PROJECT DESCRIPTION' 
                rows="4" cols="50">
                </textarea>
                <button onClick={handleSave}>Save</button>
            </div>
        </div>
    );
}

export default EditPage;