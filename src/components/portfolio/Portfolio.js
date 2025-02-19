import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'
import IMG7 from '../../assets/portfolio7.jpg'
import HMS from '../../assets/hms.png'
import JRA from '../../assets/jra.png'
import ECOM from '../../assets/ecom.png'

// DO NOT USE THE IMAGES IN PRODUCTION


// ARRY OF EACH PROJECTS IMAGE AND GITHUB LINKS TO DYNAMICALLY SHOW IT ON WEBSITE
const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Fully Responsive Portfolio App With React Js',
    github: 'https://github.com',
    demo: 'https://saggarr.com'
  },

  {
    id : HMS,
    image: HMS,
    title: 'Hostel management system with Laravel, mySql',
    github: 'https://github.com/saggarr-work/HMS'
  },

  {
    id : JRA,
    image: JRA,
    title: 'Simple job record app which can track your applied jobs. made with PHP Laravel, bootstrap, jQuery & mySql',
    github: 'https://github.com/saggarr-work/job-record-app'
  },

  {
    id : ECOM,
    image: ECOM,
    title: 'Single vendor E-commerce site made with PHP Laravel, bootstrap, jQuery & mySql',
    github: 'https://github.com/saggarr-work/e-trade'
  },

  {
    id: 2,
    image: IMG2,
    title: 'Fully Functional online store with admin panel using raw PHP. Go to /admin and put "admin" as username and password',
    github: 'https://github.com/saggarr-work/HandCraft',
    demo: 'http://beta.saggarr.com/'
  },

  {
    id: 3,
    image: IMG3,
    title: 'Fully Functional Text Utility App With Javascript',
    github: 'https://github.com/saggarr-work/text-utility-toast',
    demo: 'https://saggarr-work.github.io/text-utility-toast/'
  },

  {
    id: 4,
    image: IMG4,
    title: 'Admin Dashboard & Financial Visualization',
    github: 'https://github.com/saggarr-work/admin_dashboard',
    demo: 'https://saggarr-work.github.io/admin_dashboard/'
  },

  {
    id: 5,
    image: IMG5,
    title: 'Simple Online Note app / CRUD operqtions using PHP',
    github: 'https://github.com/saggarr-work/CRUD',
    demo: 'http://test.saggarr.com/'
  },

  {
    id: 6,
    image: IMG6,
    title: 'Simple Calculator With HTML CSS & JavaScript',
    github: 'https://github.com/saggarr-work/calculator_with_eval_function',
    demo: 'https://saggarr-work.github.io/calculator_with_eval_function/'
  },

  {
    id: 7,
    image: IMG7,
    title: 'Simple Clock With HTML CSS & JavaScript',
    github: 'https://github.com/saggarr-work/watch',
    demo: 'https://saggarr-work.github.io/watch/'
  },

]

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title}></img>
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio