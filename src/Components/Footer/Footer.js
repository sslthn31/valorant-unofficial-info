import { Link } from 'react-router-dom';


const Footer = () => {
    return(
        <div className="footer-container">
            <div className="footer">
                <div className="first-footer">
                    <h4>Valorant-unofficial-info</h4>
                    <p>A Place Where You Can Find About Valorant</p>
                </div>
                <div className="second-footer">
                    <h4>List-Menu</h4>
                    <Link to='./agents' className='button-link'>
                        <a>Agents Page</a>
                    </Link>
                    <Link to='./tiers' className='button-link'>
                        <a>Tiers Page</a>
                    </Link>
                    <Link to='./bundles' className='button-link'>
                        <a>Bundles Page</a>
                    </Link>
                </div>
                <div className="third-footer">
                    <h4>Our Social Media</h4>
                    <ul>
                        <li><a href="#">INSTAGRAM</a></li>
                        <li><a href="#">YOUTUBE</a></li>
                        <li><a href="#">FACEBOOK</a></li>
                        <li><a href="#">TWITTER</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;