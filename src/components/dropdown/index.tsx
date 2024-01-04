import { Dispatch, useState } from "react";
import { TIMEFRAMES } from "./dropdown.constants";
import CustomSelect from "./select";
import styles from "./dropdown.module.scss"
import { getShortHandValue } from "@/utils/candle";

interface TimeFrameProps {
    selectedTimeFrame: string;
    setSelectedTimeFrame: Dispatch<string>;
}

const TimeFrameDropdown = ({ selectedTimeFrame, setSelectedTimeFrame }: TimeFrameProps) => {
    const [showDropdown, setShowDropdown] = useState<boolean>(false)

    const handleDropdownVisibility = () => {
        setShowDropdown((prev) => !prev)
    }

    return (
        <>
            <div onClick={handleDropdownVisibility} className={styles.timeStampButton}>{getShortHandValue(selectedTimeFrame)}</div>
            <div className={`${styles.outerContainer} ${showDropdown ? '' : styles.hide}`}>
                {TIMEFRAMES.map(({ pattern, values }, index) => {
                    return (
                        <CustomSelect
                            key={index}
                            pattern={pattern}
                            values={values}
                            setSelectedTimeFrame={setSelectedTimeFrame}
                            handleDropdownVisibility={handleDropdownVisibility}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default TimeFrameDropdown;
