/**
 * @param {object} obj
 * @param {string} description
 * @returns {object}
 */
export const describe = (obj, description) =>
{
    return {
        ...obj,
        description,
    }
}

/**
 * @param {object} obj
 * @param {string|number|object} example
 * @returns {object}
 */
export const demonstrate = (obj, example) =>
{
    return {
        ...obj,
        example,
    }
}
