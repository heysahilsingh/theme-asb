import { aqiDataMeta, cn } from "../utility"
import cardBg from "../assets/aqi-card-bg.svg"
import AqiMeter from "./AqiMeter"

type Props = {
    className?: string
    locationType: "indoor" | "outdoor"
    location: string
    aqiValue: number
    isLoading?: boolean
}

const AqiInfoCard = (props: Props) => {

    const valueDataMeta = aqiDataMeta(props.aqiValue || 0);

    return (
        <div
            className={cn(
                "aqi-card min-h-[40rem] w-full h-full flex flex-col items-center justify-center gap-[2rem]",
                props.className
            )}
        >
            <div className="location flex gap-[1rem] items-center line-clamp-1 justify-center text-[2.4rem] text-[#2D3140] font-bold">
                <i className="relative">
                    {props.locationType == "indoor"
                        ?
                        (
                            <svg className="aspect-[33/29] w-[2.5rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 29" fill="none">
                                <rect x="1.16" y="1.16" width="30.5467" height="26.68" rx="3.48" stroke="currentColor" strokeWidth="2.32" />
                                <rect x="1.16012" y="16.6263" width="30.5467" height="11.2133" rx="3.48" stroke="currentColor" strokeWidth="2.32" />
                                <circle cx="9.27993" cy="9.27956" r="3.48" fill="currentColor" />
                                <circle cx="17.7866" cy="21.6533" r="2.32" fill="currentColor" />
                            </svg>
                        )
                        :
                        (
                            <svg className="aspect-[27/35] w-[2.3rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 35" fill="none">
                                <g clipPath="url(#clip0_379_44744)">
                                    <path d="M13.4496 34.6053C13.278 34.6103 13.1074 34.5785 12.9491 34.512C12.7909 34.4456 12.6487 34.346 12.5322 34.22C12.0551 33.6695 0.000244141 20.6055 0.000244141 13.4496C0.000244141 9.88261 1.41723 6.46172 3.93947 3.93947C6.46172 1.41723 9.88261 0.000244141 13.4496 0.000244141C17.0166 0.000244141 20.4375 1.41723 22.9597 3.93947C25.482 6.46172 26.899 9.88261 26.899 13.4496C26.899 20.6055 14.8441 33.6328 14.3303 34.22C14.2187 34.3422 14.0826 34.4397 13.9309 34.5061C13.7791 34.5725 13.6152 34.6063 13.4496 34.6053ZM13.4496 2.40388C10.5335 2.41596 7.74037 3.57971 5.67839 5.64169C3.61641 7.70367 2.45265 10.4969 2.44058 13.4129C2.44058 18.1651 9.77993 27.3577 13.4496 31.5686C17.2019 27.3577 24.4586 18.1651 24.4586 13.4129C24.4466 10.4969 23.2828 7.70367 21.2208 5.64169C19.1588 3.57971 16.3657 2.41596 13.4496 2.40388Z" fill="#2D3140" />
                                    <path d="M13.4493 18.9188C12.2517 18.9188 11.081 18.5637 10.0853 17.8983C9.08956 17.233 8.31348 16.2873 7.8552 15.1809C7.39691 14.0745 7.277 12.8571 7.51063 11.6825C7.74427 10.508 8.32095 9.4291 9.16775 8.5823C10.0145 7.7355 11.0934 7.15882 12.268 6.92519C13.4425 6.69155 14.66 6.81146 15.7664 7.26975C16.8728 7.72803 17.8184 8.50411 18.4838 9.49985C19.1491 10.4956 19.5042 11.6662 19.5042 12.8638C19.5018 14.4689 18.8631 16.0076 17.7281 17.1426C16.5931 18.2776 15.0544 18.9163 13.4493 18.9188ZM13.4493 9.21248C12.7235 9.21248 12.014 9.4277 11.4105 9.83093C10.807 10.2342 10.3367 10.8073 10.0589 11.4778C9.78117 12.1484 9.7085 12.8862 9.85009 13.5981C9.99169 14.3099 10.3412 14.9638 10.8544 15.477C11.3676 15.9902 12.0215 16.3397 12.7333 16.4813C13.4452 16.6229 14.183 16.5502 14.8536 16.2725C15.5241 15.9947 16.0972 15.5244 16.5005 14.9209C16.9037 14.3174 17.1189 13.6079 17.1189 12.8822C17.1238 12.3972 17.0324 11.916 16.8502 11.4666C16.668 11.0171 16.3984 10.6082 16.0572 10.2635C15.7159 9.91889 15.3097 9.6453 14.8621 9.45859C14.4145 9.27188 13.9343 9.17576 13.4493 9.17578V9.21248Z" fill="currentColor" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_379_44744">
                                        <rect width="26.8987" height="34.605" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        )
                    }

                </i>
                <p>{props.location}</p>
            </div>

            {props.isLoading
                ?
                (
                    <div className="shimmer-bg my-auto relative h-full w-full rounded-[4rem] overflow-hidden"></div>
                )
                :
                (
                    <div className="aqi-info grid grid-cols-[75%_25%] my-auto relative h-full w-full rounded-[4rem] overflow-hidden">
                        <div className="col1 z-[2] flex flex-col justify-center py-[5rem] pl-[5rem] lg:px-[8rem] gap-[2rem]">
                            <div className="aqi-meter w-full grow -mt-[1.5rem] -ml-[3rem]">
                                <AqiMeter value={valueDataMeta.value} />
                            </div>

                            <div className="flex flex-col gap-[0.5rem] aqi-range-detail text-white">
                                <p className="text-[2rem] font-normal"><span className="text-[2.5rem] font-semibold">Air Quality </span>is</p>

                                <div className="range-name text-[3.5rem] overflow-hidden relative w-fit rounded-[0.3em] px-[1.5em] py-[0.4em] font-bold capitalize leading-[100%] after:content-[''] after:absolute after:top-0 after:left-0 after:z-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.2)]" style={{ background: valueDataMeta.rangeColor }}>
                                    <span className="z-[1] relative">{valueDataMeta.rangeName}</span>
                                </div>
                            </div>
                        </div>

                        <div className="col2 z-[2] flex flex-col justify-between text-[2rem]">
                            <div className="location uppercase bg-[rgba(255,255,255,0.3)] font-extrabold text-white p-[1em] rounded-bl-[2em] flex items-center justify-center leading-[100%]">
                                {props.locationType}
                            </div>

                            <div className="aqi-range-model relative bg-[rgba(255,255,255,0.75)] aspect-[190/150] rounded-tl-[3em]">
                                <img className="absolute left-2/4 -translate-x-2/4 bottom-[15%] max-w-[80%] h-[23rem]" src={valueDataMeta.rangeModelImg} alt={valueDataMeta.rangeName}></img>
                            </div>
                        </div>

                        <div className="card-overlay z-1 absolute top-0 left-0 w-full h-full" style={{ background: valueDataMeta.rangeColor }}></div>

                        <div className="card-bg absolute bottom-0 left-0 w-full z-0 mix-blend-color-burn opacity-[30%]">
                            <img className="w-full" src={cardBg}></img>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default AqiInfoCard