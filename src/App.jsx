import { Routes, Route } from "react-router-dom";
import routes from "./routes";
import Header from "./header-footer/Header/Header";
import Footer from "./header-footer/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <Routes>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={route.element}
              exact
            />
          );
        })}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
