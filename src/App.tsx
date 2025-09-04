import React from 'react';
import StarryBackground from './components/StarryBackground';
import ProfileCard from './components/ProfileCard';
import './index.css'; // Para estilos globais e animações
import { projects } from './data/project';
import ProjectCard from './components/ProjectCard';

function App() {
   const [currentIndex, setCurrentIndex] = React.useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? projects.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === projects.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className="portfolio-container">
      <StarryBackground />
     
      <div className="content">
        <ProfileCard
          name="Luziane Gering"
          imageUrl="https://avatars.githubusercontent.com/u/93748581?v=4"
        />
        <div className="s">
        <main className="lg:col-span-8 xl:col-span-9 w-full">
         

         <div className="block relative w-full  mx-auto group">
              <div className="overflow-hidden relative rounded-lg">
                <div 
                  className="flex transition-transform ease-out duration-500 h-full"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {projects.map((Project) => (
                    <div className="min-w-full p-1" key={Project.id}>
                       <ProjectCard Project={Project} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Controles do Carrossel */}
              <button onClick={prevSlide} className="absolute top-1/2 -translate-y-1/2 -left-3 z-20 p-2 bg-slate-800/50 rounded-full hover:bg-slate-700/80 transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button onClick={nextSlide} className="absolute top-1/2 -translate-y-1/2 -right-3 z-20 p-2 bg-slate-800/50 rounded-full hover:bg-slate-700/80 transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
              </button>

              {/* Pontos de Navegação */}
              <div className="flex items-center justify-center gap-2 pt-4">
                {projects.map((_, index) => (
                  <div 
                    key={index} 
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${currentIndex === index ? 'bg-purple-400 scale-125' : 'bg-slate-600'}`}
                  ></div>
                ))}
              </div>
            </div>
            </main> </div>
      </div>
    </div>
  );
}

export default App;