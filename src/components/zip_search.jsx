import React, { useEffect, useState } from "react";
import axios from "axios";

const Zip_search = (props) => {
  

//   useEffect(() => {
//     console.log(props.zipCode)
//     async function getCity() {
//       try {
//         const list = await axios.get(
//           `https://zip-api.eu/api/v1/info/US-${props.zipCode.zipCodeChange}`
//         );
//         setCityState(list.data.place_name);
//       } catch (error) {
//         console.error(error);
//       }
//     }
//     getCity();
//   }, [props.zipCode]);

  return <div>{props.cityState}</div>;



};

export default Zip_search;
