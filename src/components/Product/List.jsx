import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Single from './Single'
import api from '../../utils/api'
import * as ProductActions from '../../redux/actions/productActions'

function List({ setProducts }) {

  document.title = "Product listing"
  
  const fetchProducts = async () => {
    
    try{
      const response = await api.get('products');
      const data = response.data;
      setProducts(data)
    }catch(err){
      console.log({err})
    }
  }
  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className="ui grid container" style={{ marginTop: '50px'}}>
      <Single />
    </div>
  )
}

const mapStateToProps = state => ({
  allProducts: state.allProducts.products
})

const mapDispatchToProps = dispatch => ({
  setProducts: (products) => dispatch(ProductActions.setProducts(products))
})

export default connect(mapStateToProps, mapDispatchToProps)(List)