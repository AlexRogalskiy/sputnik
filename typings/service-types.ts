/**
 * RouteFunction
 * @desc Route function type representing single unit of work per request
 */
export type RouteFunction = (req: any, res: any) => Promise<any>
//--------------------------------------------------------------------------------------------------
