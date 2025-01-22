const logger = require('./logger')

const requestLogger = (request, response, next) => {
    logger.info('Method', request.method)
    logger.info('Path', request.path)
    logger.info('Body', request.body)
    logger.info('Response', response)
    logger.info('---')
    next()
}

const errorHandler = (error, request, response, next) => {
    logger.info(request)
    if (error.name === 'CastError') {
        response.status(400).send({ error: 'Malformed Request' })
    } else if (error.name === 'ValidationError') {
        response.status(400).json({ error: error.message })
    }

    next(error)
}

const unknownEndpoint = (request, response, next) => {
    logger.info(request)
    response.status(404).send({ error: 'Unknown Endpoint' })
    next()
}

module.exports = { requestLogger, errorHandler, unknownEndpoint }