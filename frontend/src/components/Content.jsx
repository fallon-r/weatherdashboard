import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container"
import Paper from "@material-ui/core/Paper";

const Content = () => {



  return (
      <Container  alignItems="center" >

    <Grid >
      <Grid item xs={12}>
        <Paper style={{ minHeight: "55vh" }}>
          <h1>I am the paper, now</h1>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Grid container direction="row" justify="space-evenly" alignItems="center">
          <Grid item >
            <Paper>text</Paper>
          </Grid>
          <Grid item >
            <Paper>text</Paper>
          </Grid>
          <Grid item >
            <Paper>text</Paper>
          </Grid>
          <Grid item >
            <Paper >text</Paper>
          </Grid>
          <Grid item >
            <Paper >text</Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    </Container>

  );
};

export default Content;
