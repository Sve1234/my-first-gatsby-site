import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';

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

export const Head = () => <Seo title="About Me" />;

export default AboutPage;