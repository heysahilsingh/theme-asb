import { useState, useEffect } from 'react';

type Props = {
    value: number;
};

const AqiMeter = (props: Props) => {
    const [animatedAngle, setAnimatedAngle] = useState(2);

    useEffect(() => {
        const targetAngle = Math.min(180, Math.floor(180 / 500 * props.value));

        // Animate from the current angle to the target angle
        const animationDuration = 500; // in milliseconds
        const startTime = Date.now();

        const animate = () => {
            const elapsedTime = Date.now() - startTime;
            const percentageComplete = Math.min(1, elapsedTime / animationDuration);

            const updatedAngle = animatedAngle + (targetAngle - animatedAngle) * percentageComplete;
            setAnimatedAngle(updatedAngle);

            if (percentageComplete < 1) {
                requestAnimationFrame(animate);
            }
        };

        animate();
        // eslint-disable-next-line
    }, [props.value]);

    return (
        <div className="aqi-meter relative text-white">
            <div className="meter border border-transparent">
                <svg className="-rotate-[1deg] -mt-[6%] -mb-[11%] w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60">
                    <defs>
                        <mask id={`m1_${animatedAngle}`}>
                            <circle cx="50" cy="50" r="43" fill="none" stroke="white" strokeWidth="2" strokeDasharray="180" pathLength="360" strokeLinecap="round" transform="rotate(184 50 50)" />
                            <circle cx="50" cy="50" r="43" fill="none" stroke="black" strokeWidth="8" strokeDasharray={`180 ${animatedAngle}`} pathLength="360" />
                        </mask>
                    </defs>
                    {/* Circle Track */}
                    <circle cx="50" cy="50" r="43" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="2" strokeDasharray="175 360" pathLength="360" strokeLinecap="round" transform="rotate(184 50 50)" />

                    {/* Till */}
                    <rect width="100" height="60" fill="white" mask={`url(#m1_${animatedAngle})`} />

                    {/* Till Line */}
                    <line id={"l1"} x1="-38" y1="0" x2="-48" y2="0" stroke="white" strokeWidth="0.7" transform={`translate(50 50) rotate(${animatedAngle})`} />

                    <text x="50" y="42" textAnchor="middle" fill="white" className="text-[200%] font-black">{props.value}</text>

                    <text x="50" y="49" textAnchor="middle" fill="white" className="text-[50%] font-medium">AQI</text>
                </svg>
            </div>
        </div>
    );
};

export default AqiMeter;
