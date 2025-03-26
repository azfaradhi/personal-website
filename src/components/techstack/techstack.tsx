import Image from "next/image";

type Item = {
    name: string;
    icon: string;
    invert: boolean;
}
export default function TechStack(Item: Item) {
    return(
        <div className="flex flex-col items-center space-y-2 p-2 md:space-y-4 md:p-4 rounded-lg shadow-sm">
            <Image src={Item.icon} width={48} height={48} alt={Item.name} className={`${Item.invert ? "invert" : ""} md:w-24 md:h-24`}/>
            {/* <span className="text-lg md:text-xl font-medium">{Item.name}</span> */}
        </div>
    );
}