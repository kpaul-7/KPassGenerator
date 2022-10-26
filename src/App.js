import { Fragment, useEffect } from "react";
import Layout from "./components/Layout/Layout";
const App = () => {
  useEffect(() => {
    document.title = "KPassGenerator";
  }, []);
  return (
    <Fragment>
      <Layout></Layout>
    </Fragment>
  );
};
export default App;
