import React, {useState} from 'react'

function HookCounterOne(){
    const [like,setLike]=useState(0)

    return(
        <div>
            <button onClick={()=>setLike(like+1)}>Like {like}</button>
        </div>
    )
}

export default HookCounterOne
