function List({filter, setFilter}){
    return (
        <div className="List">
          <h1 className = "Extensions_List">
            Extensions List
          </h1>
          <div className="Buttons_List">
            <button className={filter === "all" ? "FilterButtons" : "Buttons"} onClick={() => setFilter("all")}>All</button>
            <button className={filter === "active" ? "FilterButtons" : "Buttons"} onClick={() => setFilter("active")}>Active</button>
            <button className={filter === "inactive" ? "FilterButtons" : "Buttons"} onClick={() => setFilter("inactive")}>Inactive</button>
          </div>
        </div>
    )
}

export default List;