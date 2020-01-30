import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { paddingDownSm, rootSmXl } from './helper/DefaultStyle';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        [theme.breakpoints.down('sm')]: {
            mainRoot: {
                backgroundColor: 'black'
            },
            root: {
                padding: paddingDownSm
            },
            myFont: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 12,
                color: 'white'
            }
        },
        [theme.breakpoints.between('sm', 'xl')]: {
            mainRoot: {
                backgroundColor: 'black'
            },
            ...rootSmXl,
            myFont: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 15,
                color: 'white'
            }
        },
        root: {
            maxWidth: 1280,
            margin: '0 auto',
            position: 'relative'
        }
    })
)

const Footer = () => {

    const classes = useStyles({});

    return (
        <Grid container className={classes.mainRoot}>
            <Grid container className={classes.root}>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                    <Typography className={classes.myFont}>© 2000 - 2020 АО "Банк ЦентрКредит"</Typography>
                    <Typography className={classes.myFont}>Все права защищены.</Typography>
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                    <Typography className={classes.myFont}>Лицензия на проведение банковских и иных операций и деятельности на рынке ценных бумаг №1.2.25/195/34 от 28.01.2015 выданная НБ РК.</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Footer;