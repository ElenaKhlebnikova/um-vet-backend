import tryCatchFn from '../utils/index.js'
import serviceAndPriceSchema from '../models/service-and-prices-schema.js'
import deServiceAndPriceSchema from '../models/de-service-and-prices-schema.js'
const getServiceAndPrice = async (req, res) => {
    const get = async () => {
        if (req.query.lang === 'en') {
            const service = await serviceAndPriceSchema.find({})
            return service
        }

        if (req.query.lang === 'de') {
            const service = await deServiceAndPriceSchema.find({})
            return service
        }
    }
    tryCatchFn(get, res)
}

export default getServiceAndPrice
