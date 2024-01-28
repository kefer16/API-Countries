import "./Loader.scss";
import ClipLoader from "react-spinners/ClipLoader";
interface LoaderProps {
   oculte?: boolean;
}
export const Loader = ({ oculte = false }: LoaderProps) => {
   return (
      <div
         className={`loader-container ${
            oculte ? "loader-container-oculte" : ""
         }`.trim()}
      >
         <ClipLoader color="#ffffff" />
      </div>
   );
};
