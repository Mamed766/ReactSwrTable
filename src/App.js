import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routers } from "./router";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {routers &&
            routers.map((router, index) => (
              <Route path={router.path} element={router.element} />
            ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
