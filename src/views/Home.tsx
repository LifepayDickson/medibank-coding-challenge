import * as React from "react";
import { getDataResults } from "../api";
import { Pets } from "../types";

const Home: React.FC = () => {
  const [userData, setUserData] = React.useState<Pets>();

  React.useEffect(() => {
    // Should Start grabbing data from webServices"
    const load = async () => {
      setUserData(await getDataResults());
    };
    load();
  }, []);

  console.log("========", userData);

  return (
    <>
      <p>Initial state of preparing medibank hacking challenge</p>
    </>
  );
};

export default Home;
