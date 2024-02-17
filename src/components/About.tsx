import React from 'react'
import '../styles/about.css'
import {about} from '../config'


const About = () => {
      
  return (
    <article className='about active' data-page="about">
        <header>
            <h2 className="h2 article-title">About Me</h2>
        </header>
        <section className='about-text'>
            {about.descriptions.map((description)=> <p dangerouslySetInnerHTML={{ __html:description}}/>)}
        </section>

        <section className='service'>
             <h3 className='h3 service-title'>What I do</h3>
             <ul className='service-list'>
                {
                     Object.keys(about.majors).map((major)=>(
                          <li className='service-item'>
                              <div className='service-content-box'>
                                <h4 className='h4 service-item-title'>{major}</h4>
                                <p className='service-item-text'>{about.majors[major]}</p>
                              </div>
                          </li>
                     ))
                }
             </ul>
        </section>
        
    </article>
  )
}

export default About