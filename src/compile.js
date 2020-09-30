import { merge, set, isElement, cloneDeepWith } from 'lodash'
import path from 'path'
import { lstatSync, readdirSync, readFileSync } from 'fs'

// Init global api file (important)
let api = {}

/**
 * Convert to object and merge
 * @param source
 */
const convert = (source) =>
{
    const parts = source.replace(/^.*\/specs\//, '').split('/')
    let resource = __non_webpack_require__(source)
    let content = typeof resource.default !== 'undefined' ? resource.default : resource

    let obj = {}
    let objPath = ''

    for ( let part of parts )
    {
        // Update path
        if ( !part.match(/\.js$/) ) objPath += `${part}.`

        // Cleanup path
        else objPath = objPath.replace(/\.$/, '')
    }

    // Handle global api file
    if ( objPath !== '' ) set(obj, objPath, content)
    else obj = content
    merge(api, obj)
}

/**
 * Parse directory
 * @param source
 */
const parse = (source) =>
{
    const parts = readdirSync(source)

    for ( let part of parts )
    {
        // Follow the path
        if ( lstatSync(`${source}/${part}`).isDirectory() ) parse(`${source}/${part}`)

        // And convert files into objects
        if ( part.match(/\.js$/) ) convert(path.resolve(`${source}/${part}`))
    }
}

/**
 * Parse and write file
 */
export default (base) =>
{
    /**
     * Parse specs
     * Start parsing process update "api" global object
     * --------------------------------------------------------------------------------- */
    parse(`${base}/specs`)

    /**
     * Parse path contents
     * --------------------------------------------------------------------------------- */
    let paths = {}
    const routes = readdirSync(`${base}/routes`)
    for ( let route of routes )
    {
        let content = __non_webpack_require__(path.resolve(`${base}/routes/${route}`)).default

        for ( let c of content )
        {
            // Push item
            if ( typeof paths[c.path] === 'undefined' ) paths[c.path] = {}
            paths[c.path][c.method] = c.params
        }
    }

    // Set api paths
    merge(api, { paths })

    /**
     * Parse markdown
     * --------------------------------------------------------------------------------- */
    api = cloneDeepWith(api, (value) =>
    {
        if (
            typeof value !== 'undefined'
            && value !== null
            && typeof value.match === 'function'
            && value.match(/^(\w+)\.md$/) !== null
        )
        {
            const p = `${base}/docs/${value}`
            return readFileSync(p, 'utf8')
        }

        if ( isElement(value) ) return value.cloneNode(true)
    })

    return api
}
