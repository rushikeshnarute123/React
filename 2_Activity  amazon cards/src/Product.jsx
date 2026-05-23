import Price from "./Price";
import "./Product.css";


export default function Product({title, idx}){
    let oldPrices = ["12.3","23.4","32.5","20"];
    let newPrices = ["12","20","30","15"];
    let description = [
        ["8,000 DPI", "5 programmable buttons"],
        ["intuitive surface", "designed for iPad Pro"],
        ["designed for iPad Pro", "intuitive surface"],
        ["wireless", "optional orientation"],
    ];
    return(
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
        </div>
    );
}