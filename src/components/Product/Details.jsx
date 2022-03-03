import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom'
import * as ProductActions from '../../redux/actions/productActions'
import api from '../../utils/api';

function Details({ selectedProduct, setProduct, removeSelectedProduct }) {

  const { productId } = useParams();
  const { image, title, price, category, description } = selectedProduct;

  document.title = "Product details"
  const fetchProduct =  async (id) => {
    try{
      const response = await api.get('products/'+id);
      const data = response.data;

      setProduct(data)

    }catch(error){
      console.error(error)
    }
  }
  
  useEffect(() => {
    
    fetchProduct(productId);

    return async () => {
      console.log("Component will unmount")
      removeSelectedProduct()
    }
  }, [productId])
  
  return (
    <div className="ui grid container" style={{ marginTop: '50px' }}>
    {Object.keys(selectedProduct).length === 0 ? (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <h1>...Loading</h1>
      </div>
    ) : (
      <div className="ui placeholder segment">
        <div className="ui two column stackable center aligned grid">
          <div className="ui vertical divider">AND</div>
          <div className="middle aligned row">
            <div className="column lp">
              <img className="ui fluid image" src={image} />
            </div>
            <div className="column rp">
              <h1>{title}</h1>
              <h2>
                <a className="ui teal tag label">${price}</a>
              </h2>
              <h3 className="ui brown block header">{category}</h3>
              <p>{description}</p>
              <div className="ui vertical animated button" tabIndex="0">
                <div className="hidden content">
                  <i className="shop icon"></i>
                </div>
                <div className="visible content">Add to Cart</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
  )
}

const mapStateToProps = state => ({
  selectedProduct: state.allProducts.selectedProduct
})

const mapDispatchToProps = dispatch => ({
  setProduct: (product) => dispatch(ProductActions.setProduct(product)),
  
  removeSelectedProduct: () => dispatch(ProductActions.removeSelectedProduct())

})

export default connect(mapStateToProps, mapDispatchToProps)(Details)