import './index.css'
import css3 from '../../images/logo-css3.svg'
import html from '../../images/logo-html5.svg'
import node from '../../images/logo-nodejs.svg'
import react from '../../images/logo-react.svg'
import git from '../../images/logo-github.svg'
import twitter from '../../images/logo-twitter.svg'
import linkedin from '../../images/logo-linkedin.svg'
import facebook from '../../images/logo-facebook.svg'

const ProfilePage = () => {
    return(
        <div>
            <div className = 'container'>
                <div className="nav">
                    <h1 className="nav-name">AFOLABI.</h1>
                    <div className="logo">
                    <a href = 'https://github.com/Akayusuf' target='_blank'><img src={git} atl='logos' className='icon'/></a>
                    <a href = 'https://twitter.com/Akharyusuf1' target='_blank'><img src={twitter} atl='logos' className='icon' /></a>
                    <img src={linkedin} atl='logos' className='icon' />
                    <a href = 'https://facebook.com/Aka.yusuf.54' target='_blank'><img src={facebook} atl='logos' className='icon' /></a>
                    </div>
                </div>

                <div className="intro">
                    <div className="intro-name">
                        <p> My name is Afolabi.</p>
                        <p>Software Developer</p>
                    </div>
                </div>

                <div className="contacts">
                    <div className="design">
                        <p className="option"> Design For</p> 
                        <p>Web & Mobile</p>
                    </div>
                    <div classNames="design">
                        <p className="option"> Phone</p>
                        <p>+(234)7052169765</p>
                    </div>
                    <div className="design">
                        <p className="option"> Drop your Message</p>
                        <p><a href="mailto:akayusuf10@gmail.com">Akayusuf10@gmail.com</a></p>
                    </div>
                </div>
            </div>

            <div class="exp1">
                <h1 class="exp">My experties</h1>
                <div class="experties">
                    <div class="html">
                    <img src={html} alt="css" className='icon2' />
                        <p>HTML</p>
                    </div>
                    <div class="css">
                        <img src={css3} alt="css" className='icon2' />
                        <p>CSS</p>
                    </div>
                    <div class="js">
                    <img src={node} alt="css" className='icon2' />
                        <p>JAVASCRIPT</p>
                    </div>
                    <div class="react">
                    <img src={react} alt="css" className='icon2' />
                        <p>REACT</p>
                    </div>
                </div>
            </div>
        </div>
    )

};

     export default ProfilePage;