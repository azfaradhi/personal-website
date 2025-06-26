import Image from "next/image";

type EducationList = {
  name: string;
  icon: string;
  date: string;
  score: string;
};

export default function Education(Item: EducationList) {
  return (
    <div className="w-full bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-[0_0_15px_#4c40ff]/50 transition flex items-center gap-6">
      <Image
        src={Item.icon}
        width={64}
        height={64}
        alt={Item.name}
        className="w-12 h-12 md:w-16 md:h-16 object-contain"
      />

      <div className="flex flex-col text-white">
        <h3 className="text-lg md:text-xl font-semibold">{Item.name}</h3>
        <p className="text-sm text-white/70">{Item.date}</p>
        <p className="text-sm text-white/60">{Item.score}</p>
      </div>
    </div>
  );
}
