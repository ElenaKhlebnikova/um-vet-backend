const tryCatchFn = async (fn, res) => {
    try {
        const data = await fn()
        res.status(200).json({
            status: 'success',
            data: {
                data,
            },
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        })
    }
}

export default tryCatchFn
