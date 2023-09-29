import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <img src="https://content.codecademy.com/courses/freelance-1/unit-4/img-tea-cozy-logo.png?_gl=1*osql55*_ga*NzEyNjk3MjY2LjE2OTQwMzYzMjE.*_ga_3LRZM6TM9L*MTY5NjAwOTAzNS43LjEuMTY5NjAwOTA3Mi4yMy4wLjA." alt="tea cozy logo" className='logo'/>
            <nav className='nav'>
                <a href="#mission" className='link'>Our Mission</a>
                <a href="#tom" className='link'>Featured Tea</a>
                <a href="#locations" className='link'>Locations</a>
            </nav>
        </div>
    )
}

export default Header 