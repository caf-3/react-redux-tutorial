import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Single from './Single'
import api from '../../utils/api'
import * as ProductActions from '../../redux/actions/productActions'

function List({ fetchProducts }) {

  document.title = "Product listing"
  
  
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
  fetchProducts: () => dispatch(ProductActions.fetchProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(List)