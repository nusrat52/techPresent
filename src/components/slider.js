import React from 'react';
import Slider from "react-slick";
import p1 from "../files/p1.png";
import p2 from "../files/p2.png";
import p3 from "../files/p3.png";
import Box from "@material-ui/core/Box";
import {useStyles} from "../styles/materialCustom"




function SliderComp () {
    
const classes=useStyles()
    let slickk;
    if (window.innerWidth > 1000) {
      slickk = 3;
    } else if (window.innerWidth < 1000) {
      slickk = 2;
    }
    if (window.innerWidth < 460) {
      slickk = 1;
    }
  
  
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: slickk,
      slidesToScroll: 1,
      // customPaging:=><button>{i+4}</button>
    };
    return <>
      
      <Box className={classes.caruselWr} display="flex" justifyContent="center">
        <div className="conta ">
          <Slider {...settings}>
            <div className={classes.borSek}>
              <img
                className={classes.carusel}
                // height="250"
                width="100%"
                src={p1}
                alt="ads"
              />
            </div>
            <div>
              <img
                className={classes.carusel}
                // height="250"
                width="100%"
                src={p2}
                alt="ads"
              />
            </div>
            <div>
              <img
                className={classes.carusel}
                // height="250"
                width="100%"
                src={p3}
                alt="ads"
              />
            </div>
            <div className={classes.borSek}>
              <img
                className={classes.carusel}
                // height="250"
                width="100%"
                src={p1}
                alt="ads"
              />
            </div>
            <div>
              <img
                className={classes.carusel}
                // height="250"
                width="100%"
                src={p2}
                alt="ads"
              />
            </div>
            <div>
              <img
                className={classes.carusel}
                // height="250"
                width="100%"
                src={p3}
                alt="ads"
              />
            </div>
          </Slider>
        </div>
      </Box>
  </>;
}

export default SliderComp;
