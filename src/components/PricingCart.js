const goods = [
    {
        name: "Lenovo IdeaPad 231",
        price: "$20,000.000",
        url: '#',
        cName: 'products',
        image: 'C:\\Users\\programmer\\Desktop\\interview-1\\src\\images\\Laptop_101.jpg',
        desc: "This document contains the skills measured on the exams associated with this certification. It does not include any upcoming or recent changes that have been made to those skills. For more information about upcoming or recent changes, see the associated exam details page(s)."
    },
    {
        name: "HP Folio G345",
        price: "$13,000.000",
        url: '#',
        cName: 'products',
        image: 'C:\\Users\\programmer\\Desktop\\interview-1\\src\\images\\;lp 105.jpg',
        desc: "This document contains the skills measured on the exams associated with this certification. It does not include any upcoming or recent changes that have been made to those skills. For more information about upcoming or recent changes, see the associated exam details page(s)."
    },
    {
        name: "MacBook Pro",
        price: "50,000.000",
        url: '#',
        cName: 'products',
        image: 'C:\\Users\\programmer\\Desktop\\interview-1\\src\\images\\Lenovo thinkpad.webp',
        desc: "This document contains the skills measured on the exams associated with this certification. It does not include any upcoming or recent changes that have been made to those skills. For more information about upcoming or recent changes, see the associated exam details page(s)."

    },
    {
        name: "Chrome Book",
        price: "$25,000.000",
        url: '#',
        cName: 'products',
        image: 'C:\\Users\\programmer\\Desktop\\interview-1\\src\\images\\lp 102.webp',
        desc: "This document contains the skills measured on the exams associated with this certification. It does not include any upcoming or recent changes that have been made to those skills. For more information about upcoming or recent changes, see the associated exam details page(s)."

    },
    {
        name: "Acer Speed",
        price: "$30,000.000",
        url: '#',
        cName: 'products',
        image: 'C:\\Users\\programmer\\Desktop\\interview-1\\src\\images\\lp 104.jpg',
        desc: "This document contains the skills measured on the exams associated with this certification. It does not include any upcoming or recent changes that have been made to those skills. For more information about upcoming or recent changes, see the associated exam details page(s)."

    },
    {
        name: "Samsung Book",
        price: "$70,000.000",
        url: '#',
        cName: 'products',
        image: 'C:\\Users\\programmer\\Desktop\\interview-1\\src\\images\\lp 103.jpg',
        desc: "This document contains the skills measured on the exams associated with this certification. It does not include any upcoming or recent changes that have been made to those skills. For more information about upcoming or recent changes, see the associated exam details page(s)."

    }
]

function PricingCart() {
    return (
        <div>
            <h1 className="f-product">Featured Products</h1>
            <div className="cart">
            {goods.map((item, index) => {
                return(
                <div className="product-cart">
                
                        <li key={index}><a href={item.url} className={item.cName}>
                            <h2>{item.name}</h2></a>
                            <p>{item.desc}</p>
                            </li>
        
                </div>
            )
            })}
        </div>
        </div>)
}

export default PricingCart;