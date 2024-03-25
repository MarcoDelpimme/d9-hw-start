import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { FaHeart } from "react-icons/fa";

import { useSelector } from "react-redux";

const FavLink = () => {
  const favLinkLengh = useSelector((state) => {
    return state.favState.content.length;
  });

  const navigate = useNavigate();

  return (
    <div className="d-flex justify-content-end my-4">
      <Button onClick={() => navigate("/Favourite")} className="d-flex align-items-center">
        <FaHeart />
        <span className="ms-2">{favLinkLengh}</span>
      </Button>
    </div>
  );
};

export default FavLink;
