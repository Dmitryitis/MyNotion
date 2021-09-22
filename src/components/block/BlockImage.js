import React, { Component } from 'react'

function BlockImage(props) {
    return (<p dangerouslySetInnerHTML={{__html: props.value}}></p>)
}

export default BlockImage