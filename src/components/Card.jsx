import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardCom({title, desc, imgUrl, price}) {
  return (
    <Card style={{ width: '18rem' }} className='phones'>
      <Card.Img variant="top" src={imgUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Title>{price}</Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
  );
}

export default CardCom;