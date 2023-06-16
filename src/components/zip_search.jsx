import React, { useEffect, useState } from "react";
import axios from "axios";

const Zip_search = (props) => {
  const [cityState, setCityState] = useState([]);

  useEffect(() => {
    async function getCity() {
      try {
        const list = await axios.get(
          `https://zip-api.eu/api/v1/info/US-${props.zipCode}`
        );
        setCityState(list.data.place_name);
      } catch (error) {
        console.error(error);
      }
    }
    getCity();
  }, []);

  return <div>{cityState}</div>;
};

export default Zip_search;
