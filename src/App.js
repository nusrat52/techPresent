import "./App.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { categoryTaker, productTaker, sebetInitialize, logged, ownProductTaker, getProfile, orderTaker } from "./actions/actions";
import Nav from "./components/nav/navbar";
import Product from "./components/profil/product";
import Category from "./components/profil/category";
import Orders from "./components/profil/orders";
import Profile from "./components/profil/profile";
import Main from "./components/main"
import Checkout from "./components/hs/checkout"
import Setting from "./components/profil/setting"

const prSideRef=React.createRef()
const svgg = 
  `<svg xmlns="http://www.w3.org/2000/svg" width="14.735" height="24.503" viewBox="0 0 14.735 24.503"><g id="Cloth" transform="translate(-255.389 -266.539)"><path id="Path_17425" data-name="Path 17425" d="M266.6,273.033c.216-.528.472-1.457.483-1.5a.2.2,0,0,0-.012-.138c-.658-1.409.329-3.9.339-3.925a.2.2,0,0,0-.05-.222,9.5,9.5,0,0,0-1.271-.928.2.2,0,0,0-.3.127c-.339,1.475-1.972,2.824-2.776,3.413a7.168,7.168,0,0,0-.887-.508c-.1-.05-.194-.1-.23-.121a4.167,4.167,0,0,1-1.7-2.76.2.2,0,0,0-.282-.162,5.566,5.566,0,0,0-1.558.942.2.2,0,0,0,0,.227,4.777,4.777,0,0,1,.241,4.008.2.2,0,0,0,0,.125,12.874,12.874,0,0,0,.481,1.277c-.221,1.106-2.826,14.1-3.427,15.87a.2.2,0,0,0,.036.193c.047.056.506.551,2.217.664h.03a3.387,3.387,0,0,1,1.081.17,11.474,11.474,0,0,0,1.552.33,28.226,28.226,0,0,0,3.063.177,16.064,16.064,0,0,0,3.3-.3.2.2,0,0,0,.032-.013s.01,0,.015,0a23.834,23.834,0,0,1,2.73-.686.2.2,0,0,0,.158-.227A134.93,134.93,0,0,0,266.6,273.033Zm-.494-6.225a8.838,8.838,0,0,1,.881.647c-.2.551-.9,2.655-.311,4.042-.061.216-.256.893-.424,1.323h-.518c.21-.487-.209-.482-.441,0h-.086a9.474,9.474,0,0,0-1.866-2.7A7.861,7.861,0,0,0,266.108,266.808ZM259,271.547a5.249,5.249,0,0,0-.227-4.156,6.6,6.6,0,0,1,1.067-.6,4.476,4.476,0,0,0,1.835,2.781,3,3,0,0,0,.273.146,6,6,0,0,1,.958.565l0,0c.045.035.089.071.132.108a8.645,8.645,0,0,1,1.716,2.431h-3.622c-.208-.313-.684-.434-.464,0h-1.187a.231.231,0,0,0-.035-.089A10.391,10.391,0,0,1,259,271.547Zm8.085,17.96a45.2,45.2,0,0,0-1.04-9.177.2.2,0,0,0-.385.114c.834,2.83,1,8.178,1.026,9.188a21.687,21.687,0,0,1-6.073.085,10.977,10.977,0,0,1-1.485-.316,3.862,3.862,0,0,0-1.209-.185,3.8,3.8,0,0,1-1.843-.459c.65-2.122,2.92-13.4,3.347-15.533h6.816a135.764,135.764,0,0,1,3.2,15.711C268.948,289.038,267.708,289.307,267.086,289.507Z" transform="translate(0 0.5)" fill="currentColor" stroke="currentColor" stroke-width="0.5"></path></g></svg>`



function App() {

  const cataloqlar = useSelector((state) => state.dataManu.categories);
  const [updatePr, setUpdatePr] = useState(false)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(categoryTaker());
    dispatch(productTaker());
    dispatch(getProfile());
    dispatch(orderTaker());
    if (localStorage.getItem('badget') === null) {
      let bad=JSON.stringify({})
  localStorage.setItem('badget', bad)
    }
    if (localStorage.getItem('sebet') === null) {
      let bad=JSON.stringify([])
  localStorage.setItem('sebet', bad)
    }
    
    dispatch(sebetInitialize())
    if (localStorage.getItem('token') !== null) {
      dispatch(logged({ token: localStorage.getItem('token') }))
    }
    dispatch(ownProductTaker())
  }, []);


const [sekil, setsekil] = useState("")
const [title, setTitle] = useState("");
const [categoryI, setCategoryI] = useState("");
const [description, setDescription] = useState("");
const [priceI, setPriceI] = useState("");
const [amL, setAmL] = useState("");
const [unit, setUnit] = useState("");
const [img, setImg] = useState("")
const [upId, setUpId] = useState("")
const [catPlh, setCatPlh] = useState("Product Type");
const [xButCat, setXButCat] = useState(false);
const [sidebarOn, setSidebarOn] = useState(false);





 






  const [proAdd, setProAdd] = useState(false);
// console.log(stringToHTML(cataloqlar[7]?.icon_svg),"parse elediyim yer");
  return (
    <Router>
      <Route exact path="/">
        {/* <div id="divv"></div> */}
        <Main sidebarOn={sidebarOn} setSidebarOn={setSidebarOn} />
        {/* <input type="file" onChange={(e) => { setsekil(e.currentTarget.files[0]) }} />
        <button onClick={()=>fet()}>catlog seple</button> */}
      </Route>
      <Route path="/profile">
        <Nav prSideRef={prSideRef} setSidebarOn={setSidebarOn} proAdd={proAdd} setProAdd={setProAdd} setUpdatePr={setUpdatePr} />
        <Profile prSideRef={prSideRef} setXButCat={setXButCat} xButCat={xButCat}  setCatPlh={setCatPlh} catPlh={catPlh} setTitle={setTitle} proAdd={proAdd} updatePr={updatePr} setUpdatePr={setUpdatePr}    title={title}        proAdd={proAdd} img={img} setImg={setImg} setProAdd={setProAdd} setUpId={setUpId} upId={upId}  setUnit={setUnit} unit={unit} setAmL={setAmL} amL={amL} setPriceI={setPriceI} priceI={priceI}  setDescription={setDescription} description={description} setCategoryI={setCategoryI} categoryI={categoryI}  />
      </Route>
      <Route path="/profile/product">
        <Product setXButCat={setXButCat} setCatPlh={setCatPlh}  proAdd={proAdd} setProAdd={setProAdd} setUpdatePr={setUpdatePr}  setImg={setImg} setProAdd={setProAdd} setUpId={setUpId}   setUnit={setUnit}  setAmL={setAmL}  setPriceI={setPriceI}   setDescription={setDescription} setCategoryI={setCategoryI} setTitle={setTitle} />
      </Route>
      <Route path="/checkout">
        <Checkout sidebarOn={sidebarOn} setSidebarOn={setSidebarOn}  />
      </Route>
      <Route path="/profile/settings">
        <Setting  />
      </Route>

      <Route path="/profile/orders">
        <Orders  />
      </Route>

      <Route path="/profile/category">
        <Category  />
      </Route>
    </Router>
  );
}

export default App;
