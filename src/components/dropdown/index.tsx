import { useState } from "react";
import { TIMEFRAMES } from "./dropdown.constants";
import CustomSelect from "./select";
import styles from "./dropdown.module.scss"

const TimeFrameDropdown = () => {
    const [selectedTimeFrame, setSelectedTimeFrame] = useState("1 minute");

    const getShortHandValue = (selectedTimeFrame: string) => {
        const splittedText = selectedTimeFrame.split(" ")
        return splittedText[0]+splittedText[1][0]
    }

    return (
        <>
        <div>{getShortHandValue(selectedTimeFrame)}</div>
        <div className={styles.outerContainer}>
            {TIMEFRAMES.map(({ pattern, values }) => {
                return (
                    <div>
                        <CustomSelect
                            pattern={pattern}
                            values={values}
                            selectedTimeFrame={selectedTimeFrame}
                            setSelectedTimeFrame={setSelectedTimeFrame}
                        />
                    </div>
                );
            })}
        </div>
        </>
    );
};

export default TimeFrameDropdown;
