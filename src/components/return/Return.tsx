import "./Return.scss";
import { MoveLeft as MoveLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Return = () => {
   const navigate = useNavigate();
   const goBack = () => {
      navigate(-1);
   };
   return (
      <div className="container">
         <div className="return-container container-max">
            <div onClick={goBack} className="return-container-button">
               <MoveLeftIcon size={20} /> Back
            </div>
         </div>
      </div>
   );
};
