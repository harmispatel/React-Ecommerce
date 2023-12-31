import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../FirebaseContext/UserAuthContextProvider";

const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();

  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
  }

  return children;
};

export default ProtectedRoute;
