import { StatusBar } from "react-native";
import { Home } from "./src/screens/home";
import React from "react";

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="white-content" translucent />
      <Home></Home>
    </>
  );
}
