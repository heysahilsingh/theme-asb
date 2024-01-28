import cn from "../utility"
import aqiScale from "../assets/aqi-scale.svg"

type Props = {
    className?: string
}

const Footer = (props: Props) => {
    return (
        <footer className={cn(
            "footer",
            props.className
        )}>
            <div className="aqi-scale flex items-center justify-center">
                <img className="aspect-[1250/69] w-full lg:w-[60%]" src={aqiScale}></img>
            </div>
        </footer>
    )
}

export default Footer