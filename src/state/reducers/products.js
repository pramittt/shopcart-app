const reducer = (state = [], action) => {
  if(action.type === 'updateProduct') {
		return {
			...state,
			products: action.payload
		}
	} if(action.type === 'updateCategory'){
		return {
			...state,
			categories: action.payload,
		}
	} else {
		return state
	}
}

export default reducer