import React, {useState} from 'react'

function HookCounterTwo(){
    const initialUpVotes=0
    const [upVotes,setUpVotes]=useState(initialUpVotes)

    return(
        <div>
            UpVotes: {upVotes} 
            <button onClick={()=>setUpVotes(initialUpVotes)}>Reset</button>
            <button onClick={()=>setUpVotes(previousUpVotes=>previousUpVotes+1)}>Increment</button>
            <button onClick={()=>setUpVotes(previousUpVotes=>previousUpVotes-1)}>Decrement</button>
        </div>
    )
}

export default HookCounterTwo
