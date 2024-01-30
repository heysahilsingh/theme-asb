import { aqiDataMeta } from "../utility";
import { ApiData } from "./Content";

type Props = {
    apiData: ApiData
}

const CompareAqi = (props: Props) => {

    const indoorData = props.apiData.indoorData;
    const outdoorData = props.apiData.outdoorData;

    const indoorAqi = Math.floor(indoorData.aqiValue > 0 ? indoorData.aqiValue : 1)
    const outdoorAqi = Math.floor(outdoorData.aqiValue > 0 ? outdoorData.aqiValue : 1);

    if (props.apiData.initialData) {
        return <div className="text-[2rem] animate-pulse">Fetching Fresh Data....</div>
    } else if (indoorAqi == outdoorAqi) {
        return (
            <p className='text-[2rem]'>Indoor AQI is as same as the nearest outdoor monitor at {outdoorData.locationname}, {outdoorData.cityname}</p>
        )
    } else if (indoorAqi < outdoorAqi) {
        const ratio = ((outdoorAqi - indoorAqi) / outdoorAqi) * 100;

        const aqiMeta = aqiDataMeta(indoorAqi);

        return (
            <p className='text-[2rem]'>Indoor AQI is <span className='text-[3rem]' style={{ color: aqiMeta.rangeColor }}>{(ratio).toFixed(1)}%</span> better than the nearest outdoor monitor at {outdoorData.locationname}, {outdoorData.cityname}</p>
        )
    } else {
        const ratio = ((indoorAqi - outdoorAqi) / indoorAqi) * 100;

        const aqiMeta = aqiDataMeta(outdoorAqi);

        return (
            <p className='text-[2rem]'>Outdoor AQI is <span className='text-[3rem]' style={{ color: aqiMeta.rangeColor }}>{(ratio).toFixed(1)}%</span> better than the indoor monitor at {indoorData.locationname}</p>
        )
    }
}

export default CompareAqi