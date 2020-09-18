import React from 'react'
import { useHomeStyles } from '../pages/Home'
import { Button, IconButton, Typography } from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

interface SideMenuProps {
    classes: ReturnType<typeof useHomeStyles>
}

export const SideMenu: React.FC<SideMenuProps> = ({ classes }: SideMenuProps): React.ReactElement => {
    return (
        <ul className={classes.sideMenuList}>
            <li className={classes.sideMenuListItem}>
                <IconButton className={classes.logo} color='primary' >
                    <TwitterIcon className={classes.logoIcon} />
                </IconButton>
            </li>
            <li className={classes.sideMenuListItem}>
                <div className={classes.sideMenuItems}>
                <SearchIcon className={classes.sideMenuListItemIcon} />
                <Typography className={classes.sideMenuListItemLable} variant='h6'>Пошук</Typography></div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div className={classes.sideMenuItems}>
                <NotificationsNoneIcon className={classes.sideMenuListItemIcon} />
                <Typography className={classes.sideMenuListItemLable} variant='h6'>Сповіщення</Typography></div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div className={classes.sideMenuItems}>
                <MailOutlineIcon className={classes.sideMenuListItemIcon} />
                <Typography className={classes.sideMenuListItemLable} variant='h6'>Повідомлення</Typography></div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div className={classes.sideMenuItems}>
                <BookmarkBorderIcon className={classes.sideMenuListItemIcon} />
                <Typography className={classes.sideMenuListItemLable} variant='h6'>Закладки</Typography></div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div className={classes.sideMenuItems}>
                <ListAltIcon className={classes.sideMenuListItemIcon} />
                <Typography className={classes.sideMenuListItemLable} variant='h6'>Список</Typography></div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div className={classes.sideMenuItems}>
                <PermIdentityIcon className={classes.sideMenuListItemIcon} />
                <Typography className={classes.sideMenuListItemLable} variant='h6'>Профіль</Typography></div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div className={classes.sideMenuTweetButton}>
                    <Button  variant='contained' color='primary' fullWidth >Твітнути</Button>
                </div>
            </li>
        </ul>
    )
}
