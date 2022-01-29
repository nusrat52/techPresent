import React, { useEffect, useState, Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typography } from "@material-ui/core";
import Modal2 from "./profil/modal2";
import { sebetIncrease, sebetDecrease, productTaker } from "../actions/actions";
import Yanverici from "./hs/yanverici";
import Navbar from "./nav/navbar";
import "rodal/lib/rodal.css";
import Sidebar from "./nav/sidebar";

import AOS from "aos";
import "aos/dist/aos.css";
import Particles from "react-particles-js";
import particles from "../components/hs/const";
import Searchtop from "./nav/searchtop";
import { useStyles } from "../styles/materialCustom";
import {
  Basket,
  icon1,
  BottomLine,
  Escape,
  Plus,
  icon2,
  Basket2,
  Ico4n,
} from "../svgFileComponents";

import Slider from "./slider";
const side = React.createRef();
const input = React.createRef();
const input2 = React.createRef();
const animRef = React.createRef();
const gris = React.createRef();
const filterRef = React.createRef();

function Main({ sidebarOn, setSidebarOn }) {
  const [onn, setOn] = useState(true);

  const sekilAtan = (sekil) => {
    return [
      {
        original: sekil,
        thumbnail: sekil,
      },
      {
        original: sekil,
        thumbnail: sekil,
      },
      {
        original: sekil,
        thumbnail: sekil,
      },
      {
        original: sekil,
        thumbnail: sekil,
      },
    ];
  };

  const [searchValue, setSearchValue] = useState("");
  const [filterByWord, setFilterByWord] = useState("");
  const height = window.innerHeight - 100;

  const classes = useStyles();

  const categories = useSelector((state) => state.dataManu.categories);
  const products = useSelector((state) => state.dataManu.products);
  const sebetG = useSelector((state) => state.sebet[1]);
  const badget = useSelector((state) => state.sebet[0]);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [categ, setCateg] = useState(true);
  const [navFixed, setNavFixed] = useState(false);
  const [modalOn, setModalOn] = useState(false);
  const [animSrc, setAnimSrc] = useState("");
  const [mindenBoyuk, setMindenBoyuk] = useState("");
  const [stylePos, setStylePos] = useState({ top: "", left: "" });
  const [searchOn, setSearchOn] = useState(false);
  const [fltrRes, setFltrRes] = useState("All items");
  const [filterOn, setFilterOn] = useState(false);
  let sum = +0;
  sebetG.forEach((element) => {
    sum = (parseFloat(sum) + parseFloat(element.sum)).toFixed(2);
  });
  const [mebleg, setMebleg] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        input?.current?.getBoundingClientRect()?.top <= -90 ||
        input2?.current?.getBoundingClientRect()?.top <= -90
      ) {
        setNavFixed(true);
      } else {
        setNavFixed(false);
      }
    });

    AOS.init({
      duration: 700,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (gris?.current?.getBoundingClientRect()?.top < 100) {
        if (window.innerWidth > 1000) {
          side?.current?.classList?.add("sidebarFixed");

          gris?.current?.classList.add("marginleft300");
        }
      } else if (gris?.current?.getBoundingClientRect()?.top > 100) {
        if (window.innerWidth > 1000) {
          side?.current?.classList?.remove("sidebarFixed");
          gris?.current?.classList.remove("marginleft300");
          // }
        }
      }
    });

    if (window.innerWidth > 1000) {
      setMindenBoyuk(true);
    } else {
      setMindenBoyuk(false);
    }
    sebetG.forEach((element) => {
      sum = (parseFloat(sum) + parseFloat(element.sum)).toFixed(2);
    });
    setMebleg(sum);
  });

  const [modalData, setModalData] = useState({
    title: "",
    unit: "",
    decription: "",
    category: "",
    price: "",
    discountPrice: "",
    sekil: [
      {
        original: "https://picsum.photos/id/1018/1000/600/",
        thumbnail: "https://picsum.photos/id/1018/250/150/",
      },
      {
        original: "https://picsum.photos/id/1015/1000/600/",
        thumbnail: "https://picsum.photos/id/1015/250/150/",
      },
      {
        original: "https://picsum.photos/id/1019/1000/600/",
        thumbnail: "https://picsum.photos/id/1019/250/150/",
      },
    ],
    proId: "",
  });
  const dispatch = useDispatch();
  const button = useSelector((state) => state.dataManu.done);

  return (
    <>
      <Navbar
        setFilterByWord={setFilterByWord}
        searchValue={searchValue}
        sidebar={side}
        setSearchValue={setSearchValue}
        navFixed={navFixed}
        setSidebarOn={setSidebarOn}
        sidebarOn={sidebarOn}
        setSearchOn={setSearchOn}
      />
      <Sidebar setSidebarOn={setSidebarOn} sidebarOn={sidebarOn} />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        style={{ height: height }}
        className={classes.main}
      >
        <Particles params={particles} className={classes.particle} />
        {searchOn && (
          <Searchtop
            searchOn={searchOn}
            setSearchOn={setSearchOn}
            setFilterByWord={setFilterByWord}
            searchValue={searchValue}
            sidebar={gris}
            setSearchValue={setSearchValue}
          />
        )}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          className={classes.flSt}
        >
          <Typography
            className={classes.mainHeader}
            component="h1"
            align="center"
          >
            Groceries Delivered in 90 Minute
          </Typography>
          <div ref={input2} className={classes.inputWrapper2}>
            <Ico4n clas={classes.inputLogo} />

            <input
              placeholder="Search your product here"
              onKeyUp={(event) => {
                if (event.keyCode === 13) {
                  setFilterByWord(searchValue);

                  window.scrollTo(0, gris.current.offsetTop);

                  setSearchValue("");
                }
              }}
              onChange={(event) => {
                setSearchValue(event.currentTarget.value);
              }}
              className={classes.searchInput2}
              value={searchValue}
              type="text"
            />
          </div>
          <Typography className={classes.mainText} component="p" align="center">
            Get your healthy foods and snacks delivered at your doorsteps all
            day everyday
          </Typography>

          <div ref={input} className={classes.inputWrapper}>
            <input
              placeholder="Search your product here"
              onKeyUp={(event) => {
                if (event.keyCode === 13) {
                  setFilterByWord(searchValue);

                  window.scrollTo(0, side?.current?.offsetTop);

                  setSearchValue("");
                }
              }}
              onChange={(event) => {
                setSearchValue(event.currentTarget.value);
              }}
              className={classes.searchInput}
              value={searchValue}
              type="text"
            />

            <div
              onClick={() => {
                setFilterByWord(searchValue);

                window.scrollTo(0, side?.current?.offsetTop);

                setSearchValue("");
              }}
              className={classes.searchButton}
            >
              {" "}
              <span>Search</span>
            </div>
            <div className={classes.grocery}>Grocery</div>
          </div>
        </Box>
      </Box>
      <Slider />
      <Box
        className={classes.nemm}
        px={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <p className={classes.catego}>{fltrRes}</p>
        <div
          onClick={() => {
            filterRef.current.closest("." + classes.filterBot).style.display =
              "flex";
            filterRef?.current?.classList.add("topWh");
          }}
          className={classes.fltrr}
        >
          Filter
        </div>
      </Box>
      <div className={classes.mainnn}>
        <div className={classes.side} ref={side}>
          {categories.map((cat) => (
            <Box
              key={cat.id}
              my={3}
              tabIndex="-1"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              className={classes.categories}
              onClick={() => {
                setCategoryFilter(cat.id);
                setCateg(false);
              }}
            >
              {" "}
              <img src={`data:image/svg+xml;utf8,${cat.icon_svg}`} />
              <span>{cat.title}</span>
            </Box>
          ))}
          <Box
            my={3}
            tabIndex="-1"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            className={classes.categories}
            onClick={() => {
              setCategoryFilter("");
              setCateg(true);
            }}
          >
            {" "}
            <img src={icon1} />
            <span>All</span>
          </Box>
        </div>
        <Modal2
          modalOn={modalOn}
          setModalOn={setModalOn}
          obj={modalData}
          badget={badget}
          dispatch={dispatch}
          onBlur={() => {
            setModalOn(false);
          }}
        />
        <div ref={gris} className={classes.cardCont}>
          {products.map((pr) => {
            if (
              pr.title.toLowerCase().includes(filterByWord) &&
              (pr.category.id == categoryFilter || categ)
            ) {
              return (
                <div key={pr.id} className={classes.cards + " carddd"}>
                  <img
                    ref={animRef}
                    className={classes.sekilAnim + " cardImgg"}
                    src={animSrc}
                    style={{
                      top: `${stylePos.top}px`,
                      right: `${window.innerWidth - stylePos.left - 100}px`,
                    }}
                    onAnimationEnd={(e) => {
                      e.currentTarget.classList.remove("sebetAt");
                    }}
                  />
                  <Box
                    data-aos="fade-up"
                    onClick={(event) => {
                      setModalData({
                        title: pr.title,
                        unit: pr.amount_by_unit + " " + pr.unit,
                        decription: pr.description,
                        category: pr.category.title,
                        price: pr.price,
                        discountPrice: pr.discount_price,
                        sekil: sekilAtan(pr.main_image),
                        proId: pr.id,
                      });

                      setModalOn(!modalOn);
                    }}
                    className={classes.cardss}
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                  >
                    {" "}
                    {pr.discount_price && (
                      <div className={classes.faiz}>
                        {(pr.price / pr.discount_price) * 100}%
                      </div>
                    )}
                    <img
                      className={classes.cardsPic}
                      src={pr.main_image}
                      alt=""
                    />
                    <Box>
                      <Box display="flex" flexDirection="column">
                        <p className={classes.cardsTitle + " mp0"}>
                          {pr.title}
                        </p>

                        <p className={classes.lb}>
                          {pr.amount_by_unit} {pr.unit}{" "}
                        </p>
                      </Box>
                      <Box
                        display="flex"
                        alignItems="flex-end"
                        justifyContent="space-between"
                      >
                        <Box flexDirection="column" display="flex">
                          {pr.discount_price && (
                            <p className={classes.ePrice}>$30</p>
                          )}

                          <p className={classes.price + " mp0"}>${pr.price}</p>
                        </Box>

                        {!badget[pr.id] && (
                          <Box
                            onClick={(event) => {
                              event.stopPropagation();
                              dispatch(
                                sebetIncrease({
                                  id: pr.id,
                                  price: pr.price,
                                  unit: pr.unit,
                                  amL: pr.amount_by_unit,
                                  title: pr.title,
                                  sekil: pr.main_image,
                                })
                              );
                              let card = event.currentTarget.closest(".carddd");

                              let sekil = card.querySelector(".cardImgg");

                              sekil.src = pr.main_image;

                              setStylePos({
                                top: card.getBoundingClientRect().top,
                                left: card.getBoundingClientRect().left,
                              });
                              sekil.classList.add("sebetAt");
                              sekil.addEventListener("onAnimated", () => {
                                sekil.classList.remove("sebetAt");
                              });
                            }}
                            className={classes.cardBut}
                            alignItems="center"
                            display="flex"
                            justifyContent="space-between"
                          >
                            <Basket2 />
                            <span> Card</span>
                          </Box>
                        )}
                        {badget[pr.id] && (
                          <Box
                            onClick={(e) => {
                              e.stopPropagation();
                            }}
                            className={classes.badget}
                            display="flex"
                            justifyContent="space-between"
                          >
                            <div
                              onClick={(event) => {
                                event.stopPropagation();
                                dispatch(
                                  sebetDecrease({
                                    id: pr.id,
                                  })
                                );
                              }}
                              className="mb9"
                            >
                              <BottomLine />
                            </div>
                            <p className="mp0">{badget[pr.id]} </p>
                            <div
                              onClick={(event) => {
                                event.stopPropagation();
                                dispatch(
                                  sebetIncrease({
                                    id: pr.id,
                                    price: pr.price,
                                    unit: pr.unit,
                                    amL: pr.amount_by_unit,
                                    title: pr.title,
                                    sekil: pr.main_image,
                                  })
                                );
                              }}
                              className="mp0"
                            >
                              <Plus />
                            </div>
                          </Box>
                        )}
                      </Box>
                    </Box>
                  </Box>
                </div>
              );
            }
          })}
        </div>

        <Box
          className={classes.sebet}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          onClick={() => {
            setOn(!onn);
          }}
        >
          <Box
            className={classes.sebetYazi}
            display="flex"
            alignItems="center"
            justifyContent="space-around"
          >
            <Basket />
            <p className="mp0">{sebetG.length} items</p>
          </Box>
          <p className={classes.sebetSum}>${mebleg}</p>
        </Box>
        <Yanverici mebleg={mebleg} on={onn} seton={setOn} />
      </div>
      {!button.done && (
        <Box my={5} display="flex" justifyContent="center">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => {
              dispatch(productTaker(+button.previous + 2));
            }}
          >
            Load More
          </Button>
          <Box
            display="flex"
            justifyContent="space-between"
            className={classes.foot}
            alignItems="center"
            onClick={() => {
              setOn(!onn);
            }}
          >
            <p className="ml-5">Checkout</p>
            <p className={classes.doxsan}>${mebleg}</p>
          </Box>

          <Box className={classes.filterBot}>
            <Box ref={filterRef} className={classes.filterBotContent}>
              <Box
                onClick={() => {
                  filterRef.current.classList.remove("topWh");

                  filterRef.current.closest(
                    "." + classes.filterBot
                  ).style.display = "none";
                }}
                className={classes.xWrapper}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Escape />
              </Box>
              {categories.map((cat) => (
                <Box
                  my={3}
                  key={cat.title}
                  tabIndex="-1"
                  display="flex"
                  alignItems="center"
                  className={classes.categories}
                  onClick={() => {
                    setCategoryFilter(cat.id);
                    setFltrRes(cat.title);

                    filterRef.current.classList.remove("topWh");

                    filterRef.current.closest(
                      "." + classes.filterBot
                    ).style.display = "none";

                    setCateg(false);
                  }}
                >
                  <img
                    className="mr-15"
                    src={`data:image/svg+xml;utf8,${cat.icon_svg}`}
                  />
                  <span>{cat.title}</span>
                </Box>
              ))}
              <Box
                my={3}
                tabIndex="-1"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                className={classes.categories}
                onClick={() => {
                  setCategoryFilter("");
                  setCateg(true);
                  setFltrRes("All Items");

                  filterRef.current.classList.remove("topWh");

                  filterRef.current.closest(
                    "." + classes.filterBot
                  ).style.display = "none";
                }}
              >
                {" "}
                <img src={icon2} />
                <span>All</span>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}

export default Main;
