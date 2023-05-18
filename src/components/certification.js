import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagination from 'react-bootstrap/Pagination';
import cf1 from './images/cf1.PNG';
import cf2 from './images/cf2.png';
import cf3 from './images/cf3.png';
import cf4 from './images/cf4.png';
import cf5 from './images/cf5.PNG';



function CertificationCard(props) {
    const { logo, title, date} = props;
    return (
        <Card className="h-100">
            <Card.Img variant="top" src={logo} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    
                    <br />
                    <span>Date : {date}</span>
                    <br />
                    
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

function Certifications() {
    const certifications = [
        {
            logo: cf1,
            title: 'Linux Essentials',
         
            date: 'Janvier 23, 2023'
            
        },
        {
            logo: cf2,
            title: 'SQL Basics',
         
            date: 'Janvier 12, 2023'
            
        },
        {
            logo: cf3,
            title: 'SQL Intermediate',
         
            date: 'Fevrier 12, 2023'
            
        },
        {
            logo: cf4,
            title: 'Créer un site moderne avec WordPress 5',
         
            date: 'Mars 19, 2023'
            
        },
        {
            logo: cf5,
            title: 'Python Essentials 1',
         
            date: 'Mars 25, 2023'
            
        },
      
    ];
    const PAGE_SIZE = 3;
    const [activePage, setActivePage] = React.useState(1);

    const totalPages = Math.ceil(certifications.length / PAGE_SIZE);

    const handleClick = (event) => {
        setActivePage(event.target.text);
    }

    const pages = [];

    for (let number = 1; number <= totalPages; number++) {
        pages.push(
            <Pagination.Item key={number} active={number === activePage} onClick={handleClick}>
                {number}
            </Pagination.Item>,
        );
    }

    const startIndex = (activePage - 1) * PAGE_SIZE;
    const endIndex = activePage * PAGE_SIZE;
    const currentCertifications = certifications.slice(startIndex, endIndex);

    return (
        <div>
            <Row className="my-3">
                {currentCertifications.map(certification => (
                    <Col key={certification.id} xs={12} sm={6} lg={4} className="d-flex">
                        <CertificationCard {...certification} />
                    </Col>
                ))}
            </Row>
            <Row className="my-3">
                <Col>
                    <Pagination>{pages}</Pagination>
                </Col>
            </Row>
        </div>
    );
}

export default Certifications;