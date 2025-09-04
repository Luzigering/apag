import React from 'react';
import './ProjectCard.css';

interface ProjectCardProps {
  Project: {
    id: string;
    title: string;
    description: string;
    image: string;
    link: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ Project }) => {
  return (
 <div
  className="bg-[#121b33] p-3 rounded-xl shadow-lg border border-[#233554] transition-transform duration-300 ease-in-out transform-gpu hover:scale-105 flex flex-col  items-center text-center min-h-[80vh]"
>
  <a
    href={Project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="max-w-full max-h-full p-4 justify-end pb-6
"
  >
    <img
      src={Project.image}
      alt={Project.title}
      className="w-full h-[80%] object-cover rounded-md mb-4 border border-gray-700"
    />
    <h3 className="text-2xl font-bold text-[#d0dcf4] mb-1">{Project.title}</h3>
    <div className="project-info">
      <p>{Project.description}</p>
    </div>
  </a>
</div>
  );
};

export default ProjectCard;