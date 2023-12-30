import "./Navbar.css"

const Navbar = ()=>{
    const design = (
        <ul>
            <li><a href="#"><img src="logo192.png" width="40" /></a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Images</a></li>
            <li><a href="#">Videos</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About us</a></li>
        </ul>
    );

    return design;
}

export default Navbar;