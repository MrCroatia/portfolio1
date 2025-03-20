import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <SimpleBar className="flex-grow">
        {children}
      </SimpleBar>
      <Footer />
    </div>
  );
};

export default MainLayout;
