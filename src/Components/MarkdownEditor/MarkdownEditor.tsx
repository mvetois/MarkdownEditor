import React, {Component} from "react";

import ReactMarkdown from "react-markdown";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


class MarkdownEditor extends Component {

    state = {
        text: ""
    };

    editText(e : any) {
        this.setState({
            text: e.target.value
        });
    };

    render() {
        return (
            <Container style={{marginTop : "2%"}}>
                <Row>
                    <Col>
                        <textarea
                            value={ this.state.text }
                            onChange={this.editText.bind(this)}
                            style={style.mdArea}
                            rows={35}
                        />
                    </Col>
                    <Col>
                        <ReactMarkdown>{this.state.text}</ReactMarkdown>
                    </Col>
                </Row>
            </Container>
        );
    }
};

export default MarkdownEditor;

const style = {
    mdArea: {
        width: "100%"
    }
};