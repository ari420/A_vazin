import Image from "next/image";

const Brands = () => {
    return (
        <div className=" hidden lg:block absolute top-52 left-8 space-y-4 z-10">
            <Image width={500} height={500} className="w-32 h-32" src="/header/promotion-block-skylounge-blvd.png" alt="skylounge" />
            <Image width={500} height={500} className="w-32 h-32" src="/header/promotion-block-sunrise.png" alt="sunrise" />
        </div>
    );
}

export default Brands;