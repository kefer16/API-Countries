import "../styles/Return.scss";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import { useNavigate } from "react-router-dom";

export const Return = () => {
   const navigate = useNavigate();
   const goBack = () => {
      navigate(-1);
   };
   return (
      <div className="background-body container">
         <div className="return-container container-max">
            <div onClick={goBack} className="return-container-button">
               <KeyboardBackspaceRoundedIcon /> Back
            </div>
         </div>
      </div>
   );
};
