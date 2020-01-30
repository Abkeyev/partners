import React from "react";
import clsx from "clsx";
import { Grid, FormControlLabel, Checkbox, FormControl, InputLabel, Input, InputAdornment, Button } from "@material-ui/core";
import { makeStyles, createStyles, withStyles, Theme } from "@material-ui/core/styles";
import PublicIcon from '@material-ui/icons/Public';
import StoreIcon from '@material-ui/icons/Store';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import LinkIcon from '@material-ui/icons/Link';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import Tooltip from '@material-ui/core/Tooltip';
import { BccInputText, BccSwitch } from './index';
import MenuItem from '@material-ui/core/MenuItem';
import { useTranslation } from 'react-i18next';
import SearchIcon from '@material-ui/icons/Search';

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
      fontSize: 14
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
      cursor: 'pointer'
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
      '& > span': {
        fontSize: 14,
        color: '#27AE60',
        margin: '0',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'left',
        lineHeight: '20px',
        fontWeight: 'normal',
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
        color: '#27AE60'
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
      paddingTop: '4rem',
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
    [theme.breakpoints.down("sm")]: {
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
    }
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
  city: City;
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
  address: string;
  social_link_fb: string;
  social_link_inst: string;
  social_link_vk: string;
  social_link_yt: string;
  websiteLink: string;
}

