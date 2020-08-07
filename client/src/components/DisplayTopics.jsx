import React, { Component } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

const { isEmpty } = require('lodash');

class DisplayTopics extends Component {
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
                        {topics.map(({ topicTitle, description }, key) => (
                            <TableRow key={key}>
                                <TableCell component="th" scope="row"> {topicTitle ? topicTitle : 'No Topic Title Found'} </TableCell>
                                <TableCell align="right">{description ? description : 'No description Found'}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table> : null}
            </div>
        );
    }
}

export default DisplayTopics;
