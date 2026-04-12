import Header from "../header/header";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-basic-light">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
