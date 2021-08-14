import * as React from "react";
import { getDataResults } from "../api";
import { Owner } from "../types";

import Result from '../components/Result/Result';
import { fetchCats } from "../utils";

const Home: React.FC = () => {
  const [userData, setUserData] = React.useState<Owner | undefined>();

  React.useEffect(() => {
    // Should Start grabbing data from webServices"
    const load = async () => {
      setUserData(await getDataResults());
    };
    load();
  }, []);

  let ownersCat = userData ? fetchCats(userData) : undefined;

  return (
    <>
      {userData ? (
        <Result results={ownersCat}/>
      ) : undefined}
    </>
  );
};

export default Home;
