import { Outlet, Link } from "react-router-dom";
import PageComponent from "./PageComponent";

const Layout = () => {
    return (
      <>

        <Link to="/"></Link>
        
        
          <Outlet />
      </>
    )
  };
  
  export default Layout;