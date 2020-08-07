import React, { Component } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import axios from 'axios';
const { isEmpty } = require('lodash');



class DisplayTopics extends Component {

    removeTopic(_id, i) {
        this.props.removeTopic(_id, i);
    }

    render() {
        const allTopics = this.props.topics;
        const topics = !isEmpty(allTopics) ? allTopics : [];

        return (
            <div className="topics">
                {!isEmpty(topics) ? <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell align="right">Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {topics.map(({ topicTitle, description, _id }, key) => (
                            <TableRow key={key}>
                                <TableCell component="th" scope="row"> {topicTitle ? topicTitle : 'No Topic Title Found'} </TableCell>
                                <TableCell align="right">{description ? description : 'No description Found'}</TableCell>
                                <button onClick={() => { this.removeTopic(_id, key)}} key={key}> Remove me </button>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table> : null}
            </div>
        );
    }
}

export default DisplayTopics;
