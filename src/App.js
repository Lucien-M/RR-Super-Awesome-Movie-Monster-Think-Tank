import React, { Suspense } from "react";
import "./App.css";
//import the loader
import Loader from "react-loader-spinner";

function App() {
  const AboutUs = React.lazy(() => import("./components/AboutUs"));
  const Packages = React.lazy(() => import("./components/Packages"));

  //Before loader-spinner
  // return (
  //   <div className="App">
  //     <h1>Lonzo's Travel Agency</h1>
  //     <h2>Make your travel dreams come true</h2>
  //     <div className="contents">
  //       <Suspense fallback={<h1>Loading...</h1>}>
  //         <AboutUs />
  //         <Packages />
  //       </Suspense>
  //     </div>
  //   </div>
  // );

  return (
    <div className="App">
      <div>
        <Suspense
          fallback={
            <Loader
              type="Bars"
              color="#FF00FF"
              height={200}
              width={200}
              style={{ margin: "0 auto" }}
            />
          }
        >
          <h1>Hello World</h1>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
