import { TIMEFRAMES } from "./dropdown.constants"

const TimeFrameDropdown = () => {
    return( 
    <div>
        {TIMEFRAMES.map(({pattern , values}) => {
            return (<div></div>)
        })}
    </div>)
}

export default TimeFrameDropdown