import * as shopTypes from './shop.types'
// import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'


export const fetchCollectionsStart = () => ({
  type: shopTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = collectionsMap => ({
  type: shopTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
})

export const fetchCollectionsFail = errorMessage => ({
  type: shopTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
})

// Async function to detect redux-thunk
// export const fetchCollectionsStartAsync = () => {
//   return dispatch => {
//     const collectionRef = firestore.collection('collections')
//     dispatch(fetchCollectionsStart())

//     collectionRef
//       .get()
//         .then(snapshot => {
//           const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
//           dispatch(fetchCollectionsSuccess(collectionsMap))
//       })
//       .catch(error => dispatch(fetchCollectionsFail(error.message)))
//   }
// }