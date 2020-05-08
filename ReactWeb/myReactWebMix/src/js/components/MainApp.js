import React from "react";
import HookCounterOne from './HookCounterOne'
import HookCounterTwo from './HookCounterTwo'
import HookCounterThree from './HookCounterThree'
import HookCounterFour from './HookCounterFour'

function MainApp(){
    return(
        <div>
            <HookCounterOne />
            <HookCounterTwo />
            <HookCounterThree />
            <HookCounterFour />
        </div>
    )
}

export default MainApp