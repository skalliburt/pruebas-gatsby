import React from "react"
import {Link, graphql, useStaticQuery} from 'gatsby'
import '../style/sidebar.scss'

const Sidebar = () =>{
    const data = useStaticQuery(graphql`
        query{
            site {
                siteMetadata {
                  title
                  author
                  description
                  siteUrl
                  social {
                    facebook
                    instagram
                    github
                    email
                  }
                }
              }
        }
    `)
    return(
        <aside className="sidebar">
        <header>
            <div className="about">
                <div className="author-image">
                    <Link to="/">
                        <img src="" alt=""/>
                    </Link>
                </div>
                <div className="author-name">{data.site.siteMetadata.title}</div>
                <p>{data.site.siteMetadata.description}</p>
            </div>
        </header>
        <footer>
            <section className="contact">
                <h3>Contactos</h3>
                <ul>
                    <li>
                        <a></a>
                    </li>
                    <li>
                        <a></a>
                    </li>
                    <li>
                        <a></a>
                    </li>
                    <li>
                        <a></a>
                    </li>
                </ul>
            </section>
            <div className="copyright">
          <p>
            {new Date().getFullYear()} &copy; {data.site.siteMetadata.author}
          </p>
        </div>
        </footer>
    </aside>
    )
}
export default Sidebar