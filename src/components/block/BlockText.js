import React, { Component } from 'react'

function BlockText(props) {
    return (<p dangerouslySetInnerHTML={{__html: props.value}}></p>)
}

export default BlockText