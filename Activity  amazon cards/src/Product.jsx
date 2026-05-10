import Price from "./Price";
import "./Product.css";


export default function Product({title}){
    return(
        <div className="Product">
            <h4>{title}</h4>
            <p>Description</p>
            <Price />
        </div>
    );
}