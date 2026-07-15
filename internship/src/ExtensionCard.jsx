import { useState } from "react"

function ExtensionCard({logo, name, description, isActive}){
    const [Active, setIsActive] = useState(isActive)
    return (
        <div className="DevLens">
            <img src={logo} alt=""></img>
            <div>
                <h4>{name}</h4>
                <p>{description}</p>
            </div>
            <button className="Remove">Remove</button>
            <button className="Remove" onClick={() => setIsActive(!Active)}>
                {Active ? "Active" : "Inactive"}
            </button>
        </div>
    )
}

export default ExtensionCard