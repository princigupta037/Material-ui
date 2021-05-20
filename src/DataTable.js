import { React, useState, useEffect } from 'react'
import axios from 'axios';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { DataGrid } from '@material-ui/data-grid';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

function DataTable() {
    const classes = useStyles();
    const [isData, setIsData] = useState(true)
    const [data, setData] = useState([]);
    useEffect(() => {
        if (isData == true) {
            axios.get('https://api.publicapis.org/entries')
                .then(function (response) {
                    setData(response.data.entries);
                    return response;
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }, [isData])

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>API</StyledTableCell>
                        <StyledTableCell align="right">Description</StyledTableCell>
                        <StyledTableCell align="right">Link</StyledTableCell>
                        <StyledTableCell align="right">Category</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item) => (
                        <StyledTableRow key={item.API}>
                            <StyledTableCell component="th" scope="item">
                                {item.API}
                            </StyledTableCell>
                            <StyledTableCell align="right">{item.Description}</StyledTableCell>
                            <StyledTableCell align="right">{item.Link}</StyledTableCell>
                            <StyledTableCell align="right">{item.Category}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default DataTable
