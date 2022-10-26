import Navbar from "../Navbar/Navbar";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import style from "./Layout.module.css";
const Layout = () => {
  return (
    <div className={style.Layout}>
      <div className={style.TopDiv}>
        <Navbar />
        <Main />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
