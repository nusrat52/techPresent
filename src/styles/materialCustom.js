import { makeStyles } from "@material-ui/core/styles";
const yasil = "rgb(0, 158, 127)";
const tundyasil = "rgb(4, 119, 96)";
const aciqYasil = "rgb(0, 197, 141)";
const backBoz = "rgb(245, 245, 245)";

 const styleForMain = {
    main: {
      // height: "100vh",
      backgroundColor: backBoz,
      paddingBottom: "100px",
      backgroundImage:
        'url("https://shop-redq.vercel.app/_next/static/images/grocery-f1565ac25de02b9295dccc2da13004ab.png")',
  
      ["@media (max-width:1000px)"]: {
        height: "fit-content !important",
        justifyContent: "flex-start",
        marginLeft: "15px",
        backgroundColor: "white",
        paddingBottom: "20px",
        backgroundImage: "url()",
      },
    },
  
    mainText: {
      color: "rgb(119, 121, 140)",
      fontFamily: "Lato, sans-serif",
      fontWeight: "400",
      marginBottom: "60px",
      fontSize: "19px",
      ["@media (max-width:1000px)"]: {
        display: "none",
      },
    },
    mainHeader: {
      fontFamily: "Poppins, sans-serif",
      fontSize: "45px",
      marginBottom: "15px",
      fontWeight: "900",
      ["@media (max-width:1000px)"]: {
        // eslint-disable-line no-useless-computed-key
        fontSize: "20px",
        color: "rgb(119, 121, 140)",
        fontWeight: "400",
      },
    },
    inputWrapper: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      ontSize: "14px",
      fontWeight: "700",
      fontFamily: "Lato, sans-serif",
      ["@media (max-width:1000px)"]: {
        display: "none",
      },
    },
  
    inputWrapper2: {
      position: "relative",
      width: "-webkit-fill-available",
      // paddingLeft: "30px",
      paddingRight: "30px",
      display: "flex",
      alignItems: "center",
      backgroundColor: "rgb(247, 247, 247)",
      width: "100%",
      borderRadius: "8px",
  
      ["@media (min-width:1000px)"]: {
        display: "none",
      },
    },
  
    searchInput: {
      outline: "none",
      border: "0",
      width: "600px",
      height: "50px",
      paddingLeft: "100px",
      borderBottomLeftRadius: "7px",
      borderTopLeftRadius: "3px",
      fontSize: "16px",
      color: "gray",
    },
  
    searchInput2: {
      outline: "none",
      border: "0",
      width: "100%",
      height: "50px",
      paddingLeft: "20px",
      borderBottomLeftRadius: "7px",
      borderTopLeftRadius: "3px",
      fontSize: "16px",
      color: "gray",
      backgroundColor: "rgb(247, 247, 247)",
    },
    searchButton: {
      cursor: "pointer",
      color: "white",
      backgroundColor: aciqYasil,
      height: "50px",
      display: "flex",
      alignItems: "center",
      paddingRight: "40px",
      paddingLeft: "40px",
      borderBottomRightRadius: "7px",
      borderTopRightRadius: "7px",
      "&:hover": {
        backgroundColor: yasil,
      },
    },
    grocery: {
      position: "absolute",
      color: aciqYasil,
      backgroundColor: backBoz,
      padding: "10px",
      marginLeft: "5px",
      borderRadius: "7px",
    },
    carusel: {
      paddingRight: "20px",
      paddingLeft: "20px",
      borderRadius: "15px",
    },
    borSek: {
      borderRadius: "8px",
      // backgroundColor: "black",
    },
    caruselWr: {
      backgroundColor: "white",
      paddingTop: "40px",
      paddingBottom: "40px",
      borderBottom: "1px solid rgb(241, 241, 241)",
    },
    sidebarWrapper: {
      width: "300px",
      backgroundColor: "white",
      height: "100vh",
    },
    side: {
      width: "300px",
      backgroundColor: "white",
      height: "100vh",
      top: "100px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexShrink: "0",
  
      ["@media (max-width:1000px)"]: {
        display: "none",
      },
    },
    categories: {
      fontFamily: "Lato, sans-serif",
      fontSize: "15px",
      color: "rgb(13, 17, 54)",
      cursor: "pointer",
      "&:hover": {
        color: aciqYasil,
      },
      "&:focus": {
        color: tundyasil,
      },
      width: "100px",
    },
    cardCont: {
      margin: "0",
      display: "flex",
      flexWrap: "wrap",
      height: "max-content",
      width: "-webkit-fill-available",
      minHeight: "100vh",
    },
  
    // alignItems:"flex-start"
  
    cards: {
      width: "20%",
      padding: "15px",
      // padding: "10px",
      height: "430px",
      ["@media (max-width:1500px)"]: {
        width: "25%",
      },
      ["@media (max-width:1300px)"]: {
        width: "33.3%",
      },
      ["@media (max-width:1000px)"]: {
        padding: "0",
        // border:"solid 0.5px rgb(224, 224, 224)"
      },
      ["@media (max-width:770px)"]: {
        width: "50%",
      },
    },
    cardss: {
      padding: "20px",
      backgroundColor: "white",
      cursor: "pointer",
      borderRadius: "7px",
      position: "relative",
      height: "100%",
      ["@media (max-width:1000px)"]: {
        border: "solid rgb(224, 224, 224) 0.5px",
      },
    },
    cardsPic: {
      width: "70%",
      alignSelf: "center",
      marginBottom: "20px",
      minWidth: "160px",
    },
    cardsTitle: {
      color: "rgb(13, 17, 54)",
      fontFamily: "Lato, sans-serif",
      fontSize: "15px",
      fontWeight: "700",
    },
    ePrice: {
      color: "rgb(255, 179, 105)",
      fontFamily: "Lato, sans-serif",
      fontSize: "13px",
      fontWeight: "400",
      textDecoration: "line-through",
      marginBottom: "2px",
    },
    price: {
      color: tundyasil,
      fontFamily: "Lato, sans-serif",
      fontSize: "15px",
      fontWeight: "700",
    },
  
    lb: {
      fontFamily: "Lato, sans-serif",
      fontSize: "13px",
      fontWeight: "400",
      color: "rgb(119, 121, 140)",
    },
    faiz: {
      fontFamily: "Lato, sans-serif",
      fontSize: "13px",
      fontWeight: "700",
      color: "rgb(255, 255, 255)",
      lineHeight: "24px",
      backgroundColor: "rgb(255, 173, 94)",
      paddingLeft: "10px",
      paddingRight: "10px",
      display: "inline-block",
      position: "absolute",
      top: "15px",
      right: "15px",
      borderRadius: "12px",
      zIndex: "2",
    },
    sebet: {
      backgroundColor: yasil,
      borderTopLeftRadius: "7px",
      borderBottomLeftRadius: "7px",
      fontFamily: "Lato, sans-serif",
      color: "white",
      padding: "10px 7px 7px 10px",
      position: "fixed",
      top: "49%",
      right: "0",
      zIndex: "5",
      fontWeight: "700",
      cursor: "pointer",
      ["@media (max-width:600px)"]: {
        display: "none",
      },
    },
    sebetSum: {
      backgroundColor: "white",
      color: tundyasil,
      borderRadius: "7px",
      padding: "8px 15px 11px 12px",
    },
    sebetYazi: {
      width: "100px",
    },
    badget: {
      backgroundColor: "rgb(0, 158, 127)",
      color: "rgb(255, 255, 255)",
      fontSize: "15px",
      fontWeight: "700",
      borderRadius: "200px",
      overflow: "hidden",
      width: "104px",
      height: "36px",
      alignItems: "center",
      paddingLeft: "5px",
      paddingRight: "5px",
      zIndex: "2",
    },
    cardBut: {
      border: "2px solid rgb(247, 247, 247)",
      borderRadius: "18px",
      height: "36px",
      paddingLeft: "17px",
      paddingRight: "17px",
      fontSize: "13px",
      fontWeight: "700",
      width: "90px",
      zIndex: "2",
  
      color: tundyasil,
      "&:hover": {
        color: "white",
        backgroundColor: tundyasil,
      },
    },
    yanvericiAction: {
      right: "-450px",
    },
    button: {
      backgroundColor: "white",
      color: yasil,
      "&:hover": {
        backgroundColor: yasil,
        color: "white",
      },
      ["@media (max-width:600)"]: {
        display: "none",
      },
    },
    particle: {
      width: "100%",
      position: "absolute",
      pointerEvents: "none",
      ["@media (max-width:1000px)"]: {
        display: "none",
      },
    },
    sekilAnim: {
      width: "100px",
      position: "fixed",
      zIndex: "2",
      boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
      // visibility: "hidden",
      // left: "50%",
      // top: "30px",
      borderRadius: "50%",
      opacity: "0",
    },
    marginLe300: {
      marginLeft: "300px",
    },
    flSt: {
      width: "100%",
      ["@media (max-width:1000px)"]: {
        alignItems: "flex-start",
      },
    },
    mainnn: {
      display: "flex",
    },
    catego: {
      fontSize: "13px",
      color: "rgb(13, 17, 54)",
      fontWeight: "700",
      padding: "5px 10px",
      backgroundColor: "rgb(241, 241, 241)",
      borderRadius: "6px",
      fontFamily: "Lato, sans-serif",
    },
    fltrr: {
      padding: "0px 15px",
      fontSize: "15px",
      fontWeight: "700",
      cursor: "pointer",
      transition: "all 0.3s ease 0s",
      borderRadius: "6px",
  
      // height: '38px',
      fontFamily: "Lato, sans-serif",
  
      border: "0px",
      color: "rgb(0, 158, 127)",
      whiteSpace: "nowrap",
    },
    filterBot: {
      position: "fixed",
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(20, 10, 10, 0.7)",
      overflow: "hidden",
      zIndex: "10",
      top: "0",
      display: "none",
      alignItems: "flex-end",
    },
    filterBotContent: {
      backgroundColor: "white",
      position: "relative",
  
      height: "70vh",
      width: "100vw",
  
      borderTopLeftRadius: "20px",
      borderTopRightRadius: "20px",
      paddingLeft: "20px",
      top: "100vh",
      // zIndex: "11",
      //  bottom:"0"
    },
    filterBotAg: {},
    xWrapper: {
      backgroundColor: "white",
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      position: "absolute",
      top: "-51px",
      left: "49%",
      transition: "1s",
    },
    topWh: {
      top: "0px !important",
    },
    foot: {
      backgroundColor: yasil,
      color: "white",
      padding: "2px",
      marginRight: "10px",
      marginLeft: "10px",
      borderRadius: "48px",
      boxShadow: "rgb(0 0 0 / 16%) 0px 3px 6px",
      fontFamily: "Lato, sans-serif",
      fontSize: "15px",
      fontWeight: "700",
      marginBottom: "20px",
      position: "fixed",
      bottom: "0",
      width: "80%",
      boxShadow: "rgb(0 0 0 / 16%) 0px 21px 36px",
      ["@media (min-width:600px)"]: {
        display: "none",
      },
    },
    doxsan: {
      color: yasil,
      backgroundColor: "white",
      width: "auto",
      height: "44px",
      padding: "0px 30px",
      overflow: "hidden",
      borderRadius: "28px",
      alignItems: "center",
      fontFamily: "Lato, sans-serif",
      fontSize: "15px",
      fontWeight: "700",
      margin: "0 2px 0 0",
      display: "flex",
    },
    nemm: {
      ["@media (min-width:1000px)"]: {
        display: "none",
      },
    },
 }
  

 export const useStyles = makeStyles(styleForMain);