const products: Product[] = [{
  id: 0,
  title: 'Галактика',
  city: {
    id: 1,
    title: "Кокшетау"
  },
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
  worktime: "С 9.00 до 19.00 ежедневно",
  homePhone: "",
  mobilePhone: "87084441918",
  wpPhone: "87084441918",
  email: "wlada_rk@yandex.ru",
  address: "ул.Мира 19",
  social_link_fb: "",
  social_link_inst: "",
  social_link_vk: "",
  social_link_yt: "",
  websiteLink: "",
}, {
  id: 1,
  title: "Малыш",
  city: {
    id: 2,
    title: "Петропавловск"
  },
  img: 'item2.png',
  category: {
    id: 3,
    title: "Детские товары"
  },
  date: 'Действителен до 1 апреля',
  payment: '',
  cashback: 15,
  special_best: false,
  pos: true,
  onlinePay: false,
  description: "«Малыш» - сеть магазинов игрушек.<br/>В нашем магазине вы найдёте огромный ассортимент оригинальных и эксклюзивных игрушек на любой вкус и бюджет.<br/>Все новинки, появляющиеся на мировом рынке, мы изучаем и предлагаем нашим покупателям.",
  worktime: "С 10:00 до 20:00",
  homePhone: "",
  mobilePhone: "+7 705 119 88 55",
  wpPhone: "+7 705 119 88 55",
  email: "andrei-dyakin@mail.ru",
  address: "ул. Муканова, 53",
  social_link_fb: "",
  social_link_inst: "",
  social_link_vk: "",
  social_link_yt: "",
  websiteLink: "",
}, {
  id: 2,
  title: 'Froot',
  city: {
      id: 0,
      title: 'Алматы'
  },
  img: 'froot.svg',
  category: {
    id: 9,
    title: "Магазин"
  },
  date: '',
  payment: 'Расcрочка 3 мес.',
  cashback: 3,
  special_best: false,
  pos: true,
  onlinePay: false,
  description: "Магазины у дома Froot - сеть маленьких и мега удобных магазинов, где можно найти всё самое необходимое по отличным ценам.<br/>Продукты, бытовая химия, горячий кофе, вкусные сэндвичи, свежий попкорн и местные овощи можно заказать с доставкой за 15 минут!",
  worktime: "С 8 до 24 (Без выходных)",
  homePhone: "",
  mobilePhone: "+7 707 000 3612",
  wpPhone: "+7 707 000 3612",
  email: "contact@thefroot.com",
  address: "ул. Муканова, 53",
  social_link_fb: "https://www.facebook.com/pg/thefrootmarket/",
  social_link_inst: "https://www.instagram.com/thefrootmarket/",
  social_link_vk: "",
  social_link_yt: "https://www.youtube.com/channel/UC5oj3FmSgwrbXcvWz1dgpqQ",
  websiteLink: "https://froot.kz",
}, {
  id: 3,
  title: 'Окна SOK',
  city: {
    id: 2,
    title: "Петропавловск"
  },
  img: 'okna.png',
  category: {
    id: 7,
    title: "Ремонт"
  },
  date: '',
  payment: 'Расcрочка 12 мес.',
  cashback: 0,
  special_best: false,
  pos: true,
  onlinePay: false,
  description: "Окна SOK – изготовит для Вас пластиковые окна высокого качества<br/>*Окна любого цвета, арочные окна <br/>*Входные группы, витражи <br/>*Балконные ограждения с крышей <br/>*Обшивка балконов под ключ Гарантийное обслуживание до 3 лет.",
  worktime: "10:00 ч. до 19:00 ч.<br/>обед 13:00 ч. до 14:00 ч.<br/>Суббота с 10:00 ч. до 13:00 ч.<br/>выходной день: воскресенье.",
  homePhone: "8 (7152) 46-93-38",
  mobilePhone: "+7 777 619 80 29",
  wpPhone: "+7 777 619 80 29",
  email: "sputnikk@inbox.ru",
  address: "ул.Мира 19",
  social_link_fb: "",
  social_link_inst: "https://www.instagram.com/okna_sok_petropavl/",
  social_link_vk: "",
  social_link_yt: "",
  websiteLink: "",
}, {
  id: 4,
  title: "СТРОЙКОМПЛЕКТ",
  city: {
    id: 3,
    title: "Шымкент"
  },
  img: 'stroi.png',
  category: {
    id: 7,
    title: "Ремонт"
  },
  date: '',
  payment: 'Расcрочка 3 мес.',
  cashback: 5,
  special_best: false,
  pos: true,
  onlinePay: false,
  description: "СТРОЙКОМПЛЕКТ - предлагает свои услуги для тех, кто решил начать строительство или ремонт. Здесь можно купить герметики и клеи, лакокрасочные материалы, строительные и отделочные материалы, сухие строительные смеси. История нашей компании начинается в 2003-тьем году. Ранее мы назывались Крепеж City. За более чем 15-ти летнюю историю ассортимент поставляемых товаров вырос более чем в 100 раз, и на сегодняшний день насчитывает более 10 000 различных товаров.",
  worktime: "пн-пт: 09:00-18:00<br/>сб: 09:00-17:00<br/>вс: 09:00-15:00",
  homePhone: "+8 (7252) 57-48-70",
  mobilePhone: "+7 707 553 97 43",
  wpPhone: "+7 707 553 97 43",
  email: "info@stkt.kz",
  address: "ул. Муканова, 53",
  social_link_fb: "",
  social_link_inst: "https://www.instagram.com/stroykomplekt_shymkent/",
  social_link_vk: "",
  social_link_yt: "",
  websiteLink: "https://stkt.kz/",
}, {
  id: 5,
  title: 'Arua',
  city: {
    id: 3,
    title: "Шымкент"
  },
  img: 'furniture.svg',
  category: {
    id: 10,
    title: "Текстиль"
  },
  date: '',
  payment: 'Расcрочка 3 мес.',
  cashback: 8,
  special_best: false,
  pos: true,
  onlinePay: false,
  description: "ARUA – торговая марка самого крупного казахстанского производителя домашнего <br/>текстиля «АГФ групп». ARUA – представляет линейку постельного белья, произведенного<br/>из 100% экологически чистого хлопка. Это непревзойденный комфорт и удовольствие от<br/>сна. ARUA – это радость прикосновения.",
  worktime: "Будни с 9:00 – до 19:00<br/>Суббота-воскресенье выходной",
  homePhone: "8 (7252) 92 15 30",
  mobilePhone: "+7 707 278 98 79",
  wpPhone: "+7 707 278 98 79",
  email: "sales1@agf.kz",
  address: "ул.Мира 19",
  social_link_fb: "",
  social_link_inst: "https://www.instagram.com/arua.bedding/",
  social_link_vk: "",
  social_link_yt: "",
  websiteLink: "http://aruabedding.com/",
}, {
  id: 1,
  title: "Магазин «Ксения»",
  city: {
    id: 3,
    title: "Шымкент"
  },
  img: 'clothes.svg',
  category: {
    id: 11,
    title: "Одежда"
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
  address: "",
  social_link_fb: "",
  social_link_inst: "",
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
    title: "Здоровье и красота"
}, {
    id: 5,
    title: "Кафе и рестораны"
}, {
    id: 6,
    title: "Зоотовары"
}, {
    id: 7,
    title: "Мебель"
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
  title: "Одежда"
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
}];

const Main = (props: any) => {
  const classes = useStyles({});
  const { t, i18n } = useTranslation();
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

  const handleOpenFilter = () => {
      setOpenFilter(!openFilter)
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

  const handleChangeShowAll = () => {
      setShowAll(!showAll)
  }

  const handleChangeSearch = (c: string) => {
    setSearch(c)
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
    return products.filter(p => ((city >= 0 && city === p.city.id) || showAllCities) && 
            ((category.findIndex(c => c === p.category.id) >= 0) || showAll) &&
            (p.title.toLowerCase().includes(search.toLowerCase()) || search == '') &&
            (!best || p.special_best) && (!pos || p.pos) && (!online || p.onlinePay) &&
            (!cashback || p.cashback > 0) && (!payment || p.payment.length > 0))
  }

  return (
    <Grid container direction="column"  className={classes.mainPartners}> 
      <Grid item className={classes.breadCrumbs}><a href="" className={classes.navCard}>#картакарта</a><img className={classes.navArrow} src="nav_arrow.svg" /><span className={classes.partners}>Партнеры</span></Grid>
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
                  <div className={classes.bodyPeriod}>
                    <h3>Период рассрочки</h3>
                    <span>{product.payment}</span>
                  </div>
                  <div className={classes.bodyCashback}>
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
                      <span style={{ display: product.homePhone.length > 0 ? 'flex' : 'none' }}><PhoneIcon/>{ product.homePhone }<small> (дом.)</small></span>
                      <span style={{ display: product.mobilePhone.length > 0 ? 'flex' : 'none' }}><PhoneIcon/>{ product.mobilePhone }<small> (тел.)</small></span>
                      <span style={{ display: product.wpPhone.length > 0 ? 'flex' : 'none' }}><PhoneIcon/>{ product.wpPhone }<small> (Whatsapp)</small></span>
                      <span style={{ display: product.email.length > 0 ? 'flex' : 'none' }}><EmailIcon/>{ product.email }</span>
                    </div>
                    <div className={classes.bodyTimework}>
                      <h3>Режим работы</h3>
                      <span dangerouslySetInnerHTML={{__html: product.worktime}}></span>
                    </div>

                  </div>
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
                  <a style={{ display: product.social_link_yt.length > 0 ? 'flex' : 'none' }} href={product.social_link_yt} target="blank"><img src="fb.svg" alt="Youtube"/></a>
                </div>
                
              </div>

              </div>
            
            </Grid>
          </Grid>
      </Grid>
      :
        <Grid item>
          <button className={classes.dispMob} onClick={() => handleOpenFilter()}>{openFilter ? 'Закрыть' : 'Фильтр'}</button>
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
                autoFocus="true"
                value={search}
                onChange={(e: any) => handleChangeSearch(e.target.value)}
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon style={{color: "#B9B9B9"}}/>
                  </InputAdornment>
                }
              />
            </FormControl>
            { filteredProducts().length === 0 ? 
                  <div className={classes.noPartners}>
                    <img src="horse_nopartners.svg"/>
                    <div className={classes.text_noPartners}>
                      <h2>Похоже, по таким фильтрам у нас еще нет партнеров</h2>
                      <a href="#">Стать партнером</a>
                    </div>
                  </div>
                : <Grid item className={classes.blockGrids}>
                {
                  filteredProducts().map((p: Product, index: number) => {
                    return <div onClick={() => handleSetProduct(p)} className={classes.contentItem}>
                      <div className={classes.itemGrided}>
                        <div className={classes.partnerLogo_list} style={{ backgroundImage: `url(${p.img})`}}></div>
                        <h1>{p.title}</h1>
                        <h2>{p.category.title}</h2>
                        <span style={{ display: p.payment.length > 0 ? 'flex' : 'none' }}>{p.payment}</span>
                        <h3 style={{ display: p.cashback > 0 ? 'flex' : 'none' }} className={`${classes.cashback} ${p.special_best ? classes.special : ''}`}>Кешбэк<span>{p.cashback}%</span></h3>
                      </div>
                      <div className={classes.viewPay}>
                        <span style={{ display: p.onlinePay ? 'inline' : 'none' }}><Tooltip title="Покупка онлайн" arrow><PublicIcon/></Tooltip></span>
                        <span style={{ display: p.pos ? 'inline' : 'none' }}><Tooltip title="Покупка в POS" arrow><StoreIcon/></Tooltip></span>
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
    </Grid>
  );
};

export default Main;
