import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import axios from 'axios'
import { Button } from '@mui/material';

function createData(name, calories, fat, carbs, protein, price) {
    return {
        name,
        calories,
        fat,
        carbs,
        protein,
        price,
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    };
}

const deleteNews = async (newsId) => {
    const result = await axios.delete('http://localhost:1234/news/' + newsId)
    console.log(result)
}


function Row({ row, sn }) {
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                {/* <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell> */}
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {/* {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />} */}
                        {sn}

                    </IconButton>
                </TableCell>
                <TableCell
                // component="th"
                // scope="row"
                >
                    {sn}
                </TableCell>
                <TableCell align="right">{row.title}</TableCell>
                <TableCell align="right">{row.postedBy}</TableCell>
                {/* <TableCell align="right">{row.carbs}</TableCell> */}
                <TableCell align="right"><Button variant="text">Edit</Button></TableCell>
                <TableCell align="right"><Button variant="text" color="error" onClick={() => deleteNews(row._id)}>Delete</Button></TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Story
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <Box
                                            component="img"
                                            sx={{
                                                // width: 250,
                                                width: '40%',
                                                margin: 'auto',
                                                // height: 347,
                                                // maxHeight: { xs: 233, md: 167 },
                                                // maxWidth: { xs: 500, md: 1100 },
                                            }}
                                            alt="The house from the offer."
                                            src={row.image}
                                        />
                                        <br />
                                        {row.detail}
                                    </TableRow>
                                </TableHead>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

Row.propTypes = {
    row: PropTypes.shape({
        calories: PropTypes.number.isRequired,
        carbs: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        history: PropTypes.arrayOf(
            PropTypes.shape({
                amount: PropTypes.number.isRequired,
                customerId: PropTypes.string.isRequired,
                date: PropTypes.string.isRequired,
            }),
        ).isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        protein: PropTypes.number.isRequired,
    }).isRequired,
};



export default function CollapsibleTable(data) {
    const [payload, setPayload] = React.useState({
        newsData: null,
        loading: true,
    })

    React.useEffect(() => {
        axios.get('http://localhost:1234/news/')
            .then(result => {
                console.log(result.data.data);
                setPayload({
                    newsData: result.data.data,
                    loading: false,
                });

            })
            .catch(err => console.log(err))
    })


    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>S/N</TableCell>
                        <TableCell align="right">Title</TableCell>
                        <TableCell align="right">Posted by</TableCell>
                        {/* <TableCell align="right">Image</TableCell> */}
                        <TableCell align="right">Edit</TableCell>
                        <TableCell align="right">Delete</TableCell>
                    </TableRow>
                </TableHead>
                {payload.loading
                    ?
                    'Loading'
                    :
                    <TableBody>
                        {payload.newsData.map((row, index) => (
                            <Row key={row._id} row={row} sn={index} />
                        ))}
                    </TableBody>


                }
            </Table>
        </TableContainer>
    );
}
