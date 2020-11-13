import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const Content = () => {
    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
        >
            <Grid item xs={12}>
                <Paper style={{minHeight:'55vh' }}>
                <h1>I am the paper, now</h1>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper xs="2"></Paper>
                <Paper xs="2"></Paper>
                <Paper xs="2"></Paper>
                <Paper xs="2"></Paper>
                <Paper xs="2"></Paper>
            </Grid>


        </Grid>
    )
}

export default Content
