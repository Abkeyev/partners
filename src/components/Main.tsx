import React from "react";
import { Grid, FormControlLabel, Checkbox, FormControl, Input, InputAdornment, Button } from "@material-ui/core";
import { makeStyles, createStyles, withStyles, Theme } from "@material-ui/core/styles";
import PublicIcon from '@material-ui/icons/Public';
import StoreIcon from '@material-ui/icons/Store';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import LinkIcon from '@material-ui/icons/Link';
import TextField from "@material-ui/core/TextField";
import MaskedInput from "react-maskedinput";
import CloseIcon from '@material-ui/icons/Close';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import Tooltip from '@material-ui/core/Tooltip';
import { BccInputText, BccSwitch } from './index';
import MenuItem from '@material-ui/core/MenuItem';
import { useTranslation } from 'react-i18next';
import SearchIcon from '@material-ui/icons/Search';
import emailjs from 'emailjs-com';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navCard: {
      color: '#141414',
      textDecoration: 'none',
      fontSize: 14,
      '&:hover': {
        textDecoration: 'underline'
      }
    },
    navArrow: {
      margin: '0 15px'
    },
    partners: {
      color: '#B9B9B9',
      fontSize: 14,
      cursor: 'pointer',
      '&:hover': {
        textDecoration: 'underline',
      }
    },
    title: {
      color: '#141414',
      fontSize: 24,
      margin: '20px 0 40px',
      textAlign: 'center'
    },
    selector: {
      backgroundColor: "turquoise !important",
      color: "white",
      fontWeight: 600
    },
    contentItem: {
      display: 'grid',
      alignContent: 'space-between',
      border: '1px solid #E8E8E8',
      borderRadius: 4,
      cursor: 'pointer',
      padding: 15,
      margin: '0 10px',
      textAlign: 'center',
      transform: 'scale(.9825)',
      transition: 'box-shadow .19s ease-out 0s,transform .19s ease-out 0s',
      '&:hover': {
        transform: 'scale(1)',
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.15)'
      },
    },
    contentItemDetail: {
      cursor: 'default',
      transform: 'scale(1)',
      '&:hover': {
        transform: 'scale(1)',
        boxShadow: 'none'
      }
    },
    itemGrided: {
      '& > img': {
        display: 'block',
        width: 'auto',
        margin: '0 auto',
        marginBottom: 15
      },
      '& > h1': {
        fontSize: 16,
        color: '#5B5B5B',
        margin: '0 0 5px',
        textAlign: 'center'
      },
      '& > h2': {
        fontSize: 12,
        color: '#898989',
        margin: '0 0 8px',
        textAlign: 'center',
        fontWeight: 'normal'
      },
      '& > span': {
        border: '1px solid #F2994A',
        color: '#f2994a',
        borderRadius: 20,
        padding: '0 10px',
        fontSize: 11,
        width: 'max-content',
        display: 'block',
        margin: '0 auto',
        height: 26,
        lineHeight: '26px',
      }
    },
    cashback: {
      color: '#27AE60',
      border: '1px solid #27AE60',
      borderRadius: 20,
      display: 'block',
      width: 'max-content',
      textAlign: 'center',
      height: 26,
      lineHeight: '26px',
      margin: '0 auto',
      marginTop: 10,
      position: 'relative',
      fontSize: 11,
      boxSizing: 'border-box',
      padding: '0 30px 0 10px',
      fontWeight: 'normal',
      '& > span': {
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        borderRadius: '50%',
        backgroundColor: '#27AE60',
        color: 'white',
        width: 24,
        height: 24,
        border: '1px solid white',
        boxSizing: 'border-box',
        lineHeight: '22px',
        textAlign: 'center',
        fontSize: 10
      }
    },
    special: {
      '&::before': {
        content: "url(bcc_sl.svg)",
        position: 'absolute',
        right: '-42%',
        top: '-30%'
      }
    },
    itemsContainer: {
      display: 'flex'
    },
    mainContainer: {
    },
    navbar: {
      padding: '25px 75px'
    },
    titleName:{
      fontSize: 24,
      textAlign: 'center'
    },
    breadCrumbs:{
      margin: '20px 0'
    },
    viewPay: {
      display: 'flex',
      marginTop: 10,
      '& > span': {
        marginRight: 15,
        '& > svg': {
          fill: '#B9B9B9'
        }
      }
    },
    mainPartners: {
      display: 'block',
      maxWidth: '1280px',
      width: '100%',
      boxSizing: 'border-box',
      padding: '0 50px',
      margin: 'auto',
      marginBottom: 50
    },
    blockHeight: {
      height: '100%',
      '& > h1': {
        marginLeft: '10px'
      }
    },
    blockGrids: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(210px,1fr))',
      gridRowGap: 20,
      height: '100%'
    },
    // Alimzhan CSS
    cardHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '1px solid #E8E8E8',
      paddingBottom: '15px'
    },
    cardHeader_left: {
      display: 'flex',
      alignItems: 'center',
      width: '80%'
    },
    iconBack: {
      paddingRight: '15px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      '& > svg': {
        color: '#28ae60',
        padding: '3px',
        background: 'transparent',
        border: '1px solid',
        borderRadius: '5px',
        transition: '.3s'
      }
    },
    cardHeader_title: {
      '& > h1': {
        fontSize: 16,
        color: '#5B5B5B',
        margin: '0 0 5px',
        textAlign: 'left',
      },
      '& > h2': {
        fontSize: 12,
        color: '#898989',
        margin: '0',
        textAlign: 'left',
        fontWeight: 'normal'
      },
    },
    partnerLogo_list: {
      display: 'block',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: 60,
      margin: '10px auto'
    },
    partnerLogo: {
      display: 'block',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      width: '10%',
      height: 44,
      margin: '0 15px'
    },
    lineTop: {
      display: 'block',
      height: 44,
      borderLeft: '1px solid #E8E8E8',
      width: 1
    },
    btnLink: {
      border: '1px solid #E8E8E8',
      background: 'white',
      display: 'flex',
      alignItems: 'center',
      color: "#27AE60",
      padding: '5px 20px',
      borderRadius: 4,
      textTransform: 'none',
      '& svg': {
        marginRight: '5px'
      }
    },

    cardBody: {
      display: 'flex',
      alignItems: 'flex-start',
      paddingBottom: '3rem'
    },
    bodyPeriod: {
      marginTop: 15,
      paddingBottom: 7,
      borderBottom: '1px solid #E8E8E8;',
      '& > h3': {
        fontSize: 16,
        color: '#141414',
        margin: '0',
        textAlign: 'left',
        fontWeight: '500',
        marginBottom: 5
      },
      '& > span': {
        fontSize: 14,
        color: '#5B5B5B',
        margin: '0',
        display: 'block',
        textAlign: 'left',
        fontWeight: 'normal'
      },
    },
    bodyCashback: {
      marginTop: 7,
      '& > h3': {
        fontSize: 16,
        color: '#141414',
        margin: '0',
        textAlign: 'left',
        fontWeight: '500',
        marginBottom: 5
      },
      '& > span': {
        fontSize: 14,
        color: '#5B5B5B',
        margin: '0',
        display: 'block',
        textAlign: 'left',
        fontWeight: 'normal'
      },
      '& > small': {
        fontSize: 11,
        marginTop: 10,
        color: '#5B5B5B',
        margin: '0',
        display: 'block',
        textAlign: 'left',
        fontWeight: 'normal'
      },
    },
    infoCashback: {
      position: 'relative',
      '& > span': {
        width: '32px',
        height: '32px',
        fontSize: 15,
        fontWeight: 500,
        display: 'inline-flex',
        borderRadius: '50%',
        background: '#27AE60',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
      },
    },
    
    bodyDescription: {
      marginTop: 15,
      '& > h3': {
        fontSize: 16,
        color: '#141414',
        margin: '0',
        textAlign: 'left',
        fontWeight: '500',
        marginBottom: 5
      },
      '& > span': {
        fontSize: 14,
        color: '#5B5B5B',
        margin: '0',
        display: 'block',
        textAlign: 'left',
        lineHeight: '20px',
        fontWeight: 'normal'
      },
    },
    contactsInfo: {
      display: 'flex',
      marginTop: 15
    },
    bodyContacts: {
      marginRight: '30px',
      '& > h3': {
        fontSize: 16,
        color: '#141414',
        margin: '0',
        textAlign: 'left',
        fontWeight: '500',
        marginBottom: 5
      },
      '& > a': {
        fontSize: 14,
        color: '#27AE60',
        margin: '0',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'left',
        lineHeight: '20px',
        fontWeight: 'normal',
        textDecoration: 'none',
        transition: '.3s',
        '&:hover': {
          textDecoration: 'underline',
        },
        '& > svg': {
          fontSize: 14,
          color: '#27AE60',
          marginRight: 5
        },
        '& > small': {
          fontSize: 11,
          color: '#5B5B5B'
        },
      },
    },
    bodyTimework: {
      '& > h3': {
        fontSize: 16,
        color: '#141414',
        margin: '0',
        textAlign: 'left',
        fontWeight: '500',
        marginBottom: 5
      },
      '& > span': {
        fontSize: 14,
        color: '#5B5B5B',
        margin: '0',
        display: 'block',
        textAlign: 'left',
        lineHeight: '20px',
        fontWeight: 'normal'
      },
      '& > small': {
        fontSize: 11,
        marginTop: 5,
        color: '#5B5B5B',
        margin: '0',
        display: 'block',
        textAlign: 'left',
        fontWeight: 'normal'
      },
    },
    
    cardFooter: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderTop: '1px solid #E8E8E8',
      padding: '5px 0'
    },
    cardViewPay: {
      display: 'flex',
      alignItems: 'center',
      marginTop: 10,
      '& > i': {
        marginRight: 15,
      },
      '& > span': {
        display: 'flex',
        alignItems: 'center',
        marginRight: 15,
        fontSize: '14px',
        lineHeight: '16px',
        color: '#B9B9B9',
        '& > svg': {
          fill: '#B9B9B9',
          marginRight: '5px'
        }
      }
    },
    paddingLeftRight: {
      padding: '0 15px 0 30px'
    },
    // ALimzhan CSS
    filterTitle: {
      fontSize: 16,
      color: '#444',
      margin: '0 0 10px',
      fontWeight: 'normal',
      display: 'flex',
      alignItems: 'center',
      marginTop: '20px'
    },
    container: {
      padding: 10,
      border: '1px solid #E8E8E8',
      borderRadius: 5,
      marginBottom: 10
    },
    switcher: {
      '& > span': {
        margin: 0
      }
    },
    line: {
      display: 'block',
      marginLeft: -10,
      height: 1,
      backgroundColor: '#E8E8E8',
      width: 'calc(100% + 20px)'
    },
    checkboxes: {
      '& span': {
        color: '#5B5B5B',
        fontSize: 16
      }
    },
    back: {
      '&:hover': {
        border: '1px solid #28ae60',
        background: '#28ae60',
        color: 'white'
      }
    },
    search: {
      margin: '0 0 0 10px',
      width: '100%'
    },
    social: {
      display: 'flex',
      alignItems: 'center',
      marginTop: 10,
      '& > a': {
        display: 'flex',
        marginRight: 10,
        '&:last-child': {
          marginRight: 0
        }
      }
    },
    dispMob: {
      display: 'none'
    },
    noPartners: {
      padding: '4rem 0',
      display: 'grid',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      '& > img': {
        display: 'block',
        margin: 'auto',
        marginBottom: 25
      }
    },
    text_noPartners: {
      '& > h2': {
        fontSize: 18,
        color: '#4F4F4F'
      },
      '& > a': {
        color: '#27AE60',
        textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline'
          }
      }
    },
    mainBg: {
      backgroundImage: 'url(partners_bg.svg)',
      backgroundSize: 'contain',
      backgroundPosition: 'right',
      backgroundRepeat: 'no-repeat',
      marginTop: '2rem'
  },
  myFont: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 32,
    textAlign: "center",
    color: 'white'
  },
  titlePartner: {
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "40px",
      marginBottom: 20
  },
  subtitlePartner: {
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "20px",
      color: "#5B5B5B",
      marginBottom: 10
  },
  buttonPartner: {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 10,
      color: "#5B5B5B",
      marginTop: 10
  },
  noteButtonPartner: {
      textTransform: "none",
      color: "#3F0259",
      fontSize: 16,
      marginTop: 10,
      paddingLeft: 20,
      paddingRight: 20,
      borderColor: "#3F0259"
  },
  //Modal
  cardModal: {
    borderRadius: '8px',
    padding: '2rem',
    width: '500px',
    margin: 'auto',
    position: 'fixed',
    top: '5%',
    left: 0,
    right: 0,
    border: '1px solid #E8E8E8',
    backgroundColor: 'white',
    display: 'none',
    zIndex: 2,
    '&.show': {
      display: 'block'
    },
  },
  bckdrop: {
    display: 'block',
    width: '100%',
    height: '100%',
    position: 'unset',
    zIndex: 1,
    top: 0,
    left: 0,
    background: '#00000054',
    '&.show': {
      position: 'fixed',
    },
  },
  headerModal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& > h4': {
      fontSize: '30px',
      margin: '10px 0'
    },
  },
  bodyModal: {

  },
  marInput: {
    margin: '5px 0',
    '& > label': {
      background: 'white',
      padding: '0 4px 0 2px'
    },
  },
  submit: {
      backgroundColor: '#28ae60',
      color: 'white'
  },
  exitBtn: {
    cursor: 'pointer'
  },
  //RESPNSIVE
    [theme.breakpoints.down("sm")]: {
      mainBg: {
        background: 'unset',
        margin: '2rem 0'
    },
      myFont: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 32,
        textAlign: "center",
        color: 'white'
      },
      titlePartner: {
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: "30px",
          marginBottom: 20
      },
      subtitlePartner: {
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: "16px",
          color: "#5B5B5B",
          marginBottom: 10
      },
      //Modal
      cardModal: {
        borderRadius: '8px',
        padding: '1rem',
        width: '90%',
        margin: 'auto',
        position: 'fixed',
        top: '5%',
        left: 0,
        right: 0,
        border: '1px solid #E8E8E8',
        backgroundColor: 'white',
        display: 'none',
        zIndex: 20,
        '&.show': {
          display: 'block'
        },
      },
      bckdrop: {
        display: 'block',
        width: '100%',
        height: '100%',
        position: 'unset',
        zIndex: 1,
        top: 0,
        left: 0,
        background: '#00000054',
        '&.show': {
          position: 'fixed',
        },
      },
      headerModal: {
        '& > h4': {
          fontSize: '30px',
          margin: '10px 0'
        }
      },
      bodyModal: {

      },
      marInput: {
        margin: '5px 0'
      },
      dispMob: {
        display: 'block !important',
        position: 'fixed',
        fontSize: '16px',
        width: '50%',
        padding: '13px 0',
        border: '2px solid #28ae60',
        margin: 'auto',
        bottom: '2%',
        zIndex: 15,
        left: 0,
        right: 0,
        background: '#28ae60',
        color: 'white',
        borderRadius: '30px'
      },
      filterMob: {
        display: 'none'
      },
      mobileFilter: {
        paddingBottom: '60px !important'
      },
      mainPartners: {
        display: 'block',
        width: '100%',
        margin: 'auto',
        maxWidth: '100%',
        padding: '0 16px',
      },
      contentItem: {
        display: 'block',
        margin: 0
      },
      cardHeader: {
        display: 'grid',
        justifyContent: 'unset'
      },
      btnLink: {
        marginTop: 10
      },
      cardBody: {
        display: 'block'
      },
      contactsInfo: {
        display: 'block'
      },
      bodyContacts: {
        marginBottom: '10px'
      },
      paddingLeftRight: {
        padding: 0
      },
      cardFooter: {
        display: 'block'
      },
      social: {
        justifyContent: 'center'
      },
      search: {
        margin: '0 !important'
      },
      blockHeight: {
        '& > h1': {
          marginLeft: 0
        }
      }
    },
    mobileFilter: {
      position: 'fixed',
      zIndex: 14,
      background: 'white',
      top: 0,
      overflowY: 'scroll',
      display: 'block',
      height: '100%',
      width: '100%',
      left: 0,
      right: 0,
      boxSizing: 'border-box',
      padding: '15px 10px'
    },
    clear: {
      background: '#FFFFFF',
      border: '1px solid #E8E8E8',
      borderRadius: 4,
      display: 'block',
      width: '100%',
      boxSizing: 'border-box',
      padding: '7px 14px',
      marginTop: 20,
      color: '#27AE60',
      fontSize: 14,
      cursor: 'pointer',
      '&:hover': {
        background: '#27AE60',
        color: '#FFFFFF'
      },
      '&:focus': {
        outline: 'none'
      }
    },
    addressList: {
      marginTop: 20,
      '& > h3': {
        fontSize: 16,
        color: '#141414',
        margin: '0',
        textAlign: 'left',
        fontWeight: '500',
        marginBottom: 5
      },
      '& > ul': {
        padding: 0,
        marginTop: 5,
        '& > li': {
            fontSize: 14,
            color: '#5B5B5B',
            margin: '0',
            display: 'block',
            textAlign: 'left',
            lineHeight: '20px',
            fontWeight: 'normal'
        }
      },
    },
  })
);

