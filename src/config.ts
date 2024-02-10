export const navbar = ['about','skills','work'];
import {AboutType} from '../src/types'
export const profile = {
    name:'Surendra P',
    pic:'erf',
    title:'FullStack Engineer',
    email:'surendramanagoli@gmail.com',
    location:'Solapur ,India',
    social:{
        linkedin:'https://www.linkedin.com/in/surendra-m-6b03971b1/',
        github:'https://github.com/surendrapm',
        twitter:'https://twitter.com/suredon456'
    },
}

export const about:AboutType = {
    descriptions:[
        `<strong>I'm the passionate full stack developer having good knowledge in the various web technologies to provide a robust synopsis for high level overviews.</strong> 
        `,
        `I leverage modern frameworks like ReactJS, NextJS, and NodeJS to deliver high-quality products, ensuring optimal performance and user experience. I am Proficient in collaborative environments, partnering effectively with designers and backend developers to achieve shared goals.`,
    ],
    majors:{
        "Frontend Devlopment":"Design and devlopment of client side apps using best practices.",
        "Backend Devlopment":"development & deployment of server side web apps in scalable and maintainable way.",
        "Open-source Projects":"started to learning and contributing large codebased openSourced projects",
        "Content Creation":"I create content on fullstack topics"
    }
}

export const experience = {
    education:[
       { 
        name:"Bachlor of Computer science",
        duration:'2017 - 2020',
        college:'Sangameshwar college'
    },
    {
         name:'Higher Schooling',
         duration:"2015 - 2017",
         college:"DBF,Solapur"
    }
   ]
}

export const work = {
    projects:[
        {
            name: "IssueTracker",
            pic: "/images/work/1.png",
            link: "https://github.com/surendrapm/IssueTrackerApp",
          },
          {
            name: "Course-Selling App",
            pic: "/images/work/2.png",
            link: "https://github.com/surendrapm/Course-selling-app",
          },
          {
            name: "DashBoard",
            pic: "/images/work/2.png",
            link: "https://github.com/surendrapm/nextjs-dashboard",
          },
          {
            name: "Social media",
            pic: "/images/work/2.png",
            link: "https://github.com/surendrapm/social-media-using-nodejs/tree/master",
          },
          {
            name:'Frontend mini projects',
            pic:'/images/work/3.png',
            link:'https://github.com/surendrapm/nextjs-dashboard'
          }
    ],
      blogs:[
        {
            name:"SSR (server side rendering)"
        },
        {
            name:'Working way of NodeJS'
        },
        {
            name:'How React works Internally (reconciler)'
        },
        {
            name:'Indexing of Database'
        },
        {
            name:'Distributed Systems'
        },
        {
           name:'websockets' 
        }

      ]
}
