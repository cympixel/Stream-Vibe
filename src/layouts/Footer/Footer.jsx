import basePath from '@/constants/Path'
import './Footer.scss'
import Socials from '@/components/Socials'

const Footer = () => {
  const menuItems = [
    {
      title: 'Home',
      link: '',
      links: [
        {
          id:'#categories',
          src:'/',
          name:'Categories',
        }, 
         {
          id:'#devices',
          src:'/',
          name:'Devices',
        }, 
         {
          id:'#plans',
          src:'/',
          name:'Plans',
        }, 
         {
          id:'#questions',
          src:'/',
          name:'FAQ',
        }, 
      ],
    },
    {
      title: 'Movies',
      link: 'movies',
      links: [
        {
          id:'#genres-movies',
          src:'/movies',
          name:'Gernes',
        }, 
         {
          id:'#trending-movies',
          src:'/movies',
          name:'Trending',
        }, 
         {
          id:'#new-release-movies',
          src:'/movies',
          name:'New Release',
        }, 
         {
          id:'#popular-movies',
          src:'/movies',
          name:'Popular',
        }],
    },
    {
      title: 'Shows',
      link: 'movies',
      links: [{
          id:'#genres-shows',
          src:'/movies',
          name:'Gernes',
        }, 
         {
          id:'#trending-shows',
          src:'/movies',
          name:'Trending',
        }, 
         {
          id:'#new-release-shows',
          src:'/movies',
          name:'New Release',
        }, 
         {
          id:'#popular-shows',
          src:'/movies',
          name:'Popular',
        }],
    },
    {
      title: 'Support',
      link: 'support',
      links: [{
          id:'#contact-us',
          src:'/support',
          name:'Contact Us',
        }],
    },
    {
      title: 'Subscriptions',
      link: 'subscriptions',
      links: [{
          id:'#plans',
          src:'/subscriptions',
          name:'Plans',
        }, 
         {
          id:'#features',
          src:'/subscriptions',
          name:'Features',
        }],
    },
    {
      title: 'Connect With Us',
      link: 'support',
      socialLinks: [
        {
          label: 'Facebook',
          iconName: 'facebook',
        },
        {
          label: 'Twitter',
          iconName: 'twitter',
        },
        {
          label: 'LinkedIn',
          iconName: 'linked-in',
        },
      ]
    },
  ]

  const extraLinks = ['Terms of Use', 'Privacy Policy', 'Cookie Policy']

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <nav className="footer__menu">
          {menuItems.map(({ title, link, links, socialLinks }, index) => (
            <div className="footer__menu-column" key={index}>
              <a className="footer__menu-title h6" href={`${basePath}/${link}`}>{title}</a>
              {links?.length > 0 && (
                <ul className="footer__menu-list">
                  {links.map(({id, src, name}, index) => (
                    <li className="footer__menu-item" key={index}>
                      <a className="footer__menu-link" href={`${basePath}${src}${id}`}>
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              {socialLinks?.length > 0 && (
                <Socials className="footer__soc1als" links={socialLinks} />
              )}
            </div>
          ))}
        </nav>
        <div className="footer__extra">
          <p className="footer__copyright">
            @2023 streamvib, All Rights Reserved
          </p>
          <div className="footer__extra-links">
            {extraLinks.map((link, index)=>(
                <a href={`${basePath}`} className="footer__extra-link" key={index}>
                    {link}
                </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
