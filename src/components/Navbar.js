const MenuItems = [
    {
        title: "Home",
        url:'#'

    },
    {
        title: "Shop",
        url: "#"
    },
    {
        title: "Explore",
        url: "#"
        
    }
]

function Navbar() {
    return(
        <div className="Nav">
            <h1 className="logo">Dogt</h1>
            <input type="search" placeholder="Search Dogt.com"/>
            <button>Sign In</button>
            {MenuItems.map((item, index) => {
                return(
                    <div>
                        
                        <div className="Menu-Nav">
                        <li key={index}><a className={item.cName} href={item.url}>{item.title}</a></li>
                        </div>
                    </div>
            )
            })}
        </div>)
}

export default Navbar;