/**
 *
 * @param {string|undefined} example
 * @return {{type: string, example: string|undefined}}
 */
export const string = (example = undefined) =>
{
    return {
        type: 'string',
        example,
    }
}

/**
 *
 * @returns {{format: string, type: string}}
 */
export const uuid = () =>
{
    return {
        type: 'string',
        format: 'uuid',
    }
}

/**
 *
 * @returns {{format: string, type: string}}
 */
export const email = () =>
{
    return {
        type: 'string',
        format: 'email',
    }
}

/**
 *
 * @returns {{format: string, type: string}}
 */
export const datetime = (example = undefined) =>
{
    return {
        type: 'string',
        format: 'date-time',
        example,
    }
}

/**
 *
 * @param items
 * @returns {{type: string, enum: *}}
 */
export const list = (items, example = undefined) =>
{
    return {
        type: 'string',
        enum: items,
        example,
    }
}

/**
 * Integer
 *
 * @param example
 * @returns {{type: string, example: *}}
 */
export const integer = (example = undefined) =>
{
    return {
        type: 'integer',
        example,
    }
}

/**
 * Integer
 *
 * @param example
 * @returns {{type: string, example: *}}
 */
export const number = (example = undefined) =>
{
    return {
        type: 'number',
        example,
    }
}

/**
 * Integer
 *
 * @param example
 * @returns {{type: string, example: *}}
 */
export const bool = (example = undefined) =>
{
    return {
        type: 'boolean',
        example,
    }
}

/**
 * Object
 *
 * @param properties
 * @returns {{type: string, properties: *}}
 */
export const object = (properties = {}, addOn = undefined) =>
{
    const obj = {
        type: 'object',
        properties,
    }

    switch ( true )
    {
        case Array.isArray(addOn):
            obj.required = addOn
            break

        case typeof addOn === 'object':
            obj.example = addOn
            break

        case typeof addOn === 'string':
            obj.description = addOn
            break
    }

    return obj
}

/**
 * Array
 *
 * @param items
 * @returns {{type: string, items: *}}
 */
export const array = (items, example = undefined) =>
{
    return {
        type: 'array',
        items,
        example,
    }
}

/**
 * Ref
 *
 * @param target
 * @returns {{$ref: *}}
 */
export const ref = (target) =>
{
    return {
        $ref: target,
    }
}
