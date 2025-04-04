import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import 'overlayscrollbars/overlayscrollbars.css';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <OverlayScrollbarsComponent
        options={{
          scrollbars: {
            theme: 'os-theme-dark',
            autoHide: 'leave',
            autoHideDelay: 100,
            clickScroll: true,
            pointers: ['mouse', 'touch', 'pen'],
          },
          overflow: {
            x: 'hidden',
            y: 'scroll'
          }
        }}
        className="flex-grow"
      >
        <main>
          {children}
        </main>
      </OverlayScrollbarsComponent>
      <Footer />
    </div>
  );
};

export default MainLayout;
