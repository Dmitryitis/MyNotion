import React, { Component } from 'react'
import BlockText from "./block/BlockText";
import BlockImage from "./block/BlockImage";
import BlockHref from "./block/BlockHref";

class Blocks extends Component{
    constructor(props) {
        super(props);
        this.blockLi = props.blocks.map((block) => {
            if (block.typeBlock === 'text'){
                return <li>
                    <BlockText value={block.value}/>
                </li>
            } else if (block.typeBlock === 'img') {
                return <li>
                    <BlockImage value={block.value}/>
                </li>
            } else {
                return <li>
                    <BlockHref value={block.value}/>
                </li>
            }
        })
    }
    render() {
        return <ul>{this.blockLi}</ul>
    }
}

export default Blocks