export const print1 = (storeAPI) => (next) => (action) => {
  console.log('1')
  return next(action)
}

export const print2 = (storeAPI) => (next) => (action) => {
  console.log('2')
  return next(action)
}

// export const print3 = (storeAPI) => (next) => (action) => {
//   console.log('3')
//   return next(action)
// }

export const print3 = (storeAPI) => {
  return function wrapDispatch(next) {
    return function handleAction(action) {

      console.log('3')
      return next(action)
    }
  }
}

export const logger = (storeAPI) => (next) => (action) => {
  const prev = storeAPI.getState()
  console.log('dispatching', action);

  let result = next(action);

  const current = storeAPI.getState()

  if (prev === current) {
    console.log('did not change')
  }
  
  return result;
}