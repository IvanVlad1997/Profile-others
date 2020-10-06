import React from 'react'

const ComponentProba1 = (props) => {
    const RenderButton = () => {
       return  <button className="btn btn-primary" onClick={(event) => console.log(event.screenX)}>Hello</button>
    }
  
    return (
        <div>
            <RenderButton />
            Hello
        </div>
    )
}

export default ComponentProba1
