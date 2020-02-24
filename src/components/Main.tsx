import React from "react";
import { Grid, FormControlLabel, Checkbox, FormControl, Input, InputAdornment, Button } from "@material-ui/core";
import { makeStyles, createStyles, withStyles, Theme } from "@material-ui/core/styles";
import PublicIcon from '@material-ui/icons/Public';
import StoreIcon from '@material-ui/icons/Store';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
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
import { animateScroll } from 'react-scroll';

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
      display: 'none',
      '&:focus': {
        outline: 'none'
      }
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
    pagination: {
      textAlign: 'right',
      marginTop: 20
    },
    page: {
      display: 'inline-block',
      width: 32,
      cursor: 'pointer',
      textAlign: 'center',
      verticalAlign: 'top',
      color: 'rgba(0,0,0,0.5)',
      fontWeight: 500,
      fontSize: 14,
      '&:hover': {
        color: '#27AE60'
      },
      '& > svg': {
        height: 16
      }
    },
    disabled: {
      color: '#F3F3F3',
      cursor: 'default',
      '&:hover': {
        color: '#F3F3F3'
      }
    },
    active: {
      color: '#27AE60'
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

const products: Product[] = require('../data/products.json');
const categoriesList:Category[] = require('../data/categories.json');
const cities: City[] = require('../data/cities.json')

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
  const [page, setPage] = React.useState(0);
  const [scroll, setScroll] = React.useState(0);

  const maxPage = Math.ceil(products.length / 16)
  
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
          setOpenModal(!openModal)
      }, () => {
          setOpenModal(!openModal)
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
    setScroll(window.pageYOffset)
    animateScroll.scrollToTop({duration: 0})
    setProduct(p)
  }

  const handleSetProductNull = () => {
    setProduct(null)
    animateScroll.scrollTo(scroll, {duration: 0})
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
            (!cashback || p.cashback > 0) && (!payment || p.payment.length > 0)).splice(page * 16, 16)
  }

  const isValid = () => {
    return fio.length > 0 && phoneNumber.phone.length > 0 && kala.length > 0 && service.length > 0
  }

  const generatePages = () => {
    let productsCount = products.length,
        pages: number[] = [],
        it = 1
    for(let i=0; i<productsCount; i+=16, it++)
      pages.push(it)

    return pages
  }

  const changePage = (next: boolean) => {
    if(!next && page === 0 || next && page+1 === maxPage) {
      return
    }
    animateScroll.scrollToTop(0)
    let pg = page
    next ? pg ++ : pg --
    setPage(pg)
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
                      <a href={`tel:${product.mobilePhone}`} style={{ display: product.mobilePhone.length > 0 ? 'flex' : 'none' }}><PhoneIcon/>{ product.mobilePhone }&nbsp;<small> (сот.)</small></a>
                      <a href={`https://wa.me/${product.wpPhone}?text=Добрый день!`} style={{ display: product.wpPhone.length > 0 ? 'flex' : 'none' }}><PhoneIcon/>{ product.wpPhone } <small>&nbsp;(Whatsapp)</small></a>
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
          <button className={classes.dispMob} onClick={ () => setOpenFilter(!openFilter) }>{openFilter ? 'Закрыть' : 'Фильтр'}</button>
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
                        <a href="#" onClick={() => setOpenModal(!openModal)} id="bePartner">Стать партнером</a>
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
            {
              products.length > 0 && products.length > 16 && (
                <Grid item alignContent="center">
                  <div className={classes.pagination}>
                    <span className={`${classes.page} ${page === 0 ? classes.disabled : ''}`} onClick={() => changePage(false)}><ArrowBackIosIcon/></span>
                    {
                      generatePages().map(p => {
                        return <span onClick={() => {
                          setPage(p-1)
                          animateScroll.scrollToTop(0)
                        }} className={`${classes.page} ${page+1 == p ? classes.active : ''}`}>{p}</span>
                      })
                    }
                    <span className={`${classes.page} ${page+1 === maxPage ? classes.disabled : ''}`} onClick={() => changePage(true)}><ArrowForwardIosIcon/></span>
                  </div>
                </Grid>
              )
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
                        <Button onClick={() => setOpenModal(!openModal)}
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
              <span className={`${classes.exitBtn} ${openModal ? 'show' : ''}`} onClick={() => setOpenModal(!openModal)}><CloseIcon style={{color: "#B9B9B9"}}/></span>
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
          <div className={`${classes.bckdrop} ${openModal ? 'show' : ''}`} onClick={() => setOpenModal(!openModal)}></div>

    </Grid>
  );
};

export default Main;
