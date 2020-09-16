import React from 'react'
import { Button, makeStyles, Typography } from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { ModalBlock } from '../components/ModakBlock';


export const useStylesSignIn = makeStyles((theme) => ({
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
    const classes = useStylesSignIn()


    const [visibleModal, setVisibleModal] = React.useState<'signIn' | 'signUp'>();

    const handleClickOpenSignIn = (): void => {
        setVisibleModal('signIn');
    };

    const handleClickOpenSignUp = (): void => {
        setVisibleModal('signUp');
    };

    const handleCloseModal = (): void => {
        setVisibleModal(undefined);
    };


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
                    <Button onClick={handleClickOpenSignUp} className={classes.loginSideButton} variant='contained' color='primary' fullWidth>Зареєструватися</Button>
                    <Button onClick={handleClickOpenSignIn} className={classes.loginSideButton} variant='outlined' color='primary' fullWidth>Увійти</Button>
                </div>
            </div>
            <ModalBlock
                visible={visibleModal === 'signIn'}
                onClose={handleCloseModal}
                classes={classes}
                title="Войти в аккаунт">
                <FormControl component="fieldset" fullWidth>
                    <FormGroup aria-label="position" row>
                        <TextField
                            autoFocus
                            id="email"
                            label="E-Mail"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="filled"
                            type="email"
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            id="password"
                            label="Пароль"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="filled"
                            type="password"
                            fullWidth
                        />
                        <Button onClick={handleCloseModal} variant="contained" color="primary" fullWidth>
                            Войти
                </Button>
                    </FormGroup>
                </FormControl>
            </ModalBlock>
            <ModalBlock
                visible={visibleModal === 'signUp'}
                onClose={handleCloseModal}
                classes={classes}
                title="Создайте учетную запись">
                <FormControl  component="fieldset" fullWidth>
                    <FormGroup aria-label="position" row>
                        <TextField
                            
                            autoFocus
                            id="name"
                            label="Имя"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="filled"
                            type="name"
                            fullWidth
                        />
                        <TextField
                            
                            autoFocus
                            id="email"
                            label="E-Mail"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="filled"
                            type="email"
                            fullWidth
                        />
                        <TextField
                            
                            autoFocus
                            id="password"
                            label="Пароль"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="filled"
                            type="password"
                            fullWidth
                        />
                        <Button variant="contained" color="primary" fullWidth>
                            Далее
                </Button>
                    </FormGroup>
                </FormControl>
            </ModalBlock>

        </div>
    )
}

export default SignIn