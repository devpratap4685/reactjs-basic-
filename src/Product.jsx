import "./Product.css";
function Product({title,price}){
  let styles={backgroundColor:price>3000 ? "green": ""};
  
    return (
        <div className="Product" style={styles}>
            <h3>{title}</h3>
            <h5>price:{price}</h5>
            {price>3000?<p>Discount of 5%</p>: null}
        </div>
    );
}
export default Product;