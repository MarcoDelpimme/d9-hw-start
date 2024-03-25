import { Col, Row, ListGroup, Container, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Favourites = () => {
  const favJob = useSelector((state) => {
    return state.favState.content;
  });
  const dispatch = useDispatch();

  return (
    <Container>
      <h1>YOUR FAVOURITES JOBS</h1>
      <Row>
        <Col>
          <ListGroup>
            {favJob.map((state, i) => (
              <ListGroup.Item key={i}>
                <Link to={`/${state.company_name}`}>{state.company_name}</Link>
                <Button
                  variant="danger"
                  onClick={() => {
                    dispatch({
                      type: "DELETE_JOBS",
                      payload: i,
                    });
                  }}
                >
                  <FaTrash />
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
