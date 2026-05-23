import Product from "./Product";


export default function ProductTab(){
    let options = ["hi-tech","durable","fast"];
    return(
      <>
        <Product title="phone" price={30000} features={options}/>  
        <Product title="laptop" price={60000}  /* features2={{a:"hi-tech", b:"durable", c:"fast"}} */ /> 
        <Product title="pen" price={10}/> 
      </>
    );
}