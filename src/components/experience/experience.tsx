
type experienceContent = {
    name: string;
    date: string;
    job: string;
    detail:string
}

export default function Experience(Item: experienceContent) {
    return(
        <div className="border-2 p-6 bg-opacity-10 backdrop-blur-sm border-[#4c40ff] rounded-xl shadow-lg transition duration-300 hover:shadow-[0_0_15px_#4c40ff]">
            <div className="flex flex-col space-y-3">
                <h2 className="text-xl font-bold text-white">{Item.job}</h2>
                <p className="text-gray-300 text-sm">{Item.date}</p>
                <h3 className="text-lg font-semibold text-white/90">{Item.name}</h3>
                <p className="text-gray-400 leading-relaxed">{Item.detail}</p>
            </div>
        </div>
    );
}