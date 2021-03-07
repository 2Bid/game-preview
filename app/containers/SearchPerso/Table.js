import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const rows = [];

export default function PersoTable(props) {
  const classes = useStyles();
  const { perso } = props;

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="center">name</TableCell>
            <TableCell align="center">Note</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Image</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {perso.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.genres.name}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.rating}/5</TableCell>
              <TableCell align="right">{row.released}</TableCell>
              <TableCell align="right">
                <img
                  style={{ height: '70px' }}
                  alt="gamepic"
                  src={row.background_image}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}