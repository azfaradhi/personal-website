import Image from "next/image";

type Item = {
  name: string;
  icon: string;
  invert: boolean;
};

export default function TechStack(Item: Item) {
  return (
    <div className="flex flex-col items-center space-y-2 p-3 md:p-4 rounded-lg shadow">
      <Image
        src={Item.icon}
        width={48}
        height={48}
        alt={Item.name}
        className={`${Item.invert ? "invert" : ""} w-10 h-10 md:w-16 md:h-16 object-contain`}
      />
      <span className="text-sm md:text-base font-medium text-white/90">{Item.name}</span>
    </div>
  );
}
