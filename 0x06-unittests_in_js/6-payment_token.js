const getPaymentTokenFromAPI = (success) => {
    if (success === true) {
        return Promise.resolve({data: 'Successful response from API'})
    }
}

module.exports = getPaymentTokenFromAPI
