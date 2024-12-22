function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <img className="logo" src="https://i.etsystatic.com/11979725/r/il/425b9a/1431687786/il_fullxfull.1431687786_w5a8.jpg">
                </img>
                <h2>Restaurant</h2>
            </div>
         <div className="header_middle">
            </div>
            <img className="logo" src="https://static.vecteezy.com/system/resources/previews/003/619/223/non_2x/search-bar-icon-logo-template-free-vector.jpg">
        <div className="header_right"></div>
            </img>
            <img className="logo" src="https://static.vecteezy.com/system/resources/previews/000/550/731/original/user-icon-vector.jpg"></img>
            <div className ="header_centre">
                <ul className ="header_lists"></ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Service</a></li>
                <div className ="header_CenterMenu">
                    <button>Menucard</button>
                    <div className ="dropdown_header">
                    <a href="#">Swiggy</a>
                    <a href="#">Zomato</a>

                    </div>

                </div>
            </div>

        </div>
        
    );
};

export default Header