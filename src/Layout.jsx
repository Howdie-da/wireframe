
import { Outlet } from 'react-router';
import { Header, Footer } from './components';

function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex grow">
        <Outlet/>
      </main>
      <Footer/>
    </div>
  );
}

export default AppLayout;