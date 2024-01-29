import { useEffect, useState } from 'react'
import { cn } from '../utility'
import AqiInfoCard from './AqiInfoCard'
import CompareAqi from './CompareAqi'

type Props = {
    className?: string
}

export type ApiData = {
    indoorData: {
        locationname: string
        cityname: string
        aqiValue: number
    }
    outdoorData: {
        locationname: string
        cityname: string
        aqiValue: number
    }
    lastUpdatedAt: Date
}

type ApiCallResponseLocation = {
    cityname: string
    id: string
    locationname: string
    realtime: {
        sensorid: string
        sensorname: string
        sensorvalue: number
        unit: string
    }[]
}

type ApiCallResponse = {
    status: 0 | 1
    message: string
    data: {
        GroupName: string
        Groupid: number
        IndoorData: [ApiCallResponseLocation, ApiCallResponseLocation]
        OutdoorData: ApiCallResponseLocation
    }[]
}

const Content = (props: Props) => {

    const [apiData, setApiData] = useState<ApiData>({
        indoorData: {
            locationname: "Elementary Campus",
            cityname: "Mumbai",
            aqiValue: 0
        },
        outdoorData: {
            locationname: "US Consulate",
            cityname: "Mumbai",
            aqiValue: 0
        },
        lastUpdatedAt: new Date()
    });

    useEffect(() => {

        // Get Query
        const queryString = window.location.search;

        // Create a URLSearchParams object from the query string
        const urlParams = new URLSearchParams(queryString);

        // Get the value of the 'campus' parameter
        const campusParam = urlParams.get('campus');

        // Set campus
        const campus = campusParam?.toLowerCase() == "secondary" ? 0 : 1;

        // Fetch Function
        const fetchData = async () => {
            try {
                const apiCall = await fetch("https://secure.aqi.in/api/v1/getasbindiadeviceavgdata");

                // If apiCall fetch failed
                if (!apiCall.ok) {
                    throw new Error(`HTTP error! Status: ${apiCall.status}`);
                }

                // Convert response
                const response: ApiCallResponse = await apiCall.json();

                // If data available
                if (response.data.length > 0) {
                    const data = response.data[0];

                    const indoorData = data.IndoorData[campus || 0];
                    const outDoorData = data.OutdoorData;

                    setApiData(prev => {
                        return {
                            indoorData: {
                                ...prev.indoorData,
                                locationname: indoorData.locationname,
                                aqiValue: indoorData.realtime.find(sensor => sensor.sensorname == "AQI-IN")?.sensorvalue || 0
                            },
                            outdoorData: {
                                ...prev.outdoorData,
                                aqiValue: outDoorData.realtime.find(sensor => sensor.sensorname == "AQI-IN")?.sensorvalue || 0
                            },
                            lastUpdatedAt: new Date()
                        }
                    })
                }

                // If data not available
                else {
                    throw new Error(`No data: ${response.message}`);
                }

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        // Initial fetch
        fetchData();

        // Set up interval for subsequent fetches every 10 seconds
        // const intervalId = setInterval(fetchData, 10000);

        // Cleanup the interval on component unmount
        // return () => clearInterval(intervalId);

    }, [])

    return (
        <main className={cn(
            "content grid items-center gap-[3rem] md:grid-cols-2 grid-rows-[1fr_1fr_auto_auto] md:grid-rows-[1fr_auto_auto]",
            props.className
        )}>
            {/* Card Indoor */}
            <div className="indoor h-full flex items-center">
                <AqiInfoCard
                    locationType='indoor'
                    location={`${apiData.indoorData.locationname} AQI`}
                    aqiValue={apiData.indoorData.aqiValue}
                />
            </div>

            {/* Card Outdoor */}
            <div className="outdoor h-full flex items-center">
                <AqiInfoCard
                    locationType='outdoor'
                    location={`${apiData.outdoorData.locationname}, ${apiData.outdoorData.cityname}`}
                    aqiValue={apiData.outdoorData.aqiValue}
                />
            </div>

            {/* Comparison */}
            <div className="comparison bg-[#F3F4F6] rounded-[2rem] h-fit col-span-full text-center text-[#677580] font-bold p-[1.5rem]">
                <CompareAqi apiData={apiData} />
            </div>

            {/* Last Updated */}
            <div className="last-updated text-center text-[#27AAE0] text-[1.7rem] col-span-full">
                <p>Last Update: <span className='font-semibold'>Today, 10:12:16 AM</span></p>
            </div>
        </main>
    )
}

export default Content