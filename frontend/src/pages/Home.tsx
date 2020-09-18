import { Container, createStyles, Grid, InputBase, makeStyles, Paper, Typography, withStyles } from '@material-ui/core'
import React from 'react'

import grey from '@material-ui/core/colors/grey';
import { Tweet } from '../components/Tweet';
import { SideMenu } from '../components/SideMenu';


export const useHomeStyles = makeStyles(() => ({
  wrapper: {
    height: '100vh'
  },
  logo: {
    margin: '15px 0'
  },
  logoIcon: {
    fontSize: 36
  },
  sideMenuList: {
    listStyle: 'none',
    margin: 0,
    padding: 0
  },
  sideMenuListItem: {
    display: 'flex',
    alignItems: 'center'
  },
  sideMenuItems:{
    display: 'flex',
    alignItems: 'center',
    padding: '5px 15px',
    borderRadius: 30,
    cursor: 'pointer',
    marginBottom: 10,
    '&:hover': {
      backgroundColor: 'rgba(29, 161, 242, 0.2)'
    }
  },
  sideMenuListItemLable: {
    fontWeight: 700,
    fontSize: 20,
    marginLeft: 10
  },
  sideMenuListItemIcon: {
    fontSize: 28,
  },
  tweetsWrapper: {
    borderRadius: 0,
    height: '100%',
    borderBottom: 0,
    borderTop: 0
  },
  tweetsHeader: {
    borderRadius: 0,
    borderLeft: 0,
    borderRight: 0,
    borderTop: 0,
    padding: '15px 15px',
    '& h6': {
      fontWeight: 800
    }
  },
  tweetUserLink: {
    color: grey[500]
  },
  tweetButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '85%'
  },
  tweetButtonsNums: {
    fontSize: 16,
  },
  tweet: {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: grey[100],
    }
  },
  tweetAva: {
    cursor: 'pointer',
    width: 60,
    height: 60,
    marginLeft: 11,
    marginTop: 5
  },
  sideMenuTweetButton:{
    width: '100%'
  }
}))

const SearchTextField = withStyles(() =>
  createStyles({
    input: {
      borderRadius: 30,
      backgroundColor: '#e6ecf0',

    }
  })
)(InputBase);


export const Home: React.FC = (): React.ReactElement => {

  const classes = useHomeStyles()

  return (
    <Container className={classes.wrapper} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <SideMenu classes={classes}/>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.tweetsWrapper} variant='outlined' style={{ height: '100%' }} >
            <Paper className={classes.tweetsHeader} variant='outlined'>
              <Typography variant='h6'>Головна</Typography>
            </Paper>
            <Tweet classes={classes} text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatibus deleniti atque amet ipsum reiciendis recusandae! Voluptatem vitae atque sequi.'
            user={{
              fullName: 'John Cencenati',
              username: 'cencenati',
              avatarUrl: 'https://images.unsplash.com/photo-1598966739654-5e9a252d8c32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',}}/>
              <Tweet classes={classes} text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatibus deleniti atque amet ipsum reiciendis recusandae! Voluptatem vitae atque sequi.'
            user={{
              fullName: 'John Cencenati',
              username: 'cencenati',
              avatarUrl: 'https://images.unsplash.com/photo-1598966739654-5e9a252d8c32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',}}/>
              <Tweet classes={classes} text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatibus deleniti atque amet ipsum reiciendis recusandae! Voluptatem vitae atque sequi.'
            user={{
              fullName: 'John Cencenati',
              username: 'cencenati',
              avatarUrl: 'https://images.unsplash.com/photo-1598966739654-5e9a252d8c32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',}}/>
              <Tweet classes={classes} text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatibus deleniti atque amet ipsum reiciendis recusandae! Voluptatem vitae atque sequi.'
            user={{
              fullName: 'John Cencenati',
              username: 'cencenati',
              avatarUrl: 'https://images.unsplash.com/photo-1598966739654-5e9a252d8c32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',}}/>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <SearchTextField placeholder="Пошук по твітеру" fullWidth />
        </Grid>
      </Grid>
    </Container>
    
  )
}
