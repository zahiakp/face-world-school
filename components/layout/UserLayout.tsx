import React, { PropsWithChildren } from 'react';
import AOSClient from '../common/AOS';
import Nav from '../common/Nav';
import Footer from '../common/Footer';

interface UserLayoutProps {}

const UserLayout: React.FC<PropsWithChildren<UserLayoutProps>> = (props) => {
  return (
    <main>
        <Nav/><AOSClient/>
        <div>{props.children}</div>
        <Footer/>
      
    </main>
  );
};

export default UserLayout;
