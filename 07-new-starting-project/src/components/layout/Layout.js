import cssModule from './Layout.module.css';
import MainNavigation from './MainNavigation';

const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <main className={cssModule.main}>{props.children}</main>
    </>
  );
};

export default Layout;
