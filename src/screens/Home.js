import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
function Home() {
  const [search,setSearch]=useState("");
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const [typeName,setTypeName]=useState("Main-Course");

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });
    response = await response.json();
    setFoodItem(response[0]);
    setFoodCat(response[1]);
  }

  useEffect(() => {
    loadData()
  }, []);

  return (
    <div>
      <div><Navbar /></div>
      <div>
      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
                <div class="carousel-inner" id="carousel">
                    <div className=" carousel-caption" style={{ zIndex: "10" }}>
                        <form class="d-flex justify-content-center">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) =>{setSearch(e.target.value)}} />
                        </form>
                    </div>
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-item active">
                        <img src="https://source.unsplash.com/random/900x700/?pulao" class="d-block w-100" width="100%" height="500" style={{ filter: "brightness(60%)" }} alt="Paneer" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5><em>First Slide Content</em></h5>
                            <p>First Silde p</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://source.unsplash.com/random/900x700/?sweet" class="d-block w-100" width="100%" height="500" style={{ filter: "brightness(60%)" }} alt="Corn" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5><em>Second Slide Content</em></h5>
                            <p>Second Slide p</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://source.unsplash.com/random/900x700/?colddrink" class="d-block w-100" width="100%" height="500" style={{ filter: "brightness(60%)" }} alt="Colddrink" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5><em>Third Slide Content</em></h5>
                            <p>Third Slide p</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
      </div>
      <div className="btn-group mt-2" role="group" aria-label="Basic radio toggle button group" style={{width:"100%",height:"40px"}}>
        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" onClick={() =>{setTypeName("Main-Course")}} />
        <label className="btn btn-outline-primary" for="btnradio1"><strong>Main Course</strong></label>

        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off" onClick={() =>{setTypeName("Dishes")}} />
        <label className="btn btn-outline-primary" for="btnradio2"><strong>Dishes</strong></label>

        <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autocomplete="off" onClick={() =>{setTypeName("Drinks")}} />
        <label className="btn btn-outline-primary" for="btnradio3"><strong>Drinks</strong></label>
      </div>
      <div className="container">
        {
          foodCat !== []
            ? foodCat.filter((foodType) => (typeName===foodType.TypeName)).map((data) => {
              return (
                <div className="row mb-3">
                  <div key={data._id} className="fs-3 m-3">
                    {data.CategoryName}
                  </div>
                  <hr />
                  {foodItem !== []
                    ? foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase())))
                      .map((filterItems) => {
                        return (
                          <div key={filterItems._id} className="col-12 col-md-6 col-lg-3 m-2">
                            <Card foodItem={filterItems}
                              firstOption={filterItems.options[0]}
                              secondOption={filterItems.options[1]}
                            />
                          </div>
                        )
                      }) : <div>No such data found</div>
                  }
                </div>
              );
            }) : <div>""</div>
        }
      </div>
      <div><Footer /></div>
    </div>
  );
}

export default Home;