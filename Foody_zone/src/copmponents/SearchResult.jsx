
const SearchResult = ({ data }) => {
    // console.log(data)
    return (
        <>
<div className="main">
          <div className="nav2">
            <div className="fooditems">
                {data?.map(({name,image,text,price})=>(
                    <div className="fooditem">
                        <div className="food_image">
                            <img src={image} />
                        </div>
                        <div className="food_info">
                            <div className="info">
                                <h3>{name}</h3>
                                <p>{text}</p>
                            </div>
                            <button>${price.toFixed(2)}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
          </div>
        </div>
            
        </>
    )
}

export default SearchResult;
