import React, { Component } from 'react'
import LayoutLeft from "./LayoutLeft";
import LayoutRight from "./LayoutRight";
class Layout extends Component {
    render() {
        const style = {
            width: '100%',
            display: 'flex',
            alignItems: 'flex-start'
        }

        return <div style={style}>
        <LayoutLeft/>
        <LayoutRight/>
        </div>
    }
}

export default Layout