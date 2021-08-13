import * as React from "react";
import { getDataResults } from "../api";
import { Owner } from "../types";
import { sortUserPetData } from '../utils/SortData';

const Home: React.FC = () => {
  const [userData, setUserData] = React.useState<Owner | undefined>();

  React.useEffect(() => {
    // Should Start grabbing data from webServices"
    const load = async () => {
      setUserData(await getDataResults());
    };
    load();
  }, []);

  console.log(userData ? sortUserPetData(userData) : undefined)

  return (
    <>
      <p>Initial state of preparing medibank hacking challenge</p>
    </>
  );
};

export default Home;
