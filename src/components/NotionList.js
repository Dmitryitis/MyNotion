import React, { Component } from 'react'
function NotionList(props) {
    const styles = {
        notion__items: {
            listStyle: 'none',
            padding: '0'
        },
        notion__item: {
            marginBottom: '10px'
        },
        notion__link: {
            fontSize: '18px',
            color: 'black'
        }
    }
    const notions = props.notions
    const notionLi = notions.map((notion) =>
        <li style={styles.notion__item} key={notion.id}>
            <a style={styles.notion__link} href="#">{notion.name}</a>
        </li>
    )
    return (<ul style={styles.notion__items}>{notionLi}</ul>)
}

export default NotionList