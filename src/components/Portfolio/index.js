import  "./index.css"
import Avatar from '../images/design.avif'
import { useNavigate } from "react-router-dom";

    const Portfolio = (props) => {
        const navigate = useNavigate();

        const handleEdit = () => {
            navigate ('/edit');
        }

        const handleDelete = () => {
            console.log('clicked delete');
        }

    return (
        <div>
            <div className= "project">
                <div className = "project-content">
                 <img src= {Avatar} alt ="web design"/>
                    <p>TITLE: {props.title}</p>
                    <p>URL:   <a href = 'https://www.google.com'>{props.url}</a></p>
                    <p>DESCRIPTION:  {props.desc}</p>
                    <div className = 'btn'>
                    <button onClick={handleEdit}>EDIT</button>
                    <button onClick={handleDelete}>DELETE</button>
                </div>
                </div>
            </div>
        </div>    
    );
    }

export default Portfolio;