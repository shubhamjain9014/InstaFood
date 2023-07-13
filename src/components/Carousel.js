import React from "react";

function Carousel() {
    return (
        <div>
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
                <div class="carousel-inner" id="carousel">
                    <div className=" carousel-caption" style={{ zIndex: "10" }}>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-item active">
                        <img src="https://st3.depositphotos.com/5653638/14982/i/450/depositphotos_149828604-stock-photo-paneer-butter-masala-or-cheese.jpg" class="d-block w-100" width="100%" height="500" style={{ filter: "brightness(60%)" }} alt="Paneer" />
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
    );
}

export default Carousel;