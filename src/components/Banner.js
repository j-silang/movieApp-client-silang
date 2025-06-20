import { Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Banner({data}) {
    const {title, content, destination, buttonLabel} = data;

	return (
		<Row>
			<Col className="text-center mt-4 responsive">
				<h1><b>{title}</b></h1>
				<h3>{content}</h3>
				<Button as={Link} variant="primary"to={destination}>{buttonLabel}</Button>
			</Col>
		</Row>
	)
}