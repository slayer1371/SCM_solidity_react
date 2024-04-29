import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

function KitchenSinkExample(props) {
  return (
    <Card bg={'light'} text={'bg'==='light'?'white':'dark'} style={{ width: '28rem' }}>
      <Card.Img variant="top" src={props.imgsrc} style={{"border-image":"10px"}}/>
      <Card.Body style={{"fontSize":"18px"}}>
        <Card.Title>{props.Title}</Card.Title>
        <Card.Text>
          Price Rs <s>{props.or_price}</s> {props.dis_price}/-
        </Card.Text>
        <Button variant="outline-primary">Add to Cart</Button>&nbsp;&nbsp;
        <Button variant="outline-primary">Buy Now</Button>
      </Card.Body>
    </Card>
  );
}

export default KitchenSinkExample;