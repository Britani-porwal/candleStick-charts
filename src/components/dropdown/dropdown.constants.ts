export enum DROPDOWN_KEYS {
    MINUTES = "MINUTES",
    HOURS = "HOURS",
    DAYS = "DAYS",
}

export const TIMEFRAMES = [
    {
        pattern: DROPDOWN_KEYS.MINUTES,
        values: ["1 minute", "5 minutes", "15 minutes", "30 minutes"]
    },
    {
        pattern: DROPDOWN_KEYS.HOURS,
        values: ["1 hour", "3 hours", "4 hours", "6 hours", "12 hours"]
    },
    {
        pattern: DROPDOWN_KEYS.DAYS,
        values: ["1 day", "1 week", "1 month"]
    }
]

