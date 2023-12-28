import { Dispatch, useState } from "react";
import { DROPDOWN_KEYS } from "./dropdown.constants";
import styles from './dropdown.module.scss'

interface CustomSelectProps {
    pattern: DROPDOWN_KEYS;
    values: string[];
    selectedTimeFrame: string;
    setSelectedTimeFrame: Dispatch<string>;
}

const CustomSelect = ({
    pattern,
    values,
    selectedTimeFrame,
    setSelectedTimeFrame,
}: CustomSelectProps) => {
    const [open, setOpen] = useState<boolean>(false);

    const handleTimeSelect = (value: string) => {
        setSelectedTimeFrame(value);
    };

    const toogleDropdown = () => {
        setOpen((prev) => !prev);
    };

    return (
        <div className={styles.dropdownContainer}>
            <div onClick={toogleDropdown}>{pattern}</div>
            {open &&
                values.map((time, index) => {
                    return <div key={index} onClick={() => handleTimeSelect(time)}>{time}</div>;
                })}
        </div>
    );
};

export default CustomSelect;
