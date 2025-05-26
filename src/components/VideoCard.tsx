import React from 'react';
import { ExternalLink } from 'lucide-react';

type VideoProps = {
  title: string;
  thumbnail: string;
  description: string;
  embedId: string;
  views?: string;
  date?: string;
};

const VideoCard: React.FC<VideoProps> = ({ 
  title, 
  thumbnail, 
  description, 
  embedId, 
  views, 
  date 
}) => {
  return (
    <div className="card h-full flex flex-col">
      <div className="relative overflow-hidden pt-[56.25%] bg-tech-black-900">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${embedId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{title}</h3>
        
        {(views || date) && (
          <div className="flex text-xs text-gray-400 mb-2">
            {views && <span className="mr-2">{views} views</span>}
            {date && <span>{date}</span>}
          </div>
        )}
        
        <p className="text-gray-300 text-sm mb-4 line-clamp-3">{description}</p>
        
        <a
          href={`https://www.youtube.com/watch?v=${embedId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center text-neon-green-400 hover:text-neon-green-300 transition-colors duration-300 text-sm font-medium"
        >
          Watch on YouTube
          <ExternalLink size={16} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

export default VideoCard;