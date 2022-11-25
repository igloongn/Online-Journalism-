import React, { useEffect, useState } from 'react';
import { Column, Row } from 'simple-flexbox';
import { createUseStyles } from 'react-jss';
import MiniCardComponent from '../components/cards/MiniCardComponent';
import TodayTrendsComponent from './TodayTrendsComponent';
import UnresolvedTicketsComponent from './UnresolvedTicketsComponent';
import TasksComponent from './TasksComponent';
import axios from 'axios'
import { CircularProgress } from '@mui/material';
import { useHistory } from 'react-router-dom'


const useStyles = createUseStyles({
    cardsContainer: {
        marginRight: -30,
        marginTop: -30
    },
    cardRow: {
        marginTop: 30,
        '@media (max-width: 768px)': {
            marginTop: 0
        }
    },
    miniCardContainer: {
        flexGrow: 1,
        marginRight: 30,
        '@media (max-width: 768px)': {
            marginTop: 30,
            maxWidth: 'none'
        }
    },
    todayTrends: {
        marginTop: 30
    },
    lastRow: {
        marginTop: 30
    },
    unresolvedTickets: {
        marginRight: 30,
        '@media (max-width: 1024px)': {
            marginRight: 0
        }
    },
    tasks: {
        marginTop: 0,
        '@media (max-width: 1024px)': {
            marginTop: 30
        }
    }
});

const Dashboard = () => {
    const classes = useStyles();
    const [payload, setPayload] = useState([])
    const [loading, setloading] = useState(true);
    const history = useHistory()


    useEffect(() => {
        const getLocalNews = async () => {
            const url = 'http://localhost:1234/admindata/'
            const result = await axios.get(url)
            try {
                console.log('result.data')
                console.log(result.data)
                setPayload(result.data)
                // setTimeout(() => {
                setloading(false)
                // }, 1000);

            } catch (err) {
                console.log('error')
                console.log('There was an error')
                console.log(err)

            }
        }
        getLocalNews()
    }, [])

    return (
        <div
            style={{
                marginTop: 40,
            }}
        >
            {
                loading
                    ?
                    <CircularProgress color="secondary" />
                    :
                    <Column>
                        <Row
                            className={classes.cardsContainer}
                            wrap
                            flexGrow={1}
                            horizontal='space-between'
                            breakpoints={{ 768: 'column' }}
                        >
                            <Row
                                className={classes.cardRow}
                                wrap
                                flexGrow={1}
                                horizontal='space-between'
                                breakpoints={{ 384: 'column' }}
                            >
                                <MiniCardComponent
                                    className={classes.miniCardContainer}
                                    title='Total'
                                    value={payload.allNews}
                                    func={() => {
                                        history.replace('/admin/viewall')
                                    }}
                                />
                                <MiniCardComponent
                                    className={classes.miniCardContainer}
                                    title='Approved'
                                    value={payload.approve}
                                />
                            </Row>
                            <Row
                                className={classes.cardRow}
                                wrap
                                flexGrow={1}
                                horizontal='space-between'
                                breakpoints={{ 384: 'column' }}
                            >
                                <MiniCardComponent
                                    className={classes.miniCardContainer}
                                    title='Pending'
                                    value={payload.pending}
                                />
                                <MiniCardComponent
                                    className={classes.miniCardContainer}
                                    title='Rejected'
                                    value={payload.rejected}
                                />
                            </Row>
                        </Row>
                        <Row
                            horizontal='space-between'
                            className={classes.lastRow}
                            breakpoints={{ 1024: 'column' }}
                        >
                            <UnresolvedTicketsComponent containerStyles={classes.unresolvedTickets} />
                            <TasksComponent containerStyles={classes.tasks} />
                        </Row>
                        <div className={classes.todayTrends}>
                            <TodayTrendsComponent />
                        </div>
                    </Column>
            }
        </div>
    );
}

export { Dashboard };
