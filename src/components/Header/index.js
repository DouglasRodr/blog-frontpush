/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from '../../svg/logo.svg';

const Header = () => {
    return (
        <>
            <header className="flex-space-between">
                <div className="logo">
                    <img src={logo} alt="Logo"/>
                </div>
                <div className="search">
                    <input type="text" name="search" className="input-search"></input>
                </div>
                <ul className="menu">
                    <li><a href="#" className="nav-link">Categories</a></li>
                    <li><a href="#" className="nav-link">About</a></li>
                    <li><a href="#" className="nav-link">Contact</a></li>
                </ul>
            </header>
        </>
    );
}

export default Header;