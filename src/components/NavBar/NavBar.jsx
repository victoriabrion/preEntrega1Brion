import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h1>Vinyl Store</h1>
            <div>
                <button>Home</button>
                <button>Shop by artist</button>
                <button>Shop by category</button>
                <button>Help</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar