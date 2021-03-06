// import Repo from './repo'
//
// class Thread {
//     constructor(private _github: any, public url: string) {
//         const issueMatch = /api.github.com\/repos\/([\w\\-]+)\/([\w\\-]+)\/issues\/(\d+)/.exec(url)
//         if (!issueMatch) {
//             throw new Error(`Received issue notification that didn't match regex: ${url}`)
//         }
//
//         this.repo = new Repo(issueMatch[1], issueMatch[2])
//         this.id = parseInt(issueMatch[3], 10)
//
//         // Note that this constructor returns a *promise*, not an instance
//         return <any>(<Promise<Thread>>this._github.issues
//             .getComments({
//                 user: this.repo.user,
//                 repo: this.repo.name,
//                 number: this.id,
//             })
//             .then(comments => {
//                 this.comments = comments
//                 return this
//             }))
//     }
//
//     repo: Repo
//     id: number
//     comments: any[]
//
//     async comment(message: string): Promise<void> {
//         return this._github.issues.createComment({
//             user: this.repo.user,
//             repo: this.repo.name,
//             number: this.id,
//             body: message,
//         })
//     }
// }
//
// export type ThreadConstructor = new (github: any, url: string) => Promise<Thread>
//
// export default Thread
export default {}
