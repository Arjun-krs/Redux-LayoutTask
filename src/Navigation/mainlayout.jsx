import { useLocation } from "react-router-dom";
import Routing from "../Navigation/route";
import Header from "../Layout/Header/index";
import Sidebar from "../Layout/SidebarNav/index";
import "../App.scss";

function MainLayout() {
    const location = useLocation();

    const isLoginPage = location.pathname === "/";

    const isSignupPage = location.pathname === "/signup";

    const shouldDisableHeaderSidebar = isLoginPage || isSignupPage;

    const sideBarStyle = {
        display: shouldDisableHeaderSidebar ? 'none' : 'block'
    };

    const bodyWrapperStyle = {
        width: isLoginPage|| isSignupPage ? '100%' : '95%',
        marginLeft: shouldDisableHeaderSidebar ? '0' : '67px'
    };

    return (
        <>
            <div className="side" style={sideBarStyle}>
                <Sidebar />
            </div>
            <div className="body-wrapper" style={bodyWrapperStyle}>
                <div className="head-wrapper" style={sideBarStyle}>
                    <Header />
                </div>
                <section>
                    <Routing />
                </section>
            </div>
        </>
    );
}
export default MainLayout;