interface City {
    id: number;
    title: string;
}

interface Category {
    id: number;
    title: string;
}

interface Product {
  id: number;
  title: string;
  city: City[];
  img: string;
  category: Category;
  date: string;
  payment: string;
  cashback: number;
  special_best: boolean;
  pos: boolean;
  onlinePay: boolean;
  description: string;
  worktime: string;
  homePhone: string;
  mobilePhone: string;
  wpPhone: string;
  email: string;
  address: string[];
  social_link_fb: string;
  social_link_inst: string;
  social_link_vk: string;
  social_link_yt: string;
  websiteLink: string;
}

const products: Product[] = [{
  id: 0,
  title: 'Froot',
  city: [{
      id: 0,
      title: 'Алматы'
  }],
  img: 'froot.svg',
  category: {
    id: 9,
    title: "Магазин"
  },
  date: 'Действует до 1 апреля',
  payment: 'Расcрочка 3 мес.',
  cashback: 6,
  special_best: true,
  pos: true,
  onlinePay: false,
  description: "Магазины у дома Froot - сеть маленьких и мега удобных магазинов, где можно найти всё самое необходимое по отличным ценам.<br/>Продукты, бытовая химия, горячий кофе, вкусные сэндвичи, свежий попкорн и местные овощи можно заказать с доставкой за 15 минут!",
  worktime: "Пн-Вс - 08:00 - 24:00",
  homePhone: "",
  mobilePhone: "+7 707 000 3612",
  wpPhone: "+7 707 000 3612",
  email: "contact@thefroot.com",
  address: [
    "г. Алматы, Медеуский район, ул. Кунаева д. 119/47, кв. 30",
    "г. Алматы, Алмалинский район, ул. Байзакова, д. 263, ВП 541",
    "г. Алматы, Ауэзовский район, мкр 9, дом 3, кв 2 (Саина-Ю.Кима)",
    "г. Алматы, Медеуский район, мкр. Самал-2, д. 29, н.п. 4",
    "г. Алматы, Ауэзовский р-н мкр. 2, д. 40Г, н.п. 199",
    "г. Алматы, Бостандыкский район, ул Абиша Кекилбайулы, дом 97а",
    "г. Алматы, Жетысуйский район, Абылай хана проспект 18/Райымбека проспект 149",
    "г. Алматы, Турксибский район, Сейфуллина 47/53, уг. ул. Майбороды",
    "г. Алматы, Бостандыкский район, Маркова 53",
    "г. Алматы, Алмалинский район, улица Карасай батыра, дом 90\92, н.п. 45",
    "г. Алматы, Жетысуский район, Ул. Кудерина - ул. Сахалинская, д. 26",
    "г. Алматы, Бостандыкский район, ул. Солодовникова, д. 21, н.п. 1Е",
    "г. Алматы, Медеуский район, ул. Калдаякова д.51 кв 32"
  ],
  social_link_fb: "https://www.facebook.com/pg/thefrootmarket/",
  social_link_inst: "https://www.instagram.com/thefrootmarket/",
  social_link_vk: "",
  social_link_yt: "https://www.youtube.com/channel/UC5oj3FmSgwrbXcvWz1dgpqQ",
  websiteLink: "https://froot.kz",
}, {
  id: 15,
  title: "Keddo",
  city: [{
    id: 0,
    title: "Алматы"
  }, {
    id: 3,
    title: "Шымкент"
  }, {
    id: 4,
    title: "Кызылорда"
  }, {
    id: 6,
    title: "Тараз"
  }, {
    id: 7,
    title: "Нур-Султан"
  }],
  img: 'keddo.png',
  category: {
    id: 11,
    title: "Одежда и обувь"
  },
  date: '',
  payment: 'Расcрочка 3 мес.',
  cashback: 3,
  special_best: false,
  pos: true,
  onlinePay: false,
  description: "Keddo-сеть фирменных магазинов брендовой обуви! У нас вы найдете качественную ,трендовую обувь для каждого! Будь стильным - носи Keddo!",
  worktime: "Пн-Вс - 10:00 - 22:00",
  homePhone: "",
  mobilePhone: "+7 747 094 80 98",
  wpPhone: "+7 776 650 61 11",
  email: "keddo1kaz@yandex.kz",
  address: [
    "г. Тараз, ул. Толе би, д. 27, ТЦ MART",
    "г. Нур-Султан, просп. Кабанбай Батыра, д. 62. ТРЦ MEGA Silk Way",
    "г. Кызылорда, ул. Назарбаева 13а, ТРЦ Aray City Mall",
    "г. Шымкент, Тамерлановское шоссе д. 3/5, ТЦ Баян-Сұлу",
    "г. Алматы, ул. Розыбакиева, д. 263 А, ТРЦ MEGA – 2",
    "г. Алматы, ул. Макатаева 127/1 , ТЦ MEGA Park"
],
  social_link_fb: "",
  social_link_inst: "https://www.instagram.com/keddo_kazakhstan/",
  social_link_vk: "",
  social_link_yt: "",
  websiteLink: "http://focuseyecenter.kz/",
}, {
  id: 1,
  title: "СТРОЙКОМПЛЕКТ",
  city: [{
    id: 3,
    title: "Шымкент"
  }],
  img: 'stroi.png',
  category: {
    id: 10,
    title: "Ремонт"
  },
  date: '',
  payment: 'Расcрочка 3 мес.',
  cashback: 5,
  special_best: false,
  pos: true,
  onlinePay: false,
  description: "СТРОЙКОМПЛЕКТ - предлагает свои услуги для тех, кто решил начать строительство или ремонт. Здесь можно купить герметики и клеи, лакокрасочные материалы, строительные и отделочные материалы, сухие строительные смеси. История нашей компании начинается в 2003-тьем году. Ранее мы назывались Крепеж City. За более чем 15-ти летнюю историю ассортимент поставляемых товаров вырос более чем в 100 раз, и на сегодняшний день насчитывает более 10 000 различных товаров.",
  worktime: "Пн-Пт - 09:00 - 18:00<br/>Сб - 09:00-17:00<br/>Вс - 09:00-15:00",
  homePhone: "+8 (7252) 57-48-70",
  mobilePhone: "+7 707 553 97 43",
  wpPhone: "+7 707 553 97 43",
  email: "info@stkt.kz",
  address: [
    "г.Шымкент, ул. Желтоксан, 163"
  ],
  social_link_fb: "",
  social_link_inst: "https://www.instagram.com/stroykomplekt_shymkent/",
  social_link_vk: "",
  social_link_yt: "",
  websiteLink: "https://stkt.kz/",
}, {
  id: 2,
  title: 'Arua',
  city: [{
    id: 3,
    title: "Шымкент"
  }],
  img: 'arua.svg',
  category: {
    id: 7,
    title: "Товары для дома"
  },
  date: '',
  payment: 'Расcрочка 3 мес.',
  cashback: 8,
  special_best: false,
  pos: true,
  onlinePay: false,
  description: "ARUA – торговая марка самого крупного казахстанского производителя домашнего <br/>текстиля «АГФ групп». ARUA – представляет линейку постельного белья, произведенного<br/>из 100% экологически чистого хлопка. Это непревзойденный комфорт и удовольствие от<br/>сна. ARUA – это радость прикосновения.",
  worktime: "Пн-Пт - 9:00 – 19:00<br/>Сб-Вс - выходной",
  homePhone: "8 (7252) 92 15 30",
  mobilePhone: "+7 707 278 98 79",
  wpPhone: "+7 707 278 98 79",
  email: "sales1@agf.kz",
  address: [
    "г.Шымкент, площадь Аль-Фараби, ТРЦ 'Shymkent Plaza' 1 этаж",
    "г.Шымкент, ул.М.Х.Дулати 200 А, ТРЦ 'Hyper House'"
  ],
  social_link_fb: "",
  social_link_inst: "https://www.instagram.com/arua.bedding/",
  social_link_vk: "",
  social_link_yt: "",
  websiteLink: "http://aruabedding.com/",
}, {
  id: 3,
  title: "Магазин «Ксения»",
  city: [{
    id: 3,
    title: "Шымкент"
  }],
  img: 'clothes.svg',
  category: {
    id: 11,
    title: "Одежда и обувь"
  },
  date: '',
  payment: 'Расcрочка 3 мес.',
  cashback: 8,
  special_best: false,
  pos: true,
  onlinePay: false,
  description: "Магазин для успешных людей, которые ценят своё время и предпочитают приобретать <br/>качественную и стильную одежду на все случаи жизни.",
  worktime: "c 10:00 до 18:00",
  homePhone: "",
  mobilePhone: "+7 701 366 07 94",
  wpPhone: "+7 701 366 07 94",
  email: "",
  address: [
    "г.Шымкент, ул.Аскарова 13/1, ТД 'ЮГ-Сити', 1 этаж"
  ],
  social_link_fb: "",
  social_link_inst: "",
  social_link_vk: "",
  social_link_yt: "",
  websiteLink: "",}, {
    id: 4,
    title: 'Галактика',
    city: [{
      id: 1,
      title: "Кокшетау"
    }],
    img: 'furniture.svg',
    category: {
      id: 7,
      title: "Мебель"
    },
    date: '',
    payment: 'Расcрочка 6 мес.',
    cashback: 0,
    special_best: false,
    pos: true,
    onlinePay: false,
    description: "Производство и поставка мебели из Беларусии. Скорая помощь в выборе идеально комфортной мебели. В наличии все виды мебели. Доставка и сборка по городу БЕСПЛАТНО.<br/>Гарантия 24 месяца. @wladamebel. <br/>Приглашают оптовых покупателей к сотрудничеству.",
    worktime: "Пн-Вс - 9:00 - 19:00",
    homePhone: "",
    mobilePhone: "87084441918",
    wpPhone: "87084441918",
    email: "wlada_rk@yandex.ru",
    address: ["г. Кокшетау, ул. Байтурсынова, 19"],
    social_link_fb: "",
    social_link_inst: "",
    social_link_vk: "",
    social_link_yt: "",
    websiteLink: "",
  }, {
    id: 5,
    title: "Малыш",
    city: [{
      id: 2,
      title: "Петропавловск"
    }],
    img: 'item2.png',
    category: {
      id: 3,
      title: "Детские товары"
    },
    date: 'Действует до 1 апреля',
    payment: '',
    cashback: 30,
    special_best: true,
    pos: true,
    onlinePay: false,
    description: "«Малыш» - сеть магазинов игрушек.<br/>В нашем магазине вы найдёте огромный ассортимент оригинальных и эксклюзивных игрушек на любой вкус и бюджет.<br/>Все новинки, появляющиеся на мировом рынке, мы изучаем и предлагаем нашим покупателям.",
    worktime: "Пн-Вс - 10:00 - 20:00",
    homePhone: "",
    mobilePhone: "+7 705 119 88 55",
    wpPhone: "+7 705 119 88 55",
    email: "andrei-dyakin@mail.ru",
    address: [
      "г. Петропавловск, ул. Муканова, 53 (ТРЦ 'Семейный' (2 этаж)) – 10:00 до 20:00",
      "г. Петропавловск, ул. Сутюшева, 58Б (ТЦ 'Рахмет' (3 этаж)) – 10:00 до 21:00",
      "г. Петропавловск, ул. Жумабаева, 91 (ТРЦ 'Dostyq Mall' (3 этаж)) – 10:00 до 22:00"
    ],
    social_link_fb: "",
    social_link_inst: "",
    social_link_vk: "",
    social_link_yt: "",
    websiteLink: "",
  }, {
    id: 6,
    title: 'Окна SOK',
    city: [{
      id: 2,
      title: "Петропавловск"
    }],
    img: 'okna.png',
    category: {
      id: 10,
      title: "Ремонт"
    },
    date: '',
    payment: 'Расcрочка 12 мес.',
    cashback: 0,
    special_best: true,
    pos: true,
    onlinePay: false,
    description: "Окна SOK – изготовит для Вас пластиковые окна высокого качества<br/>*Окна любого цвета, арочные окна <br/>*Входные группы, витражи <br/>*Балконные ограждения с крышей <br/>*Обшивка балконов под ключ Гарантийное обслуживание до 3 лет.",
    worktime: "Пн-Пт - 10:00 - 19:00<br/>обед 13:00 ч. до 14:00 ч.<br/>Сб - 10:00 - 13:00<br/>Вс - выходной",
    homePhone: "8 (7152) 46 93 38",
    mobilePhone: "+7 777 619 80 29",
    wpPhone: "+7 777 619 80 29",
    email: "sputnikk@inbox.ru",
    address: ["г. Петропавловск, ул. Букетова, 44"],
    social_link_fb: "",
    social_link_inst: "https://www.instagram.com/okna_sok_petropavl/",
    social_link_vk: "",
    social_link_yt: "",
    websiteLink: "",
  }, {
    id: 7,
    title: "GALATEX",
    city: [{
      id: 1,
      title: "Кокшетау"
    }],
    img: 'all_for_home.svg',
    category: {
      id: 7,
      title: "Товары для дома"
    },
    date: '',
    payment: 'Расcрочка 6 мес.',
    cashback: 10,
    special_best: false,
    pos: true,
    onlinePay: false,
    description: "'GALATEX' - первый Казахстанский текстильный бренд! Пошив и продажа сертифицированных комплектов постельного белья!<br/> Реализация оптом и в розницу. Интернет магазин.<br/>Для постельного белья мы выбираем только натуральные ткани из 100% хлопка, которые хорошо держат цвет и устойчивы к износу<br/>Материалы для пошива белья закупаются у проверенного, надежного поставщика, имеющего сертификаты качества<br/>В нашем швейном цеху работают только профессиональные специалисты, благодаря чему мы всегда получаем отличный результат<br/>Каждый комплект постельного белья мы проверяем вручную, поэтому гарантируем высокое качество наших изделий",
    worktime: "Пн-Вс - 10:00 - 21:00",
    homePhone: "",
    mobilePhone: "+ 7 702 292 23 88",
    wpPhone: "+7 701 366 07 94",
    email: "Galatex2015@mail.ru",
    address: ["г. Кокшетау ул. Осипенко 1 ТРЦ 'РИО', 1 этаж"],
    social_link_fb: "",
    social_link_inst: "https://www.instagram.com/galatexkz/",
    social_link_vk: "",
    social_link_yt: "",
    websiteLink: "http://galatex.kz/",
  }, {
    id: 8,
    title: "La Familia",
    city: [{
      id: 2,
      title: "Петропавловск"
    }],
    img: 'lafamilia.png',
    category: {
      id: 5,
      title: "Кафе и рестораны"
    },
    date: '',
    payment: '',
    cashback: 10,
    special_best: false,
    pos: true,
    onlinePay: false,
    description: "Приглашаем вас в семейное кафе 'La Familia', которое находится в центральной парковой зоне. Мы предлагаем попробовать на вкус потрясающие блюда мировых кухонь, насладиться изысканной картой бара, ощутить приятный аромат кофе. Интерьер ресторана выполнен в приятных тонах, комфортабельная мебель и легкая музыка - настоящая атмосфера уюта. А пока родители отдыхают, дети смогут играть и веселиться в специальной детской комнате! Мы рады видеть вас всей семьей или с друзьями, на обед, ужин или день рождения, свадьбу, банкет. Мы ценим и ждем каждого гостя! С уважением, семейное кафе 'La Familia'!",
    worktime: "Вс-Чт - 11:00 - 00:00<br> Пт-Сб - 11:00 - 01:00",
    homePhone: "",
    mobilePhone: "+7 747 555 15 10",
    wpPhone: "+7 747 555 15 10",
    email: "prostokatya1984@mail.ru",
    address: ["г. Петропавловск, ул. Васильева. 61"],
    social_link_fb: "",
    social_link_inst: "https://www.instagram.com/lafamilia_petro/",
    social_link_vk: "",
    social_link_yt: "",
    websiteLink: "",
  }, {
    id: 9,
    title: "Sunkar-Premium",
    city: [{
      id: 3,
      title: "Шымкент"
    }],
    img: 'sunkar-premium.png',
    category: {
      id: 13,
      title: "Прочее"
    },
    date: '',
    payment: 'Расcрочка 3 мес.',
    cashback: 8,
    special_best: false,
    pos: true,
    onlinePay: false,
    description: "Клиника 'Sunkar-Premium' лучшая в своей сфере. У нас десятки квалифицированных врачей от терапевта до гинеколога и огромный спектр услуг",
    worktime: "Пн-Пт - 09:00 - 18:00 / Сб - 09:00 - 11:00 (График работы врачей) <br> Пн-Пт - 09:00 - 18:00 / Сб - 09:00 - 15:00 (График работы лаборатории)",
    homePhone: "8 (7252) 53 03 83",
    mobilePhone: "+7 702 906 35 87",
    wpPhone: "+7 702 906 35 87",
    email: "help@sunkar-premium.kz",
    address: ["г.Шымкент, ул.Дулати 57/57 (К.Маркса)"],
    social_link_fb: "",
    social_link_inst: "https://www.instagram.com/sunkar_premium/",
    social_link_vk: "",
    social_link_yt: "",
    websiteLink: "https://sunkarpremium.kz/",
  }, {
    id: 10,
    title: "Артель",
    city: [{
      id: 2,
      title: "Петропавловск"
    }],
    img: 'artel.png',
    category: {
      id: 7,
      title: "Товары для дома"
    },
    date: '',
    payment: '',
    cashback: 3,
    special_best: false,
    pos: true,
    onlinePay: false,
    description: "Специалисты Мастерской 'Артель' изготавливают столярные изделия высочайшего уровня, а также выполняют художественную ковку, успешно сочетая кованые элементы с изделиями из дерева. Наши мастера обладают соответствующей компетентностью, постоянно прилагая усилия для совершенствования своих знаний и навыков. Мы понимаем, как делать красивые вещи, придаем большое значение созданию нетривиальной продукции и уверены, что Вам тоже понравятся наши изделия. Вот лишь небольшой перечень изделий, изготавливаемых специалистами Мастерской «Артель»: - Изделия для декора интерьеров и ландшафтного дизайна - Мебель под старину и корпусная мебель из натурального дерева - Малые архитектурные формы - Лестницы из массива и кованые ограждения лестниц - резные панно и иконы… И еще многое другое Вы сможете увидеть в разделах нашего сайта.",
    worktime: "Пн-Пт - 09:00 - 18:00 <br/> Сб-Вс - Выходной",
    homePhone: "8 (7152) 39 84 46",
    mobilePhone: "+7 771 360 97 32",
    wpPhone: "+7 771 360 97 32",
    email: "info@artel-sk.kz",
    address: ["г.Петропавловск, ул. Гуденко, 21"],
    social_link_fb: "",
    social_link_inst: "https://www.instagram.com/masterskaya_artel.sk/",
    social_link_vk: "",
    social_link_yt: "",
    websiteLink: "http://artel-sk.kz/",
  }, {
    id: 11,
    title: "Tasty Fried Chicken",
    city: [{
      id: 4,
      title: "Кызылорда"
    }],
    img: 'tfs-chicken.png',
    category: {
      id: 5,
      title: "Кафе и рестораны"
    },
    date: '',
    payment: '',
    cashback: 5,
    special_best: false,
    pos: true,
    onlinePay: false,
    description: "Лучшая курочка по рецепту от KFC!",
    worktime: "Пн-Вс - 10:00 - 01:00",
    homePhone: "8 (7152) 39 84 46",
    mobilePhone: "+7 776 766 79 99",
    wpPhone: "+7 776 727 79 99",
    email: "rada76@inbox.ru",
    address: ["г.Кызылорда, ул. Желтоксан 6"],
    social_link_fb: "",
    social_link_inst: "https://www.instagram.com/tfchicken_kzo/",
    social_link_vk: "",
    social_link_yt: "",
    websiteLink: "",
  }, {
    id: 12,
    title: "Ак Кайын",
    city: [{
      id: 4,
      title: "Кызылорда"
    }],
    img: 'medicine.svg',
    category: {
      id: 12,
      title: "Аптеки"
    },
    date: '',
    payment: '',
    cashback: 2,
    special_best: false,
    pos: true,
    onlinePay: false,
    description: "ТОО 'Чингиз' предоставляет высококачественные услуги по реализации фармацевтической и медицинской продукции через сеть аптек «Ак Кайын»",
    worktime: "Пн-Вс - 08:00 - 20:00",
    homePhone: "",
    mobilePhone: "+7 701 735 28 88",
    wpPhone: "+7 777 453 02 00",
    email: "chingys@mail.ru",
    address: [
      "г. Кызылорда, ул. Женис 98/31 (район Автовокзала)",
      "г. Кызылорда, пр. Абая б/н. (район Областного диагностического центра)",
      "г. Кызылорда, ул. Бозгулова , строение 5 В (район Областной детской больницы)"
  ],
    social_link_fb: "",
    social_link_inst: "https://www.instagram.com/apteka_akkayin/",
    social_link_vk: "",
    social_link_yt: "",
    websiteLink: "http://chingys.kz/",
  }, {
    id: 13,
    title: "Офтальмологический центр Focus",
    city: [{
      id: 0,
      title: "Алматы"
    }],
    img: 'focus-clinic.svg',
    category: {
      id: 13,
      title: "Прочее"
    },
    date: '',
    payment: 'Расcрочка 6 мес.',
    cashback: 0,
    special_best: false,
    pos: true,
    onlinePay: false,
    description: "Цель создания центра: Оказание офтальмологической помощи населению РК на высочайшем современном уровне, отвечающем требованиям лучших европейских клиник с внедрением самых передовых методов диагностики и хирургического лечения. Центр оснащен самым современным оборудованием для диагностики и хирургического лечения больных с различной офтальмопатологией переднего и заднего отрезка глаза: патологии роговицы, катаракты возрастной и осложнённой и с патологией связочного аппарата хрусталика.",
    worktime: "Пн-Пт - 08:00 - 17:00 <br/>Сб - 08:00 - 13:00",
    homePhone: "8 (7273) 37 70 80",
    mobilePhone: "+7 702 337 70 80",
    wpPhone: "",
    email: "jandoskrb@mail.ru",
    address: ["пр. Сейфуллина, д. 450, уг. ул. Жибек жолы"],
    social_link_fb: "",
    social_link_inst: "https://www.instagram.com/eye_center_focus/",
    social_link_vk: "",
    social_link_yt: "",
    websiteLink: "http://focuseyecenter.kz/",
  }, {
    id: 14,
    title: "YAKUZA",
    city: [{
      id: 5,
      title: "Темиртау"
    }],
    img: 'cafe_and_restaraunt.svg',
    category: {
      id: 5,
      title: "Кафе и рестораны"
    },
    date: '',
    payment: 'Расcрочка 3 мес.',
    cashback: 0,
    special_best: false,
    pos: true,
    onlinePay: false,
    description: "Вкуснейшие суши, роллы, пицца, удоны",
    worktime: "Пн-Вс - 11:00 - 23:00",
    homePhone: "",
    mobilePhone: "+7 775 506 60 20",
    wpPhone: "",
    email: "jandoskrb@mail.ru",
    address: ["г. Темиртау, ул Амангельды 114"],
    social_link_fb: "",
    social_link_inst: "https://www.instagram.com/yakuza_temir/",
    social_link_vk: "",
    social_link_yt: "",
    websiteLink: "http://focuseyecenter.kz/",
  }, {
    id: 16,
    title: "Магазин автозапчастей",
    city: [{
      id: 4,
      title: "Кызылорда"
    }],
    img: 'zapchasti-auto.png',
    category: {
      id: 1,
      title: "Авто и мото"
    },
    date: '',
    payment: '',
    cashback: 3,
    special_best: false,
    pos: true,
    onlinePay: false,
    description: "Магазин автозапчастей на следующие авто: Toyota, Lexus, Hyundai, Kia. Оригинальные запасные части по выгодным ценам!",
    worktime: "Пн-Сб - 09:00 - 18:00<br>Вс - Выходной",
    homePhone: "",
    mobilePhone: "+7 705 952 22 33",
    wpPhone: "+7 705 952 22 33",
    email: "kia_hyundai@list.ru",
    address: ["г. Кызылорда, ул. Шымбая 37"],
    social_link_fb: "",
    social_link_inst: "https://www.instagram.com/autoparts.kzo/",
    social_link_vk: "",
    social_link_yt: "",
    websiteLink: "",
  }, {
    id: 17,
    title: "PLAYMATE",
    city: [{
      id: 2,
      title: "Петропавловск"
    }],
    img: 'playmate.png',
    category: {
      id: 11,
      title: "Одежда и обувь"
    },
    date: '',
    payment: 'Расcрочка 3 мес.',
    cashback: 5,
    special_best: false,
    pos: true,
    onlinePay: false,
    description: "Первый салон нижнего белья премиум класса, представитель мирового бренда Annebra в Казахстане. Комплекты нижнего и домашнего белья из европейских тканей. Трендовые модели мировых подиумов. Бесплатная доставка по Казахстану.",
    worktime: "Пн-Вс - 15:00 - 20:00",
    homePhone: "",
    mobilePhone: "+7 777 084 30 00",
    wpPhone: "+7 777 084 30 00",
    email: "my.lingerie@mail.ru",
    address: ["г. Петропавловск, ул. Тауфика Мухамед-Рахимова, 66"],
    social_link_fb: "",
    social_link_inst: "https://www.instagram.com/playmate_kz/",
    social_link_vk: "",
    social_link_yt: "",
    websiteLink: "",
  }, {
    id: 18,
    title: "Клиника болезней суставов AGAR",
    city: [{
      id: 0,
      title: "Алматы"
    }],
    img: 'agar_sustav.png',
    category: {
      id: 13,
      title: "Прочее"
    },
    date: '',
    payment: 'Расcрочка 3 мес.',
    cashback: 3,
    special_best: false,
    pos: true,
    onlinePay: false,
    description: "Клиника болезней суставов AGAR является ведущей клиникой в области ревматологии и лечения опорно-двигательного аппарата. Врачи клиники входят в ТОП 5 ревматологов г. Рекомендации к заполнению информации по партнерам Алматы. Достоверный диагноз, эффективные и инновационные методы лечения без операций, индивидуальный подход к каждому пациенту.",
    worktime: "Пн-Пт - 08:00 - 20:00 <br/>Сб - 08:00 - 14:00<br/>Вс - выходной",
    homePhone: "8 (7273) 27 01 67",
    mobilePhone: "+7 702 839 40 09",
    wpPhone: "+7 702 839 40 09",
    email: "sustav.kz@mail.ru",
    address: ["г. Алматы, ул. Байтурсынова 132б"],
    social_link_fb: "",
    social_link_inst: "https://www.instagram.com/playmate_kz/",
    social_link_vk: "",
    social_link_yt: "",
    websiteLink: "http://www.sustav.kz/",
  }, {
    id: 19,
    title: "Red Room Bar",
    city: [{
      id: 0,
      title: "Алматы"
    }],
    img: 'redroom.png',
    category: {
      id: 5,
      title: "Кафе и рестораны"
    },
    date: '',
    payment: '',
    cashback: 15,
    special_best: false,
    pos: true,
    onlinePay: false,
    description: "Red Room Bar – атмосферное место для модной, прогрессивной молодежи Алматы. Бар с неординарным дизайном и еженедельными тематическими вечеринками. В Red Room можно вкусно поужинать, насладиться шикарными авторскими коктейлями, покурить дымный кальян и потанцевать.",
    worktime: "Пн-Вт - выходной <br/>Ср,Чт, Вс - 20:00 - 03:00<br/>Пт - 20:00 - 05:00",
    homePhone: "",
    mobilePhone: "+7 701 945 45 55",
    wpPhone: "+7 701 945 45 55",
    email: "redroombar.almaty@gmail.com",
    address: ["г. Алматы, ул. Наурызбай Батыра,85"],
    social_link_fb: "",
    social_link_inst: "https://www.instagram.com/redroom_bar_almaty/",
    social_link_vk: "",
    social_link_yt: "",
    websiteLink: "",
  }, {
    id: 20,
    title: "МИР ОДЕЖДЫ",
    city: [{
      id: 8,
      title: "Сатпаев"
    }],
    img: 'clothes_world.png',
    category: {
      id: 11,
      title: "Обувь и одежда"
    },
    date: '',
    payment: 'Расcрочка 3 мес.',
    cashback: 3,
    special_best: false,
    pos: true,
    onlinePay: false,
    description: "ИП «Мухамбеткалиева А.Ж.» Магазин «МИР ОДЕЖДЫ» розничная реализация женской одежды. Заключили Соглашение о предоставлении CashBack в размере 3% , а так же рассрочку сроком на 3 месяца, для держателей кредитных карт БЦК #картакарта",
    worktime: "Пн-Сб - 11:00 - 19:00<br/>Вс - 11:00 - 17:00",
    homePhone: "",
    mobilePhone: "+7 707 486 33 50",
    wpPhone: "+7 707 486 33 50",
    email: "mukanova_akos@mail.ru",
    address: ["г. Сатпаев, ул.Абая 26А (ТД «GRAND»)"],
    social_link_fb: "",
    social_link_inst: "https://www.instagram.com/mir_odezhdy_satpaev/",
    social_link_vk: "",
    social_link_yt: "",
    websiteLink: "",
  }, {
    id: 21,
    title: "On Clinic",
    city: [{
      id: 7,
      title: "Нур-Султан"
    }],
    img: 'on_clinic.png',
    category: {
      id: 13,
      title: "Прочее"
    },
    date: '',
    payment: 'Расcрочка 6 мес.',
    cashback: 0,
    special_best: false,
    pos: true,
    onlinePay: false,
    description: "Медицинский центр «On Clinic» Астана является филиалом международной корпорации «On Clinic International» – безусловного лидера по восстановлению мужской потенции. Методики «On Clinic» успешно внедрены по всему миру. «On Clinic» Астана – это многопрофильный лечебно-диагностический и консультационный центр. Ведущие направления – урология, проктология, гинекология и дерматология, занимающиеся решением деликатных и очень значимых для каждого человека проблем. В дополнение к ведущим направлениям функционируют следующие высокоспециализированные отделения: трихологии, маммологии, амбулаторной хирургии, гастроэнтерологии.",
    worktime: "Пн-Пт - 08:00 - 20:00<br/>Сб - 08:00 - 17:00<br/>Вс - выходной",
    homePhone: "8 (7172) 66 03 03",
    mobilePhone: "+7 707 366 03 03",
    wpPhone: "+7 705 536 03 03",
    email: "onclinic@mail.ru",
    address: ["г. Нур-Султан, ул. Валиханова 1, угол ул. Иманова"],
    social_link_fb: "",
    social_link_inst: "https://www.instagram.com/mir_odezhdy_satpaev/",
    social_link_vk: "",
    social_link_yt: "",
    websiteLink: "https://astana.onclinic.kz/",
  }, {
    id: 22,
    title: "HONEY",
    city: [{
      id: 7,
      title: "Нур-Султан"
    }],
    img: 'honey.png',
    category: {
      id: 14,
      title: "Акссесуары"
    },
    date: '',
    payment: 'Расcрочка 3 мес.',
    cashback: 0,
    special_best: false,
    pos: true,
    onlinePay: false,
    description: "HONEY - cеть магазинов бижутерии и аксессуаров. Здесь найдутся самые красивые и доступные аксессуары для женщин всех возрастов. Отличительной чертой можно назвать разнообразие и ассортимент, сопровождающиеся качественным обслуживанием и красивой упаковкой.",
    worktime: "Пн-Вс - 10:00 - 22:00 (ТРЦ «Керуен»)<br/>Пн-Вс - 10:00 - 21:00 (ТЦ «Евразия 2»)",
    homePhone: "8 (7172) 79 53 88",
    mobilePhone: "+7 701 550 33 77",
    wpPhone: "+7 701 554 56 70",
    email: "boutique.honey@mail.ru",
    address: ["г. Нур-Султан, ул. Достық 9, ТРЦ «Керуен» 1 этаж, 12а", "г. Нур-Султан, ул. Петрова 24Б, ТЦ «Евразия 2» 1 этаж, 4 сектор, 7 бутик"],
    social_link_fb: "",
    social_link_inst: "https://www.instagram.com/honey_boutique001/",
    social_link_vk: "",
    social_link_yt: "",
    websiteLink: "",
  }, {
    id: 23,
    title: "ЗарДан",
    city: [{
      id: 7,
      title: "Нур-Султан"
    }],
    img: 'zardan.png',
    category: {
      id: 4,
      title: "Красота и здоровье"
    },
    date: '',
    payment: 'Расcрочка 12 мес.',
    cashback: 0,
    special_best: false,
    pos: true,
    onlinePay: false,
    description: "Стоматология ЗарДан на рынке более 20 лет. Опытные врачи стоматологи и дерматокосмето́логи. Клиника известна как высоким качеством работы и профессионализмом врачей.",
    worktime: "Пн-Вс - 08:00 - 21:00",
    homePhone: "8 (7172) 95 14 56",
    mobilePhone: "+7 777 572 28 74",
    wpPhone: "+7 701 451 99 46",
    email: "zardan_2018@mail.ru",
    address: ["г. Нур-Султан, ул. Сабыр Рахимова, 36"],
    social_link_fb: "",
    social_link_inst: "https://www.instagram.com/zardan_astana/",
    social_link_vk: "",
    social_link_yt: "",
    websiteLink: "http://zardan.kz/",
  }, {
    id: 24,
    title: "Loveliness",
    city: [{
      id: 7,
      title: "Нур-Султан"
    }],
    img: 'beauty_and_health.svg',
    category: {
      id: 4,
      title: "Красота и здоровье"
    },
    date: '',
    payment: 'Расcрочка 3 мес.',
    cashback: 0,
    special_best: false,
    pos: true,
    onlinePay: false,
    description: "Прямая поставка из Южной Кореи. На рынке более 5 лет.",
    worktime: "Пн-Вс - 08:00 - 21:00",
    homePhone: "",
    mobilePhone: "+7 701 722 79 06",
    wpPhone: "+7 701 722 79 06",
    email: "gulnar1200@mail.ru",
    address: ["г. Нур-Султан, Мангилик ел 17, 1-эт, бут-403"],
    social_link_fb: "",
    social_link_inst: "https://www.instagram.com/Loveliness.cosmetics/",
    social_link_vk: "",
    social_link_yt: "",
    websiteLink: "",
  }, {
    id: 25,
    title: "Dilda",
    city: [{
      id: 7,
      title: "Нур-Султан"
    }],
    img: 'other.svg',
    category: {
      id: 13,
      title: "Прочее"
    },
    date: '',
    payment: 'Расcрочка 3 мес.',
    cashback: 0,
    special_best: false,
    pos: true,
    onlinePay: false,
    description: "На рынке более 11 лет. В сетях наших магазин Вы найдете качественные товары из Италии, Китая, Дубай и Кореи.",
    worktime: "Пн-Вс - 09:00 - 20:00",
    homePhone: "8 (7172) 54 67 00",
    mobilePhone: "+7 775 603 57 62",
    wpPhone: "+7 778 081 98 18",
    email: "87016666994@mail.ru",
    address: ["г. Нур-Султан, ул. Б.Момышулы 12",
    "г. Нур-Султан, ул. Туркестан 8/2"
  ],
    social_link_fb: "",
    social_link_inst: "https://www.instagram.com/dilda_flower/",
    social_link_vk: "",
    social_link_yt: "",
    websiteLink: "",
  }];
