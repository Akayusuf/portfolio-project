import  "./index.css"
import Avatar from '../images/design.avif'
    const Portfolio = (props) => {
    return (
        <div>
            <div className= "project">
                <div className = "project-content">
                 <img src= {Avatar} alt ="web design"/>
                    <p><strong>TITLE:</strong> {props.title}</p>
                    <p><strong>URL:</strong>   <a href = 'https://www.google.com'>{props.url}</a></p>
                    <p><strong>DESCRIPTION:</strong>  {props.desc}</p>
                    <div className = 'btn'>
                    <button>EDIT</button>
                    <button>DELETE</button>
                </div>
                </div>
            </div>
        </div>    
    );
    }

export default Portfolio;