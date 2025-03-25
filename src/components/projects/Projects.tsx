type ProjectData = {
    name: string;
    image: string;
    description: string;
    link: string;
}

export default function Projects(Item: ProjectData) {
    return (
        <div className="flex flex-col items-center p-6 bg-[#0a0726] border border-[#4c40ff] rounded-xl shadow-lg transition duration-300 hover:shadow-[0_0_15px_#4c40ff]">
            <h2 className="text-2xl font-bold text-white mb-4">{Item.name}</h2>
            <img 
                src={Item.image} 
                alt={Item.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-white mb-4">{Item.description}</p>
            <a 
                href={Item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-800 flex items-center"
            >
                View Project <span className="ml-1">→</span>
            </a>
        </div>
    );
}