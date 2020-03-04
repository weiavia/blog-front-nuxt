const middleware = {}

middleware['common'] = require('../middleware/common.js')
middleware['common'] = middleware['common'].default || middleware['common']

export default middleware
