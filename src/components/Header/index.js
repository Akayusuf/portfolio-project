    import { useNavigate, useLocation } from "react-router-dom";
    import "./index.css"


    function Header (){
        const navigate = useNavigate();
        const location = useLocation();

        const hanleAdd = () => {
            navigate('/edit');
        }

        const hanleCancel = () => {
            navigate('/');
        }

        return (
            <div className = 'header'>
            <span>PORTFOLIO</span>
            {
                location.pathname === '/'
                ?<button onClick={hanleAdd}>Add Projects</button>
                :<button onClick={hanleCancel}>Cancel</button>
            }
            </div>
        );
    };

    export default Header;
