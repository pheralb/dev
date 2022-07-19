import Header from "@/layout/header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

export default Layout;
