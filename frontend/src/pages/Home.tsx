import { Grid } from '@material-ui/core'
import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';


export const Home: React.FC = (): React.ReactElement => {
    return (
        <div>
            <Grid container spacing={3}>
        <Grid item xs={1}>
          <TwitterIcon color='primary'/>
        </Grid>
        <Grid item xs={7}>
          <h1>2</h1>
        </Grid>
        <Grid item xs={4}>
          <h1>3</h1>
        </Grid>
      </Grid>
        </div>
        
    )
}
