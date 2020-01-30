import React from "react";
import { Grid, Select, MenuItem } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      padding: '20px 60px'
    },
    btn: {
      backgroundColor: '#27AE60',
      borderRadius: 4,
      display: 'block',
      padding: '15px 30px',
      color: 'white',
      fontSize: 14,
      textDecoration: 'none',
      textAlign: 'center',
      '&:hover': {
        backgroundColor: '#52BE80'
      }
    },
    carousel: {
      width: '100vw',
      boxSizing: 'border-box',
      padding: '0 100px',
      position: 'relative',
      '&:after': {
        content: ' '
      },
      '&:before': {
        content: ' '
      }
    },
    innerCarousel: {
      display: 'flex',
      width: 'calc((100vw - 200px) * 4)',
      justifyContent: 'space-between',
      zIndex: 2,
      position: 'relative',
      transition: 'transform 500ms ease',
      // transform: 'translateX(calc(-100vw + 180px))',
      '& > a': {
        display: 'block',
        width: 'calc(100vw - 200px)',
        '& > img': {
          borderRadius: 6,
          width: '100%',
          padding: '0 10px',
          boxSizing: 'border-box'
        }
      }
    },
    leftArrow: {
      position: 'absolute',
      backgroundColor: 'rgba(0,0,0,0.5)',
      width: '100px',
      zIndex: 3,
      left: 0,
      top: 0,
      bottom: 0
    },
    rightArrow: {
      position: 'absolute',
      backgroundColor: 'rgba(0,0,0,0.5)',
      width: '100px',
      zIndex: 3,
      right: 0,
      top: 0,
      bottom: 0
    },
    banner: {
      display: 'block',
      position: 'relative',
      '& > a': {
        display: 'block',
        '& > img': {
          width: '100%'
        }
      }
    },
    select: {
      color: 'white',
      '&:before': {
        borderColor: 'white',
      },
      '&:after': {
        borderColor: 'white',
      }
    },
    icon: {
      fill: 'white',
    },
    imgBanner: {
      display: 'none'
    },
    imgBanner_desc: {
      display: 'block'
    },
    [theme.breakpoints.down("sm")]: {
      imgBanner: {
        display: 'block'
      },
      imgBanner_desc: {
        display: 'none'
      }
    }
  })
);

const Header = (props: any) => {
  const classes = useStyles({});
  const [open, setOpen] = React.useState(true);
  const [carousel, setCarousel] = React.useState(0);

  // const handleSetCarousel = (c: boolean) => {
  //   setCarousel(c)
  // }

  const handleLangChange = (lang: any) => {
    props.changeLang(lang)
  }

  const carouselMove = (isLeft: boolean) => {
    if (isLeft) {
      if(carousel === 0) {
        setCarousel(3)
      }else {
        setCarousel(carousel - 1)
      }
    }else {
      if(carousel === 3) {
        setCarousel(0)
      }else {
        setCarousel(carousel + 1)
      }
    }
  }

  return (
    <Grid container direction="column" style={{ display: 'block' }}>
      {/* <Grid item container justify="space-between" className={classes.header}>
        <Grid item>
          <a href="/"><img src="logo.svg" alt="BCC logo"/></a>
        </Grid>
        <Grid item>
          <a href="/" className={classes.btn}>Заказать карту</a>
        </Grid>
      </Grid> */}
      <Grid item>
        {/* <div className={classes.carousel}>
            <div className={classes.leftArrow} onClick={() => carouselMove(true)}></div>
            <div className={classes.rightArrow} onClick={() => carouselMove(false)}></div>
            <div className={classes.innerCarousel} style={{ transform: `translateX(calc((-100vw + 200px) * ${carousel}))` }}>
              <a href="" style={{ transform: carousel === 3 ? 'translateX(calc((100vw - 200px) * 4))' : '' }}><img src="slide1.svg" alt=""/></a>
              <a href=""><img src="slide2.svg" alt=""/></a>
              <a href=""><img src="slide3.svg" alt=""/></a>
              <a href="" style={{ transform: carousel === 0 ? 'translateX(calc((-100vw + 200px) * 4))' : '' }}><img src="slide4.svg" alt=""/></a>
            </div>
        </div> */}
          <div className={classes.banner}>
            <a href="https://www.bcc.kz/kartakarta/" target="_blank">
              <img className={classes.imgBanner_desc} src="cardcardbanner2.svg" alt=""/>
              <img className={classes.imgBanner} src="kartakarta4.png" alt=""/>
            </a>
          </div>
      </Grid>
      {/* <Grid style={{ display: 'block', position: 'absolute', top: 20, right: 20 }}>
              <Select
                className={classes.select}
                value={props.lang}
                onChange={(e: any) => handleLangChange(e.target.value)}
                inputProps={{
                  classes: {
                    icon: classes.icon,
                  },
                }}
              >
                <MenuItem value="ru">Рус</MenuItem>
                <MenuItem value="kz">Каз</MenuItem>
              </Select></Grid> */}
    </Grid>
  );
};

export default Header;
