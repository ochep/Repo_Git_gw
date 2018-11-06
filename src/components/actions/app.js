export const changePageTitle = (newPageTitle) => {
    return {
        type :'PAGE_TITLE_CHANGE',
        payload : {
            newPageTitle : newPageTitle
        }
    }
}

export const changeCopyRihtYear = (newCopyRight) => {
    return {
        type :'COPY_RIGHT_CHANGE',
        payload : {
            newCopyRight : newCopyRight
        }
    }
}