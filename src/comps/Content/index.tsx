import cn from '../../utility'
import AqiInfoCard from '../AqiInfoCard'

type Props = {
    className?: string
}

const Content = (props: Props) => {
    return (
        <main className={cn(
            "content grid gap-[3rem] sm:grid-cols-2 grid-rows-[1fr_1fr_auto_auto] sm:grid-rows-[1fr_auto_auto]",
            props.className
        )}>
            {/* Card Indoor */}
            <div className="indoor">
                <AqiInfoCard />
            </div>

            {/* Card Outdoor */}
            <div className="outdoor">
                <AqiInfoCard />
            </div>

            {/* Comparison */}
            <div className="comparison bg-[#F3F4F6] rounded-[2rem] h-fit col-span-full text-center text-[#677580] font-bold p-[1.5rem]">
                <p className='text-[2rem]'>Indoor AQI is <span className='text-[3rem]'>2x</span> better than the nearest outdoor monitor at US Consulate, Mumbai</p>
            </div>

            {/* Last Updated */}
            <div className="last-updated text-center text-[#27AAE0] text-[1.7rem] col-span-full">
                <p>Last Update: <span className='font-semibold'>Today, 10:12:16 AM</span></p>
            </div>
        </main>
    )
}

export default Content