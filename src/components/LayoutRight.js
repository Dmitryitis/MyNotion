import React, { Component } from 'react'
import Blocks from "./Blocks";

class LayoutRight extends Component{
    constructor(props) {
        super(props);
        this.blocks = [
            {
                id:1,
                locationId:1,
                typeBlock: 'text',
                value: '<p>Text Intesestig</p>'
            },
            {
                id:2,
                locationId:2,
                typeBlock: 'img',
                value: '<p>Image</p>'
            },
            {
                id:3,
                locationId:3,
                typeBlock: 'href',
                value: '<p>Href</p>'
            }
        ]
    }
    render() {
        return <div>
            <Blocks blocks={this.blocks}/>
        </div>
    }
}

export default LayoutRight