const categoriesList:Category[] = [{
  id: 1,
  title: "Авто и мото"
}, {
  id: 2,
  title: "Бытовая техника"
}, {
  id: 3,
  title: "Детские товары"
}, {
  id: 4,
  title: "Красота и здоровье"
}, {
  id: 5,
  title: "Кафе и рестораны"
}, {
  id: 6,
  title: "Зоотовары"
}, {
  id: 7,
  title: "Товары для дома"
}, {
  id: 8,
  title: "Продукты"
}, {
  id: 9,
  title: "Магазин"
}, {
  id: 10,
  title: "Ремонт"
}, {
  id: 11,
  title: "Одежда и обувь"
}, {
  id: 12,
  title: "Аптеки"
}, {
  id: 13,
  title: "Прочее"
}, {
  id: 14,
  title: "Акссесуары"
}];

const cities: City[] = [{
  id: 0,
  title: "Алматы"
}, {
  id: 1,
  title: "Кокшетау"
}, {
  id: 2,
  title: "Петропавловск"
}, {
  id: 3,
  title: "Шымкент"
}, {
  id: 4,
  title: "Кызылорда"
}, {
  id: 5,
  title: "Темиртау"
}, {
  id: 6,
  title: "Тараз"
}, {
  id: 7,
  title: "Нур-Султан"
}, {
  id: 8,
  title: "Сатпаев"
}];

