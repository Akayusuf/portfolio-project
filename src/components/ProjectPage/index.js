import design from "../../images/design.avif"
import design2 from "../../images/design2.avif"
import  "./index.css"
function Project (){
return (
    <div className= "project">
        <div className = "project-content">
            <img src= {design} alt ="web design"/>
            <span><strong>TITLE:</strong> Resturant Design </span>
            <span><strong>URL:</strong> <a href="www.google.com" target = "_blank"> www.resturant.com</a> </span>
            <span> <strong>DESCRIPTION</strong>: A simple website of a Startup website which offers a lot of good delicacies.</span>
        </div>

        <div className = "project-content">
            <img src= {design2} alt ="web design"/>
            <span><strong>TITLE:</strong> Gym Design </span>
            <span><strong>URL:</strong> <a href="www.google.com" target = "_blank"> www.getstrong.com</a> </span>
            <span> <strong>DESCRIPTION</strong>: A simple web design of a gym where you can get strong physically in no time.</span>
        </div>
    </div>
);
};

export default Project;