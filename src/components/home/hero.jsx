import {
    ArrowRight,
    ArrowLeft,
    Leaf,
    Truck,
    RefreshCw,
    MessageCircle,
} from "lucide-react";

export default function FashionHero({ slide }) {

    return (
        <main className="relative flex min-h-[calc(100vh-76px)] flex-1 items-center overflow-hidden">

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url("${slide.image}")`,
                    backgroundPosition: "center right",
                }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#e9e6df_0%,#e9e6df_39%,rgba(233,230,223,0.98)_43%,rgba(233,230,223,0.85)_50%,rgba(233,230,223,0.45)_58%,rgba(233,230,223,0.05)_68%,transparent_75%)] max-md:bg-[linear-gradient(180deg,rgba(233,230,223,0.05)_0%,rgba(233,230,223,0.25)_25%,#e9e6df_55%,#e9e6df_100%)]" />

            {/* Hero Content */}
            <div className="relative z-10 mx-auto flex min-h-[calc(100vh-76px)] w-full max-w-area items-center px-5 md:px-0">

                <div className="w-full py-16 md:w-[520px]">

                    {/* Tagline */}
                    <div className="mb-6 flex items-center gap-[18px]">
                        <span className="text-caption font-bold uppercase tracking-[2px] text-[#5e7189]">
                            {slide.tagline}
                        </span>
                        <span className="h-px w-[43px] bg-[#9da5ae]" />
                    </div>

                    {/* Heading */}
                    <h1 className="whitespace-pre-line text-title font-extrabold leading-[1.02] tracking-[-4px] text-[#171717]">
                        {slide.title}
                    </h1>

                    {/* Description */}
                    <p className="mb-[34px] mt-6 max-w-[400px] text-body leading-[1.8] text-[#61758d]">
                        {slide.description}
                    </p>

                    {/* CTA */}
                    <a
                        href="#"
                        className="inline-flex h-[49px] min-w-[149px] items-center justify-center gap-4 rounded-full bg-[#191a1f] px-6 text-[13px] font-semibold text-primary shadow-lg"
                    >
                        Shop Now
                        <ArrowRight size={17} />
                    </a>

                    {/* Benefits */}
                    <div className="mt-[60px] flex flex-wrap items-center gap-x-[30px] gap-y-5">
                        <Benefit
                            icon={<Leaf size={17} />}
                            title="Premium Quality"
                            description="Crafted to last"
                        />

                        <Benefit
                            icon={<Truck size={17} />}
                            title="Free Shipping"
                            description="On orders over $100"
                        />

                        <Benefit
                            icon={<RefreshCw size={17} />}
                            title="Easy Returns"
                            description="Hassle free"
                        />

                    </div>

                    {/* Static Slider Indicator */}
                    <div className="mt-11 flex items-center gap-[18px]">
                        <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-[#d8d8d8] text-[#778394]">
                            <ArrowLeft size={17} />
                        </div>

                        <div className="flex flex-col items-center text-[11px] leading-[1.4] tracking-[1px] text-[#56677f]">
                            <span>01 /</span>
                            <span>04</span>
                        </div>

                        <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-[#d8d8d8] text-[#778394]">
                            <ArrowRight size={17} />
                        </div>
                    </div>

                </div>

                {/* Handwritten Text */}
                <div className="absolute right-[8%] top-[44%] z-10 hidden -translate-y-1/2 rotate-[-8deg] text-center font-serif text-[32px] italic leading-[1.15] text-primary drop-shadow-sm md:block">
                    {slide.handwritten.split("\n").map((line, index) => (
                        <div key={index}>{line}</div>
                    ))}
                    <div className="mx-auto mt-3 h-px w-[75px] bg-primary/90" />
                </div>

            </div>

            {/* Mobile Handwritten Text */}
            <div className="absolute right-[8%] top-[23%] z-10 rotate-[-8deg] text-center font-serif text-[23px] italic leading-[1.15] text-primary md:hidden">
                {slide.handwritten.split("\n").map((line, index) => (
                    <div key={index}>{line}</div>
                ))}
            </div>

            {/* Chat Icon */}
            <div className="absolute bottom-[22px] right-[22px] z-20 flex h-[52px] w-[52px] items-center justify-center rounded-[17px] bg-[#737e91] text-primary shadow-lg">
                <MessageCircle size={27} />
            </div>

        </main>

    );
}

function Benefit({
    icon,
    title,
    description,
}) {
    return (
        <div className="flex items-start gap-[10px] text-[#758193]">
            <span className="mt-0.5 shrink-0">{icon}</span>
            <div className="flex flex-col gap-[5px]">
                <strong className="whitespace-nowrap text-label font-semibold text-[#252525]">
                    {title}
                </strong>
                <span className="whitespace-nowrap text-label text-[#718094]">
                    {description}
                </span>
            </div>
        </div>
    );
}
