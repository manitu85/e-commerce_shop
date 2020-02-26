import React, { useEffect, lazy, Suspense } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchCollectionsStart } from '../../redux/shop/shop.actions'

import Spinner from '../../components/spinner/spinner.components'
// import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'
// import CollectionsPageContainer from '../collection/collection.container'


const CollectionsOverviewContainer = lazy(() => import('../../components/collections-overview/collections-overview.container'))
const CollectionsPageContainer = lazy(() => import('../collection/collection.container'))

const ShopPage = ({ fetchCollectionsStart, match }) => {
   
   // componentDidMount
  useEffect(() => {
    fetchCollectionsStart()
  }, [fetchCollectionsStart])
 
  return (
    <div className='shop-page' >
      <Suspense fallback={<Spinner />} >
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionsPageContainer}
        />
      </Suspense>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})


export default connect(null, mapDispatchToProps)(ShopPage)



