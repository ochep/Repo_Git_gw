const intialState = {
    pageTittle: 'Qtemuan coy',
    footerTittle: 'iboy'
}

const appReducer = (state = intialState, action) => {
    switch (action.type) {
        default:
            return state
        case 'PAGE_TITLE_CHANGE':
            return {
                ...state,
                pageTittle: action.payload.newPageTitle
            }
        case 'COPY_RIGHT_CHANGE':
            return {
                ...state,
                footerTittle: action.payload.newCopyRight
            }
    }
}

export default appReducer