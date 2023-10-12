'use client';

import { CircleLoader } from "react-spinners";

const Loader = () => {
  return ( 
    <div
    className="
      h-[70vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    "
    >
      <CircleLoader
        size={100}
        color="#034694"
      />
    </div>
   );
}
 
export default Loader;