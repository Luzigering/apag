import React from 'react';
import './ProfileCard.css';
import Icon from './Icon';
interface ProfileCardProps {
  name: string;
  imageUrl: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, imageUrl }) => {
  return (
    <div className="profile-card">
      
      <img src={imageUrl} alt={name} className="profile-image" />
      <h1 className="profile-name">{name}</h1>
      {/* Você pode adicionar mais informações aqui, como cargo, links sociais, etc. */}
            <div className="text-center">
              <p className=" text-gray-400 text-lg mb-6">Desenvolvedora Front-End</p>
           <div className="w-20 h-0.5 bg-indigo-500 mx-auto mb-6"></div>
            <p className="text-indigo-100 max-w-xs">
                Apaixonada por criar experiências digitais fluidas e bonitas com as tecnologias mais modernas.
            </p>
            </div>
         
                <div className="flex items-center justify-center mr-5 mt-8">
               
                <Icon href="https://br.linkedin.com/in/luziane-gering-729ba7180/pt" className="icon-link" aria-label="LinkedIn">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0 -2-2 2 2 0 0 0 -2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
                </Icon>
                 <Icon href="https://github.com/Luzigering" className="icon-link" aria-label="GitHub">
                    <path d="M9 19c-4.3 1.4 -4.3-2.5 -6-3m12 5v-3.5c0-1 .1-1.4 -.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0 -1.3-3.2a4.2 4.2 0 0 0 -.1-3.2s-1.1-.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4-1.6 -3.5-1.3 -3.5-1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6.6 -.6 1.2 -.5 2v3.5"></path>
                </Icon>
                <Icon  href="https://www.facebook.com/lgering55" className="icon-link" aria-label="Instagram">
                     <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </Icon>
            </div></div>
            
  );
};

export default ProfileCard;