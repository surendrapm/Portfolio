import React from 'react'
import '../styles/profile.css'
import {profile} from '../config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot, } from '@fortawesome/free-solid-svg-icons';
import {faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Profile = () => {

  const renderIcon = (platform:string) => {
    switch (platform) {
      case 'github':
        return <FontAwesomeIcon icon={faGithub} />;
      case 'twitter':
        return <FontAwesomeIcon icon={faTwitter} />;
    
      case 'linkedin':
        return <FontAwesomeIcon icon={faLinkedin} />;
      default:
        return null;
    }
  };

  return (
    <aside className='sidebar' data-sidebar>
       <div className='sidebar-info'>
         <figure className='avatar-box'>
             <img src={profile.pic} alt={profile.name} width="80" />
         </figure>

      <div className='info-content'>
          <h1 className='name' title={profile.name}>{profile.name}</h1>
          <p className='title'>{profile.title}</p>
      </div>
    </div>
    
    <div className='sidebar-info_more'>
      <div className='separator'></div>

      <ul className='contacts-list'>
             <li className='contact-item'>
               <div className='icon-box'>
                 <FontAwesomeIcon  icon={faEnvelope} />
               </div>

               <div className='contact-info'>
                           <p className='contact-title'>Email</p>
                           <a href="mailto:suredon456@gmail.com" className='contact-link'>
                                           {profile.email}
                           </a>
               </div>
             </li>

             <li className='contact-item'>
                       <div className='icon-box'>
                       <FontAwesomeIcon icon={faLocationDot}/>
                       </div>

                       <div className='contact-info'>
                           <p className='contact-title'>Location</p>
                           <address>{profile.location}</address>
                       </div>
              </li>
          </ul>
           
           <div className='separator second'></div>
            
            <ul className='social-list'>
               {
                Object.entries(profile.social).map(([platform,link])=>(
                    <li className='social-item'>
                         <a href={link} className='social-link'>
                              {renderIcon(platform)}
                         </a>
                    </li>
                ))
               }
            </ul>
    </div>
    
    </aside>
  )
}

export default Profile