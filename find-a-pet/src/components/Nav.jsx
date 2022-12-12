import { NavLink } from 'react-router-dom'


const Nav = ({ authenticated, user, handleLogOut }) => {
    let userOptions;
    if (user) {
        userOptions = (
            <header className = 'nav-container'>
                <span id = 'nav-banner'>
                    <marquee> 
                        <h4 id='nav-banner-text'>Thank you {user.userName} for checking out my website! Help us help you... These pets need to be reunited</h4>
                    </marquee>
                </span>
                <div id='nav-content'>
                    <NavLink to ={`/`}>
                        <img src="/images/Find_A_Pet-logo2.png" alt="website logo" className='logo'/>
                    </NavLink>
                <nav className="nav-text" id='menu_box'>
                    <NavLink to='/' className='nav-link'>Home</NavLink>
                    <NavLink to='/listing' className='nav-link'>Lost Ones</NavLink>
                    <NavLink to='/about_us' className='nav-link'>About Us</NavLink>
                    <NavLink onClick={handleLogOut} to='/login' className='nav-link'>Log Out</NavLink>
                </nav>
                </div>
            </header>
        );
    }

    const globalOptions = (
        <nav>
            <NavLink to='/login' className='login-link'></NavLink>
        </nav>
    );


    return (

          <div id='links-container'>
            {authenticated && user ? userOptions : globalOptions}
          </div>
        
    );
};

export default Nav;
