import React, { Component } from 'react'

function BlockHref(props) {
    return (<a href='#' dangerouslySetInnerHTML={{__html: props.value}}></a>)
}

export default BlockHref