import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const PrivateRoute = ({ user, children }) => {
  const navigate = useNavigate();
  if (user) {
    return children;
  } else {
    alert("First you need to Login")
    Swal.fire({
      title: "Do you want to Login?",
      showDenyButton: true,
      confirmButtonText: "yes",
      denyButtonText: `Not`,
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/signup");
      } else if (result.isDenied) {
        Swal.fire("Go To Home page");
        navigate("/");
      }
    });
    return null;
  }
};

export default PrivateRoute;
