import "./Product.css";


export default function Product({title, price = 1, features, features2}){
    // const list = features.map((feature) => <li>{feature}</li>);
    let styles = {backgroundColor : price > 30000 ? "grey" : ""};
    return(
        <div className="Product" style={styles}>
            <h3>{title}</h3>
            <h5>price: {price}</h5>
            {price > 30000 && <p>Discount of 5%</p>}
            {/* <p>{list}</p> */}
            {/* <p>{features2?.a}</p> */}
        </div>
    );
}