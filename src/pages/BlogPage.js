import React from 'react';
import BlogCards from '../components/BlogCards';
import {Container, Form, FormControl, Button} from 'react-bootstrap';

function BlogPage(props) {
    return (
        <Container className="mt-5">
            <Form className="search-style" inline>
                <FormControl type="text"
                    style={
                        {width: '80%'}
                    }
                    placeholder="Search"/>
                <Button style={
                        {
                            width: '18%',
                            marginLeft: '2%'
                        }
                    }
                    variant="info">Search</Button>
            </Form>
            <BlogCards/>
        </Container>
    );
}
export default BlogPage;
