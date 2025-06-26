import Image from "next/image";

type experienceContent = {
    job: string;
    comName: string;
    date: string;
    detail: string;
    photoLink: string;
    skills: string[];
};

export default function Experience(Item: experienceContent) {
    return (
        <div className="flex flex-col gap-4 p-5 rounded-xl shadow-lg bg-white/10 backdrop-blur-lg transition hover:shadow-[0_0_20px_white]/80">
            <div className="flex items-center gap-4">
                <Image
                    src={Item.photoLink}
                    alt={Item.comName}
                    width={48}
                    height={48}
                    className="rounded-full object-cover w-12 h-12"
                />
                <div className="flex flex-col">
                    <h2 className="text-base font-semibold text-white">{Item.job}</h2>
                    <h3 className="text-sm font-medium text-white/80">{Item.comName}</h3>
                    <p className="text-xs text-gray-400">{Item.date}</p>
                </div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed">
                {Item.detail}
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
                {Item.skills.map((skill, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 bg-white text-black rounded-full text-xs font-medium shadow-sm"
                    >
                        {skill}
                    </span>
                ))}
            </div>

        </div>

    );
}
