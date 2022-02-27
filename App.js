import React, { useEffect } from "react";
import Routes from "./src/routes.mapping";
import SplashScreen from "react-native-splash-screen";

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  componentDidMount = () => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  };
  return <Routes />;
}
