import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const PrivateRoute = ({ user, children }) => {
  const navigate = useNavigate();
  if (user) {
    return children;
  } else {
    Swal.fire({
      title: "Do you want to Login?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "yes",
      denyButtonText: `Not`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Now You are Login");
        navigate("/login");
      } else if (result.isDenied) {
        Swal.fire("Go To Home page");
        navigate("/");
      }
    });
    return null;
  }
};

export default PrivateRoute;
