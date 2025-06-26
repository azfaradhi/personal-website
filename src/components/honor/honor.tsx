import Image from "next/image";

type HonorData = {
  image: string;
  name: string;
  award: string;
};

export default function Honor({ image, name, award }: HonorData) {
  return (
    <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-lg rounded-xl shadow-md hover:shadow-[0_0_15px_white]/60 transition w-full max-w-md">
      {/* Photo */}
      <Image
        src={image}
        alt={name}
        width={56}
        height={56}
        className="rounded-full object-cover w-14 h-14"
      />

      {/* Text Content */}
      <div className="flex flex-col">
        <h3 className="text-base font-semibold text-white">{name}</h3>
        <p className="text-sm text-white/80">{award}</p>
      </div>
    </div>
  );
}
