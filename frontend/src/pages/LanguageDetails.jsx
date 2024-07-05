import { useParams } from "react-router-dom";
import C from "../components/Languages/C";
import Cpp from "../components/Languages/Cpp";
import Java from "../components/Languages/Java";
import Python from "../components/Languages/Python";
import JavaScript from "../components/Languages/JavaScript";

const LanguageDetails = () => {
  let { id } = useParams();

  switch (id) {
    case "C":
      return <C />;
    case "C++":
      return <Cpp />;
    case "Java":
      return <Java />;
    case "Python":
      return <Python />;
    case "JavaScript":
      return <JavaScript />;
    default:
      return <h2>Language Details Not Found</h2>;
  }
};

export default LanguageDetails;