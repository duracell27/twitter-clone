import React from 'react'
import { Avatar, Grid, IconButton, Paper, Typography} from '@material-ui/core'
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import CachedOutlinedIcon from '@material-ui/icons/CachedOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';
import classNames from 'classnames'
import { useHomeStyles } from '../pages/Home';

interface TweetProps {
    classes: ReturnType<typeof useHomeStyles>,
    user: {
        fullName: string,
        username: string,
        avatarUrl: string,
    },
    text: string
}

export const Tweet: React.FC<TweetProps> = ({user, text, classes}: TweetProps):React.ReactElement => {
    return (
        <Paper className={classNames(classes.tweet, classes.tweetsHeader)} variant='outlined'>
              <Grid container spacing={3}>
                <Grid item xs={2}>
                  <Avatar className={classes.tweetAva} alt="Remy Sharp" src={user.avatarUrl} />
                </Grid>
                <Grid item xs={10}>
    <b>{user.fullName}</b> <span className={classes.tweetUserLink}>@{user.username}</span>&nbsp;<span className={classes.tweetUserLink}> 1 год.</span>
    <Typography>{text}</Typography>
                  <div className={classes.tweetButtons}>
                    <div>
                      <IconButton >
                        <ChatBubbleOutlineOutlinedIcon color='primary' className={classes.tweetButtonsNums} />
                      </IconButton>
                      <span className={classes.tweetButtonsNums}>1</span>
                    </div>
                    <div>
                      <IconButton >
                        <CachedOutlinedIcon color='primary' className={classes.tweetButtonsNums} />
                      </IconButton>
                      <span className={classes.tweetButtonsNums}>1</span>
                    </div>
                    <div>
                      <IconButton >
                        <FavoriteBorderOutlinedIcon color='primary' className={classes.tweetButtonsNums} />
                      </IconButton>
                      <span className={classes.tweetButtonsNums}>1</span>
                    </div>
                    <div>
                      <IconButton >
                        <PublishOutlinedIcon color='primary' className={classes.tweetButtonsNums} />
                      </IconButton>
                      <span className={classes.tweetButtonsNums}>1</span>
                    </div>

                  </div>
                </Grid>
              </Grid>
            </Paper>
    )
}
