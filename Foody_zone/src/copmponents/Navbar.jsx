
function Navbar({ search, filterFood }) {

    const filterBtns = [
        {
            name: "All",
            type: "all",
        },
        {
            name: "Breakfast",
            type: "breakfast",
        },
        {
            name: "Lunch",
            type: "lunch",
        },
        {
            name: "Dinner",
            type: "dinner",
        },
    ];

    return (
        <div className="navbar">
            <nav>
                <div className="container">
                    <div className="logo">
                        <img src="/images/Foody Zone.svg" alt="" />
                    </div>
                    <div className="search">
                        <input onChange={search} placeholder="Search Food..." />
                    </div>
                </div>
                <div className="buttons">
                    {filterBtns.map((value) => (
                        <button
                            key={value.name}
                            onClick={() => filterFood(value.type)}
                        >
                            {value.name}
                        </button>
                    ))}
                </div>
            </nav>
        </div>
    )
}

export default Navbar


