import { cn } from "../utility"
import asbLogo from ".././assets/asb-logo.jpg"
import aqiLogo from ".././assets/powered-by-aqi.svg"

type Props = {
    className?: string
}

const Header = (props: Props) => {
    return (
        <header className={cn(
            "header grid gap-x-[4rem] gap-y-[2rem] grid-cols-2 md:grid-cols-[auto_auto_1fr_auto] items-center",
            props.className
        )}>
            {/* ASB Logo */}
            <i className="asb-logo w-fit">
                <img className="aspect-[334/96] w-[20rem]" src={asbLogo} alt="American School of Bombay Logo"></img>
            </i>

            {/* Divider */}
            <div className="divider max-md:col-span-full opacity-20 h-full">
                <div className="divider max-md:hidden h-full w-[0.3rem] min-h-[2px]" style={{ background: "linear-gradient(180deg, rgba(190, 190, 190, 0.18) 0.72%, #635E5E 45.95%, rgba(190, 190, 190, 0.18) 98.74%)" }}></div>
                <div className="divider md:hidden h-[2px] w-full" style={{ background: "linear-gradient(270deg, rgba(190, 190, 190, 0.18) 0.72%, #635E5E 45.95%, rgba(190, 190, 190, 0.18) 98.74%)" }}></div>
            </div>

            {/* Text */}
            <p className="max-md:col-span-full text-[#2D3140] text-[2.4rem] font-black max-md:text-center">American School of Bombay</p>

            {/* AQI Logo */}
            <i className="aqi-logo w-fit max-md:col-start-2 max-md:row-start-1 justify-self-end">
                <img className="aspect-[283.55/64.89] w-[20rem]" src={aqiLogo} alt="Powered by Aqi.in" />
            </i>
        </header>
    )
}

export default Header