/**
 *
 * @param schema
 * @param required
 * @returns {{required: boolean, content: {'application/json': {schema: *}}}}
 */
export const body = (schema, required = true) =>
{
    return {
        required,
        content: {
            'application/json': {
                schema,
            },
        },
    }
}

/**
 *
 * @param description
 * @param schema
 * @returns {{description: *}}
 */
export const response = (description, schema = undefined) =>
{
    const res = {
        description,
    }

    if ( typeof schema !== 'undefined' )
    {
        res.content = {
            'application/json': {
                schema,
            },
        }
    }

    return res
}

/**
 *
 * @param position
 * @param name
 * @param schema
 * @returns {{schema: *, in: *, name: *}}
 */
export const parameter = (position, name, schema, required = false) =>
{
    return {
        in: position,
        name,
        schema,
        required,
    }
}
