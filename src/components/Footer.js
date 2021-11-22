import './Footer.css'

const NavFoot = [
{
    title: "About",
    sub: "Reach Us",
    sub2: "Report",
    sub3: "Privacy Policy",
    url: '#'
},
{
    title: "Support",
    sub: "FAQ",
    sub2: "Submit Request",
    sub3: "Help Foundations",
    url: '#'
},
{
    title: "Explore",
    sub: "Shop",
    sub2: "Sell",
    sub3: "Re-Use",
    url: '#'
}
] 

function Footer() {
    return (
        <div>
            <div className="footer">
                {NavFoot.map((item, index) => {
                    return(
                        <div className="footer-ground">
                    <li key={index}>
                        <a href={item.url}>
                            <h3>{item.title}</h3>
                            <p>{item.sub}</p>
                            <p>{item.sub2}</p>
                            <p>{item.sub3}</p>
                        </a>
                    </li>
                    </div>
                                ) })}

                <div className="others-footer">
                        <input type="search" placeholder="Search Dogt.com"/>
                        <p>© Copyright 2021 DOGT. All Rights Reserved.</p>
                </div> 
                
            </div>

        </div>)
}

export default Footer;