const phoneNumber = {
  phone: ''
}

const BccLoginInputText = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "#219653"
        },
        "& .Mui-error": {
            "& label.Mui-focused": {
                color: '#C84F4F'
            },
            "& fieldset": {
                borderColor: "#C84F4F"
            },
            "&:hover fieldset": {
                borderColor: "#C84F4F"
            },
            "&.Mui-focused fieldset": {
                borderColor: "#C84F4F"
            }
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "#219653"
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "#E8E8E8"
            },
            "&:hover fieldset": {
                borderColor: "#219653"
            },
            "&.Mui-focused fieldset": {
                borderColor: "#219653"
            }
        }
    }
})(TextField);

const Main = (props: any) => {
  const [fio, setFio] = React.useState("");
  const [kala, setKala] = React.useState("");
  const [comp, setComp] = React.useState("");
  const [service, setService] = React.useState("");
  const classes = useStyles({});
  // const { t, i18n } = useTranslation();
  const [product, setProduct] = React.useState()
  const [categories, setCategories] = React.useState(categoriesList)
  const [category, setCategory] = React.useState<number[]>([])
  const [city, setCity] = React.useState(-1)
  const [best, setBest] = React.useState(false)
  const [cashback, setCashback] = React.useState(false)
  const [showAll, setShowAll] = React.useState(true)
  const [showAllCities, setShowAllCities] = React.useState(true)
  const [payment, setPayment] = React.useState(false)
  const [online, setOnline] = React.useState(false)
  const [pos, setPos] = React.useState(false)
  const [value, setValue] = React.useState(0);
  const [search, setSearch] = React.useState('');
  const [openFilter, setOpenFilter] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);

  const handleOpenFilter = () => {
      setOpenFilter(!openFilter)
  }
  const handleOpenModal = () => {
      setOpenModal(!openModal)
  } 
  const handleClearFilter = () => {
      setCategory([])
      setBest(false)
      setCashback(false)
      setShowAll(true)
      setPayment(false)
      setOnline(false)
      setPos(false)
      setSearch('')
  }
  interface TextMaskCustomProps {
    inputRef: (ref: HTMLInputElement | null) => void;
  }
  const TextMaskCustom = (props: TextMaskCustomProps) => {
    const { inputRef, ...other } = props;
  
    return (
      <MaskedInput
        {...other}
        ref={(ref: any) => {
          inputRef(ref ? ref.inputElement : null);
        }}
        mask="1(111) 111 11 11"
        placeholder={"7(707) 707 77 77"}
      />
    );
  };
  const handleChangeShowAll = () => {
      setShowAll(!showAll)
  }

  const handleChangeSearch = (c: any) => {
    setSearch(c.target.value);
  }

  const handleChangeCity = (c: number) => {
      if (c == -1) {
        setCity(-1)
        setShowAllCities(true)
      }
      else {
        setCity(c)
        setShowAllCities(false)
      }
  }
  const handleSetPhone = (c: React.ChangeEvent<HTMLInputElement>) => {
      c.preventDefault()
      phoneNumber.phone = c.target.value
  }

  const submit = (e: any) => {
    e.preventDefault();

    emailjs.sendForm('madi', 'template_1yi0r746', e.target, 'user_Vslz1wEPBI1DoVgrfEAaA')
      .then(() => {
          setFio('');
          setKala('');
          setComp('');
          setService('');
          handleOpenModal()
      }, () => {
          handleOpenModal()
      });
    
  }

  const handleChangeBest = (c: boolean) => {
      setBest(c)
  }
  const handleChangeCashback = (c: boolean) => {
      setCashback(c)
  }
  const handleChangePayment = (c: boolean) => {
      setPayment(c)
  }
  const handleChangeOnline = (c: boolean) => {
      setOnline(c)
  }
  const handleChangePos = (c: boolean) => {
      setPos(c)
  }

  const handleChangeCategory = (id: number) => {
      if (id === -1) {
        setCategory([])
        handleChangeShowAll()
      } else {
        let cat = category
        let index = cat.findIndex(c => c === id)
        index === -1 ? cat.push(id) : cat.splice(index, 1)
        setValue(value+1)
        showAll && handleChangeShowAll()
        setCategory(cat)
      }
  }

  const handleSetProduct = (p: Product) => {
    setProduct(p)
  }

  const handleSetProductNull = () => {
    setProduct(null)
  }

  const handleLangChange = (lang: any) => {
    props.changeLang(lang)
  }

  const BccInput = withStyles({
    root: {
      border: '1px solid #E8E8E8',
      borderRadius: 4,
      padding: '0 10px',
      height: 48,
      lineHeight: '48px',
      marginBottom: 5,
      '&:hover': {
        border: '1px solid #E8E8E8',
      },
      '&.Mui-focused': {
        border: '1px solid #D0D0D0'
      }
    }
  })((props: any) => <Input disableUnderline="true" {...props} />);

  const BccCheckbox = withStyles({
    root: {
      color: "#D8D8D8",
      '&:hover': {
        backgroundColor: 'none'
      },
      "&$checked svg": {
        fill: "#27AE60"
      }
    },
    checked: {}
  })((props: any) => <Checkbox {...props} />);

  const filteredProducts = () => {
    return products.filter(p => ((city >= 0 && (p.city.findIndex(ci => ci.id === city) >= 0)) || showAllCities) && 
            ((category.findIndex(c => c === p.category.id) >= 0) || showAll) &&
            (p.title.toLowerCase().includes(search.toLowerCase()) || search == '') &&
            (!best || p.special_best) && (!pos || p.pos) && (!online || p.onlinePay) &&
            (!cashback || p.cashback > 0) && (!payment || p.payment.length > 0))
  }

  const isValid = () => {
    return fio.length > 0 && phoneNumber.phone.length > 0 && kala.length > 0 && service.length > 0
  }

  return (
    <Grid container direction="column"  className={classes.mainPartners}> 
      <Grid item className={classes.breadCrumbs}>
        <a href="https://www.bcc.kz/kartakarta/?utm_source=partners&utm_medium=button_click&utm_campaign=kartakarta" target="_blank" className={classes.navCard}>#картакарта</a>
        <img className={classes.navArrow} src="nav_arrow.svg" />
        <span onClick={() => handleSetProductNull()} className={classes.partners}>Партнеры</span>
        {product && <>
          <img className={classes.navArrow} src="nav_arrow.svg" />
          <span className={classes.partners}>{product.title}</span>
        </>}
      </Grid>
      <Grid item><h2 className={classes.titleName}>Партнеры #картакарта</h2></Grid>
      { product ? <Grid item className="animated fadeInRight faster">
        <Grid container direction="row">
            <Grid item lg={12} xs={12} spacing={2}>

            <div className={`${classes.contentItem} ${classes.contentItemDetail}`}>
              
              <div className={classes.cardHeader}>

                <div className={classes.cardHeader_left}>
                 <span className={classes.iconBack} onClick={() => handleSetProductNull()}><ArrowBackIcon className={classes.back}/></span>
                 <i className={classes.lineTop}></i>
                  <div className={classes.partnerLogo} style={{ backgroundImage: `url(${product.img})`}}></div>
                  <div className={classes.cardHeader_title}>
                    <h1>{product.title}</h1>
                    <h2>{product.category.title}</h2>
                  </div>
                  </div>

                  <Button className={classes.btnLink} style={{color: product.websiteLink.length > 0 ? '#27AE60' : '#D0D0D0'}} target="_blank" href={product.websiteLink.length > 0 ? product.websiteLink : ''}><LinkIcon/> На сайт</Button>
              </div>

              <div className={classes.cardBody}>
                <Grid lg={3} xs={12}>
                  <div className={classes.bodyPeriod} style={{ display: product.payment.length > 0 ? 'block' : 'none' }}>
                    <h3>Период рассрочки</h3>
                    <span>{product.payment}</span>
                  </div>
                  <div className={classes.bodyCashback} style={{ display: product.cashback > 0 ? 'block' : 'none' }}>
                    <h3>Кешбэк</h3>
                    <span className={classes.infoCashback}>{product.special_best ? 'Спецпредложение' : ''} <span>{product.cashback}%</span></span>
                    <small>{ product.date }</small>
                  </div>
                </Grid>
                <Grid lg={9} xs={12} className={classes.paddingLeftRight}>
                  <div className={classes.bodyDescription}>
                    <h3>О партнере</h3>
                    <span dangerouslySetInnerHTML={{__html: product.description}}></span>
                  </div>
                  <div className={classes.contactsInfo}>
                    <div className={classes.bodyContacts}>
                      <h3>Контакты</h3>
                      <a href={`tel:${product.homePhone}`} style={{ display: product.homePhone.length > 0 ? 'flex' : 'none' }}><PhoneIcon/>{ product.homePhone }&nbsp;<small> (тел.)</small></a>
                      <a href={`tel:${product.mobilePhone}`} style={{ display: product.mobilePhone.length > 0 ? 'flex' : 'none' }}><PhoneIcon/>{ product.mobilePhone }&nbsp;<small> (тел.)</small></a>
                      <a href={`tel:${product.wpPhone}`} style={{ display: product.wpPhone.length > 0 ? 'flex' : 'none' }}><PhoneIcon/>{ product.wpPhone } <small>&nbsp;(Whatsapp)</small></a>
                      <a href={`mailto:${product.email}`} style={{ display: product.email.length > 0 ? 'flex' : 'none' }}><EmailIcon/>{ product.email }</a>
                    </div>
                    <div className={classes.bodyTimework}>
                      <h3>Режим работы</h3>
                      <span dangerouslySetInnerHTML={{__html: product.worktime}}></span>
                    </div>

                  </div>
                  { product.address.length > 0 && <div className={classes.addressList}>
                      <h3>Адрес</h3>
                      <ul>
                        {
                          product.address.map(p => <li>{p}</li>)
                        }
                      </ul>
                    </div>
                  }
                </Grid>

              </div>

              <div className={classes.cardFooter}>

                <div className={classes.cardViewPay}>
                  <span style={{ display: product.onlinePay ? 'flex' : 'none' }}><PublicIcon/> Покупка онлайн</span>
                  <i style={{ display: product.onlinePay && product.pos ? 'block' : 'none' }} className={classes.lineTop}></i>
                  <span style={{ display: product.pos ? 'flex' : 'none' }}><StoreIcon/> Покупка в POS</span>
                </div>

                <div className={classes.social}>
                  <a style={{ display: product.social_link_fb.length > 0 ? 'flex' : 'none' }} href={product.social_link_fb} target="blank"><img src="fb.svg" alt="Facebook"/></a>
                  <a style={{ display: product.social_link_inst.length > 0 ? 'flex' : 'none' }} href={product.social_link_inst} target="blank"><img src="in.svg" alt="Instagram"/></a>
                  <a style={{ display: product.social_link_vk.length > 0 ? 'flex' : 'none' }} href={product.social_link_vk} target="blank"><img src="vk.svg" alt="VK"/></a>
                  <a style={{ display: product.social_link_yt.length > 0 ? 'flex' : 'none' }} href={product.social_link_yt} target="blank"><img src="yb.svg" alt="Youtube"/></a>
                </div>
                
              </div>

              </div>
            
            </Grid>
          </Grid>
      </Grid>
      :
        <Grid item>
          <button className={classes.dispMob} onClick={ handleOpenFilter }>{openFilter ? 'Закрыть' : 'Фильтр'}</button>
            {/* OTSUDA */}
          <Grid container direction="row" className={openFilter ? '' : 'animated fadeInLeft faster'}>
            <Grid item lg={3} xs={12} className={`${classes.filterMob} ${openFilter ? classes.mobileFilter + ' animated fadeInUp faster' : ''}`}>
              <h1 className={classes.filterTitle}>Выберите город</h1>
                <BccInputText
                  fullWidth={true}
                  variant="filled"
                  select
                  value={city}
                  onChange={(e: any) => handleChangeCity(e.target.value)}
                >
                    <MenuItem value="-1">Все города</MenuItem>
                    {
                        cities.map(c => 
                            <MenuItem value={c.id}>{c.title}</MenuItem>
                        )
                    }
                </BccInputText>
                <div className={classes.container}>
                  <Grid container justify="space-between" alignItems="center">
                    <Grid item>
                      Показать лучшее
                    </Grid>
                    <Grid item>
                      <BccSwitch
                        checked={best}
                        value="best"
                        onClick={() => handleChangeBest(!best)}
                        // className={classes.switcher}
                      />
                    </Grid>
                  </Grid>
                </div>
                <div className={classes.container}>
                  <Grid container direction="column" className={classes.checkboxes}>
                    <Grid item>
                      <FormControlLabel
                          control={<BccCheckbox onClick={() => handleChangeCategory(-1)} value="showAll" checked={showAll} />}
                          label="Показать всё"
                      />
                    </Grid>
                    { categories.map((c: Category, index: number) =>
                        <Grid item>
                          <FormControlLabel
                              control={<BccCheckbox onClick={() => handleChangeCategory(c.id)} checked={(category.findIndex(ca => ca === c.id) !== -1) ? true : false} />}
                              label={c.title}
                          />
                        </Grid>
                    )}
                    <Grid item>
                      <span className={classes.line}/>
                    </Grid>
                    <Grid item>
                      <FormControlLabel
                        control={<BccCheckbox checked={cashback} onClick={() => handleChangeCashback(!cashback)} />}
                        label={"По кешбэку"}
                      />
                    </Grid>
                    <Grid item>
                      <FormControlLabel
                        control={<BccCheckbox checked={payment} onClick={() => handleChangePayment(!payment)} />}
                        label={"По рассрочке"}
                      />
                    </Grid>
                    <Grid item>
                      <span className={classes.line}/>
                    </Grid>
                    <Grid item>
                      <FormControlLabel
                        control={<BccCheckbox checked={online} onClick={() => handleChangeOnline(!online)} />}
                        label={"Покупка онлайн"}
                      />
                    </Grid>
                    <Grid item>
                      <FormControlLabel
                        control={<BccCheckbox checked={pos} onClick={() => handleChangePos(!pos)} />}
                        label={"Покупка в POS"}
                      />
                    </Grid>
                    <Grid item>
                      <span className={classes.line}/>
                    </Grid>
                    <Grid item>
                      <button className={classes.clear} onClick={() => handleClearFilter()}>Очистить фильтры</button>
                    </Grid>
                  </Grid>
                </div>
            </Grid>
            <Grid item lg={9} sm={12} xs={12} spacing={2} className={classes.blockHeight}>
            <h1 className={classes.filterTitle}>Спецпредложение — <img src="bcc_sl.svg" alt=""/></h1>
            <FormControl className={classes.search}>
              <BccInput
                placeholder="Поиск"
                type="text"
                autoFocus={openFilter || openModal ? false : true}
                value={search}
                id="search"
                key="search"
                onChange={(e: any) => handleChangeSearch(e)}
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon style={{color: "#B9B9B9"}}/>
                  </InputAdornment>
                }
              />
            </FormControl>
            { filteredProducts().length === 0 ? 
                  <div className={classes.noPartners}>
                    <div className={classes.text_noPartners}>
                      <h2>Похоже, по таким фильтрам у нас еще нет партнеров</h2>
                      <a href="#" onClick={handleOpenModal} id="bePartner">Стать партнером</a>
                    </div>
                  </div>
                : <Grid item className={classes.blockGrids}>
                {
                  filteredProducts().map((p: Product, index: number) => {
                    return <div onClick={() => handleSetProduct(p)} className={`${classes.contentItem} par${p.id}tner`}>
                      <div className={`${classes.itemGrided} par${p.id}tner`}>
                        <div className={`${classes.partnerLogo_list} par${p.id}tner`} style={{ backgroundImage: `url(${p.img})`}}></div>
                        <h1 className={`par${p.id}tner`}>{p.title}</h1>
                        <h2 className={`par${p.id}tner`}>{p.category.title}</h2>
                        <span className={`par${p.id}tner`} style={{ display: p.payment.length > 0 ? 'flex' : 'none' }}>{p.payment}</span>
                        <h3 style={{ display: p.cashback > 0 ? 'flex' : 'none' }} className={`${classes.cashback} ${p.special_best ? classes.special : ''} par${p.id}tner`}>Кешбэк<span>{p.cashback}%</span></h3>
                      </div>
                      <div className={`${classes.viewPay} par${p.id}tner`}>
                        <span className={`par${p.id}tner`} style={{ display: p.onlinePay ? 'inline' : 'none' }}><Tooltip title="Покупка онлайн" arrow><PublicIcon className={`par${p.id}tner`}/></Tooltip></span>
                        <span className={`par${p.id}tner`} style={{ display: p.pos ? 'inline' : 'none' }}><Tooltip title="Покупка в POS" arrow><StoreIcon className={`par${p.id}tner`}/></Tooltip></span>
                      </div>
                    </div>
                  })
                }
              </Grid>
            }
          </Grid>
        </Grid>
            {/* SUDA */}
        
      </Grid>
      }
      
      <Grid className={classes.mainRoot}>
            <Grid container className={`${classes.root} ${classes.mainBg}`} spacing={4}>
                <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                    <h2 className={classes.titlePartner}>Станьте партнером</h2>
                    <p className={classes.subtitlePartner}>Подайте заявку чтобы стать партнером</p>

                    <span className={`${classes.buttonPartner} partnerWrite`}>
                        <Button onClick={handleOpenModal}
                            variant="outlined"
                            className={`${classes.noteButtonPartner} partnerWrite`}
                        >
                            Написать
                        </Button>
                    </span>
                </Grid>

            </Grid>
        </Grid>
        
        <Grid className={`${classes.cardModal} ${openModal ? 'show' : ''}`} >
          <div className={classes.headerModal}>
              <h4>Заявка для партнера</h4>
              <span className={`${classes.exitBtn} ${openModal ? 'show' : ''}`} onClick={handleOpenModal}><CloseIcon style={{color: "#B9B9B9"}}/></span>
          </div>
          <form onSubmit={submit}>
          <div className={classes.bodyModal}>
          <BccLoginInputText
            variant="outlined"
            className={classes.marInput}
            fullWidth
            id="name"
            key="name"
            label='Имя'
            name="name"
            value={fio}
            onChange={(e: any) => setFio(e.target.value)}
          />
          <BccLoginInputText
            className={classes.marInput}
            variant="outlined"
            fullWidth
            InputLabelProps={{
              shrink: true
            }}
            name="phone"
            value={phoneNumber.phone}
            onChange={handleSetPhone}
            label='Телефон'
            InputProps={{
              inputComponent: TextMaskCustom as any
            }}
          />

          <BccLoginInputText
            className={classes.marInput}
            variant="outlined"
            fullWidth
            id="kala"
            key="kala"
            label='Город'
            name="kala"
            value={kala}
            onChange={(e: any) => setKala(e.target.value)}
          />
           <BccLoginInputText
            className={classes.marInput}
            variant="outlined"
            fullWidth
            id="nameComp"
            key="nameComp"
            label='Наименование юр. лица'
            name="nameComp"
            value={comp}
            onChange={(e: any) => setComp(e.target.value)}
          />
           <BccLoginInputText
            className={classes.marInput}
            variant="outlined"
            fullWidth
            id="service"
            key="service"
            label='Вид деятельности'
            name="service"
            value={service}
            onChange={(e: any) => setService(e.target.value)}
          />
          </div>
          <div className={classes.footerModal}>
            <Grid container style={{ marginTop: "15px" }} spacing={4}>
              
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={!isValid()}
                  className={`${classes.submit} partnerSend`}
                >
                  Отправить
                </Button>
              </Grid>
            </Grid>
          </div>
          </form>
        </Grid>
          <div className={`${classes.bckdrop} ${openModal ? 'show' : ''}`} onClick={handleOpenModal}></div>

    </Grid>
  );
};

export default Main;
