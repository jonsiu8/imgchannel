import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <div id="main" className="alt">
        <section id="one">
            <div className="inner">
                <h1>PAGE NOT FOUND</h1>
                <h3>The page you requested could not be found.</h3>
                <p>Try refining your search, or use the menu for navigation.</p>
                  <Link to="/" className="button next">Back to homepage</Link>
            </div>
        </section>
    </div>
  </Layout>
)

export default NotFoundPage
