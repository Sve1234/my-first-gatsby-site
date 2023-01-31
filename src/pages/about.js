import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const AboutPage = () => {
    return (
        <Layout>
            <h1>About me</h1>
            <h1>Kurva</h1>
        </Layout>
        // <main>
        //     <Link to='/'>Back home</Link>
        //     <p>test tester testest site</p>
        // </main>
    )
}

export const Head = () => (
    <>
        <title>About Me</title>
        <meta name="description" content="Your description" />
    </>
)

export default AboutPage;