import Logo from '../../assets/Logo/Logo';
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">

        <div className="foot-container-column">
          <h1>let’s build something impactful.</h1>
          <div className='div-column'>
            <div>
              <div>
                <a href="">Work↗︎</a>
              </div>
              <div className="">
                <a href="">About↗︎</a>
              </div>
              <div>
                <a href="">Resume↗︎</a>
              </div>
            </div>

            <div>
              <div>
                <a href="https://www.linkedin.com/in/richardsonsouza/" target='_blank'>Linkedin↗︎</a>
              </div>
              <div>
              <a href="mailto:richardsonphp@gmail.com">Email↗︎</a>
              </div>
              <div>
                <a href="https://github.com/Risxard" target='_blank'>Github↗︎</a>
              </div>
            </div>

          </div>


        </div>
        <Logo />
      </div>

    </footer>
  );
};

export default Footer;
