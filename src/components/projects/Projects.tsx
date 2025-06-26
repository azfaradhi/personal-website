import Image from "next/image";

type ProjectLink = {
  label: string;
  url: string;
};

type ProjectData = {
  name: string;
  image: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
};

export default function Projects(Item: ProjectData) {
  return (
    <div className="flex flex-col items-start p-6 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl shadow-lg transition duration-300 hover:shadow-[0_0_20px_white]/50 w-full max-w-md">
      
      {/* Title */}
      <h2 className="text-xl md:text-2xl font-semibold text-white mb-3 self-center text-center w-full">
        {Item.name}
      </h2>

      {/* Image */}
      <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
        <Image
          src={Item.image}
          alt={`Preview of ${Item.name}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
        />
      </div>

      {/* Description */}
      <p className="text-sm text-white/80 mb-3 leading-relaxed">{Item.description}</p>

      {/* Tags (as text only) */}
      <p className="text-xs text-white/60 mb-4">
        {Item.tags.join(", ")}
      </p>

      {/* Links (as chip/badge) */}
      <div className="flex flex-wrap gap-2">
        {Item.links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 rounded-full text-xs bg-white/20 text-white/90 backdrop-blur-sm"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
