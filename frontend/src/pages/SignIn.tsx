import React from 'react'
import { Button, makeStyles, Typography } from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { relative } from 'path';

const useClasses = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: '100vh'
    },
    blueBlock: {
        position: 'relative',
        backgroundColor: '#71c9f8',
        flex: '0 0 50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    blueBigIcon: {
        position: 'absolute',
        left: '80%',
        top: '55%',
        transform: 'translate(-50%, -50%)',
        width: '250%',
        height: '200%'

    },
    blueBlockInfo: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        width: 380,
        position: 'relative',
        '& li': {
            marginBottom: 40
        },
        '& h6': {
            display: 'flex',
            alignItems: 'top',

            color: 'white',
            fontWeight: 700,
            fontSize: 20,
        }
    },
    blueBlockInfoIcon: {
        fontSize: 27,
        marginRight: 10,
        marginTop: 7,
    },
    loginBlock: {
        flex: '0 0 50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    twitterIcon: {
        fontSize: 50,
    },
    loginSideWrapper: {
        width: '380px'
    },
    loginSideTitle: {
        marginTop: 20,
        marginBottom: 45,
        fontSize: 35,
        fontWeight: 700
    },
    loginSideButton: {
        marginTop: 10
    }
}))

function SignIn() {
    const classes = useClasses()

    return (
        <div className={classes.wrapper}>
            <div className={classes.blueBlock}>
                <TwitterIcon color='primary' className={classes.blueBigIcon} />
                <div>
                    <ul className={classes.blueBlockInfo}>
                        <li><Typography variant='h6'><SearchIcon className={classes.blueBlockInfoIcon} />Читайте те, що вам цікаво.</Typography> </li>
                        <li><Typography variant='h6' ><PeopleOutlineIcon className={classes.blueBlockInfoIcon} />Послухайте, про що говорять люди.</Typography></li>
                        <li><Typography variant='h6'><ChatBubbleOutlineIcon className={classes.blueBlockInfoIcon} />Долучайтеся до розмов.</Typography></li>
                    </ul>
                </div>
            </div>
            <div className={classes.loginBlock}>
                <div className={classes.loginSideWrapper}>
                    <TwitterIcon color='primary' className={classes.twitterIcon} />
                    <Typography className={classes.loginSideTitle} variant='h4'>Дізнайтеся, що відбувається у світі просто зараз</Typography>
                    <Typography><b>Приєднуйтеся до Твіттера вже сьогодні.</b></Typography>
                    <Button className={classes.loginSideButton} variant='contained' color='primary' fullWidth>Зареєструватися</Button>
                    <Button className={classes.loginSideButton} variant='outlined' color='primary' fullWidth>Увійти</Button>
                </div>
            </div>
            
        </div>
    )
}

export default SignIn