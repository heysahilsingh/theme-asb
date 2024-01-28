import cn from "../utility"

type Props = {
    className?: string
}

const AqiInfoCard = (props: Props) => {
    return (
        <div className={cn(
            "aqi-info-card bg-red-400 h-full w-full rounded-[4rem] overflow-hidden",
            props.className
        )}>AqiInfoCard</div>
    )
}

export default AqiInfoCard