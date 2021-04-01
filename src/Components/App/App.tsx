import React, {Component} from "react";

import MarkdownEditor from "../MarkdownEditor/MarkdownEditor"
import Footer from "../Footer/Footer"

class App extends Component {

    render() {
        return (
            <div>
                <MarkdownEditor />
                <Footer />
            </div>
        );
    }
}

export default App;

