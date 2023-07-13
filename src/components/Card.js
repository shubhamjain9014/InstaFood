import React, { useState, useRef, useEffect } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";

function Card(props) {
    let dispatch = useDispatchCart();
    let data = useCart();
    let firstOption = props.firstOption;
    let priceFirstOption = Object.keys(firstOption);
    let secondOption = props.secondOption;
    let secOption = Object.keys(secondOption);
    const [qty, setQty] = useState(1);
    const [size, setSize] = useState("");
    const [spec, setSpec] = useState("");
    const priceRef = useRef();
    const specRef = useRef();

    const handleAddToCart = async () => {
        let food = []
        for (const item of data) {
            if (item.id === props.foodItem._id) {
                food = item;

                break;
            }
        }
        console.log(food)
        console.log(new Date())
        if (food !== []) {
            if (food.size === size && food.spec === spec) {
                await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty })
                return
            }
            else if (food.size !== size || food.spec !== spec) {
                await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size, spec: spec, img: props.ImgSrc })
                console.log("Size different so simply ADD one more to the list")
                return
            }
            return
        }
        await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size, spec: spec, img: props.imgSrc });
        console.log(data);
    }

    useEffect(() => {
        setSize(priceRef.current.value);
        setSpec(specRef.current.value);
    }, []);

    let finalPrice = qty * parseInt(firstOption[size]);

    return (
        <div>
            <div className="card mt-3 cardstyling" style={{ "width": "21rem", "maxHeight": "420px", }}>
                <img src={props.foodItem.img} className="card-img-top" alt="..." style={{ height: "200px", objectFit: "fill" }} />
                <div className="card-body">
                    <h5 className="card-title">{props.foodItem.name}</h5>
                    <div className="container w-100 p-0">
                        <select className="m-2 h-100 bg-success rounded" onChange={(e) => { setQty(e.target.value) }}>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                );
                            })}
                        </select>
                        <select className="m-2 h-100 bg-success rounded" ref={priceRef} onChange={(e) => { setSize(e.target.value) }}>
                            {priceFirstOption.map((i) => {
                                return (
                                    <option key={i} value={i}>{i}</option>
                                );
                            })
                            }
                        </select>
                        <select className="m-2 h-100 bg-success rounded" ref={specRef} onChange={(e) => { setSpec(e.target.value) }}>
                            {secOption.map((data) => {
                                return (
                                    <option key={data} value={data}>{data}</option>
                                );
                            })
                            }
                        </select>
                        <div className="d-inline h-100 fs-5">
                            &#8377;{finalPrice}/-
                        </div>
                    </div>
                    <hr />
                    <button className={"btn  btn-success justify-center ms-2"} onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default Card;