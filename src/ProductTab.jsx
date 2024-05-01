import Product from "./Product.jsx";
function ProductTab(){
    // let options=["hi-tech","durable","fast"];
    return (
        <>
          <Product title="phone" price={3000}/>
           <Product title="laptop" price={4000}/>
          <Product title="pen" price={5000}/> 

        </>
    );
}
export default ProductTab;