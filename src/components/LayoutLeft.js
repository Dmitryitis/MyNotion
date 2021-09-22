import React, {Component} from 'react'
import Profile from "./Profile";
import NotionList from "./NotionList";

class LayoutLeft extends Component {
    constructor(props) {
        super(props);
        this.styles = {
            borderRight: '1px solid black',
            marginRight: '30px',
            padding: '0px 15px',
            height: '100vh'
        }
        this.notionList = [
            {
                id: 1,
                name: "List1"
            },
            {
                id: 2,
                name: "List2"
            },
            {
                id: 3,
                name: "List3"
            },
            {
                id: 4,
                name: "List4"
            }
        ]
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return <div style={this.styles}>
            <Profile/>
            <NotionList notions={this.notionList}/>
        </div>
    }
}

export default LayoutLeft