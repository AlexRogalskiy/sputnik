import boxen from 'boxen'

/**
 * StyleOptions
 * @desc Type representing configuration options
 */
export type StyleOptions = {
    sourceFile?: string
    targetPath?: string
    targetFile?: string
    jsonPath?: string
    jsonFields?: string[]
}
//--------------------------------------------------------------------------------------------------
/**
 * ProfileOptions
 * @desc Type representing profile options
 */
export type ProfileOptions = {
    /**
     * Style configuration options.
     */
    readonly styleOptions?: Partial<StyleOptions>
    /**
     * Output options
     */
    readonly outputOptions?: Partial<boxen.Options>
}
//--------------------------------------------------------------------------------------------------
