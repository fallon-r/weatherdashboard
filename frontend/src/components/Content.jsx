import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container"
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const Content = (props) => {

  console.log(props)

  return (
      <Container maxWidth="md">

    <Grid container justify="center" alignItems="center">
      <Grid item xs={12} style={{paddingBottom:'4vh', paddingTop:'4vh'}}>
        <Container style={{backgroundImage:'url(https://picsum.photos/500)'}}>

        <Card style={{ minHeight: "55vh", textAlign:'center'}} >
          <CardContent>
            Main Text
          </CardContent>
        </Card>
        </Container>
      </Grid>
      <Grid item xs={12}>
        <Grid container direction="row" justify="space-evenly" alignItems="stretch" style={{paddingBottom:'2vh'}}>
          <Grid item >
            <Card>
              <CardContent>Text</CardContent>
            </Card>
          </Grid>
          <Grid item >
           <Card>
             <CardContent>Text</CardContent>
           </Card>
          </Grid>
          <Grid item >
           <Card>
             <CardContent>Text</CardContent>
           </Card>
          </Grid>
          <Grid item >
            <Card>
              <CardContent>Text</CardContent>
            </Card>
          </Grid>
          <Grid item >
           <Card>
             <CardContent>Text</CardContent>
           </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    </Container>

  );
};

export default Content;
