import { clsx, ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import goodRange from "../assets/range-good.svg"
import moderateRange from "../assets/range-moderate.svg"
import poorRange from "../assets/range-poor.svg"
import unhealthyRange from "../assets/range-unhealthy.svg"
import severeRange from "../assets/range-severe.svg"
import hazardousRange from "../assets/range-hazardous.svg"


export const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs))
}
type AqiDataMeta = {
    sensorName: string
    value: number
    rangeModelImg: string
    rangeColor: string
    rangeName: string
}

export const aqiDataMeta = (value: number): AqiDataMeta => {

    if (value <= 50) {
        return {
            sensorName: "Aqi",
            value: value,
            rangeModelImg: goodRange,
            rangeColor: "#59b61f",
            rangeName: "Good"
        }
    } else if (value >= 50 && value <= 100) {
        return {
            sensorName: "Aqi",
            value: value,
            rangeModelImg: moderateRange,
            rangeColor: "#EEC732",
            rangeName: "Moderate"
        }
    } else if (value >= 100 && value <= 200) {
        return {
            sensorName: "Aqi",
            value: value,
            rangeModelImg: poorRange,
            rangeColor: "#ea8c34",
            rangeName: "Poor"
        }
    } else if (value >= 200 && value <= 300) {
        return {
            sensorName: "Aqi",
            value: value,
            rangeModelImg: unhealthyRange,
            rangeColor: "#E95478",
            rangeName: "Unhealthy"
        }
    } else if (value >= 300 && value <= 400) {
        return {
            sensorName: "Aqi",
            value: value,
            rangeModelImg: severeRange,
            rangeColor: "#b33fba",
            rangeName: "Severe"
        }
    } else {
        return {
            sensorName: "Aqi",
            value: value,
            rangeModelImg: hazardousRange,
            rangeColor: "#C92033",
            rangeName: "Hazardous"
        }
    }

}