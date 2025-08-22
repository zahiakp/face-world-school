import React, { PropsWithChildren } from 'react';
import AOSClient from '../common/AOS';
import Nav from '../common/Nav';
import Footer from '../common/Footer';
import SEO from '../common/SEO';

interface UserLayoutProps {
  title: string;
  ogImage?: string;
  description: string;
}

const UserLayout: React.FC<PropsWithChildren<UserLayoutProps>> = (props) => {
  return (
    <section>
      <SEO title={props.title} description={props.description} ogImage={props.ogImage}/>
    <main>
        <Nav/><AOSClient/>
        <div>{props.children}</div>
        <Footer/>
      
    </main>
    </section>
  );
};

export default UserLayout;
