import Generator from "./Generator/Generator";
import style from "./Main.module.css";
const Main = () => {
  return (
    <div className={style.Main}>
      <h2>We help you to genarate more secure password.</h2>
      <Generator />
    </div>
  );
};
export default Main;
