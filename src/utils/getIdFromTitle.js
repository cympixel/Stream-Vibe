const getIdFromTitle = (title = '') => {
    return title.toLowerCase().replaceAll(' ', '-')
}

export default getIdFromTitle