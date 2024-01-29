
type Props = {
    value: number
}

const AqiMeter = (props: Props) => {

    const value = props.value;
    // const value = 986;

    const calculatedAngle = Math.min(180, Math.floor(180 / 500 * value));

    const angle = props.value > 0 ? calculatedAngle : 2;

    console.log(angle)

    return (
        <div className="aqi-meter relative text-white">
            {/* <div className="info absolute bottom-0 left-2/4 -translate-x-2/4 flex flex-col text-right items-end justify-center">
                <span className="text-[1200%] leading-none font-black">{value}</span>
                <span className="text-[3rem] leading-none">AQI</span>
            </div> */}
            <div className="meter border border-transparent">
                <svg className="-rotate-[1deg] -mt-[6%] -mb-[11%] w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60">
                    <defs>
                        <mask id="m1">
                            <circle cx="50" cy="50" r="43" fill="none" stroke="white" strokeWidth="2" strokeDasharray="180" pathLength="360" strokeLinecap="round" transform="rotate(184 50 50)" />
                            <circle id="c1" cx="50" cy="50" r="43" fill="none" stroke="black" strokeWidth="8" strokeDasharray={`180 ${angle}`} pathLength="360" />
                        </mask>
                    </defs>
                    {/* Circle Track */}
                    <circle cx="50" cy="50" r="43" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="2" strokeDasharray="175 360" pathLength="360" strokeLinecap="round" transform="rotate(184 50 50)" />

                    {/* Till */}
                    <rect width="100" height="60" fill="white" mask="url(#m1)" />

                    {/* Till Line */}
                    <line id="l1" x1="-38" y1="0" x2="-48" y2="0" stroke="white" strokeWidth="0.7" transform={`translate(50 50) rotate(${angle})`} />

                    <text id="t1" x="50" y="42" textAnchor="middle" fill="white" className="text-[200%] font-black">{value}</text>

                    <text id="t1" x="50" y="49" textAnchor="middle" fill="white" className="text-[50%] font-medium">AQI</text>
                </svg>
            </div>
        </div>
    )
}

export default AqiMeter