import  "./index.css"
import { useNavigate } from "react-router-dom";
import second from '../../images/second.jpg'

    const Project = (props) => {
        const navigate = useNavigate();
    
        const handleDelete = () => {
            console.log('clicked delete');
        }

    return (
        <div>
            <div className= "project">
              <div className="inner-flip">
                <div className="front-flip">
                    <img src = {second} alt = "front" />
                </div>
                    <div className = "project-content">
                        <img src= {props.image} alt ="web design"/>
                        <p>TITLE: {props.title}</p>
                        <p>URL: <a href = {props.url}>{props.url}</a></p>
                        <p>DESCRIPTION:  {props.desc}</p>
                        <div className = 'btn'>
                            <button onClick={(event) => { navigate(`/edit/${props.id}`)}
                            }>EDIT</button>
                            <button onClick={handleDelete}>DELETE</button>
                        </div>
                    </div>
              </div>
            </div>
        </div>    
    );
    }

export default Project;