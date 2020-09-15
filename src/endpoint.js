/**
 * Endpoint method
 *
 * @param {string} method
 * @param {string} path
 * @param {object} params
 * @returns {{path: string, method: string, params: object}}
 */
const endpoint = (method, path, params) =>
{
    return {
        method,
        path,
        params,
    }
}

export default {

    /**
     * GET method
     *
     * @param {string} path
     * @param {object} params
     * @return {{path: string, method: string, params: object}}
     */
    get(path, params)
    {
        return endpoint('get', path, params)
    },

    /**
     * POST method
     *
     * @param {string} path
     * @param {object} params
     * @return {{path: string, method: string, params: object}}
     */
    post(path, params)
    {
        return endpoint('post', path, params)
    },

    /**
     * PUT method
     *
     * @param {string} path
     * @param {object} params
     * @return {{path: string, method: string, params: object}}
     */
    put(path, params)
    {
        return endpoint('put', path, params)
    },

    /**
     * DELETE method
     *
     * @param {string} path
     * @param {object} params
     * @return {{path: string, method: string, params: object}}
     */
    delete(path, params)
    {
        return endpoint('delete', path, params)
    },

}
