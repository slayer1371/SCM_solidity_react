import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import KitchenSinkExample from "./card";
import { Container } from "react-bootstrap";
import products from "../data/products";
import "../containers/cardgrid.css";
import NavScrollExample from "./nav";


function ProductPage() {
  return (
    <div>
      <NavScrollExample /> 
      <Container>
        <Row>
          {products.map((product) => (
            <Col xs>
              <KitchenSinkExample Title={product.name} imgsrc={product.img} or_price={product.or_price} dis_price={product.dis_price} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default ProductPage;
