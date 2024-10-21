import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./Components/Layout";

const App = () => {
  return (
    <>
      <Router>
        <Layout />
      </Router>
    </>
  );
};

export default App;
