const cryptoModel = require('../models/cryptoModel')
const axios = require('axios')

const getCrypto = async (req, res) => {
    try {

        let options = {
            method: 'get',
            url: 'https://api.coincap.io/v2/assets',
            headers: {
                Authorization: "Bearer 83803234-3632-4e24-a407-5917c77b2a28",
            }
        }
        let result = await axios(options)

        let coinData = result.data.data

        await cryptoModel.deleteMany()

        await cryptoModel.create(coinData)

        let sortCrypto = (coinData).sort((a, b) => a.changePercent24Hr - b.changePercent24Hr)

        console.log(sortCrypto.length)

        res.status(200).send({ status: true, data: sortCrypto })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}

module.exports.getCrypto = getCrypto