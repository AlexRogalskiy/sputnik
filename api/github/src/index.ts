// import moment from 'moment'
// import GithubApi from 'github'
//
// import getNotifications from './model/notifications'
// import Thread from './model/thread'
//
// const github = GithubApi()
//
// interface GithubAuthParams {
//     type: 'oauth'
//     token: string
// }
//
// export function connectGithub(params: GithubAuthParams): void {
//     github.authenticate(params)
// }
//
// export interface DevBotMention {
//     user: string
//     body: string
//     created_at: string
//
//     id: number
//     url: string
// }
//
// export interface DevBotEntryPoint {
//     onMention(
//         mention: DevBotMention,
//         context: Thread,
//         respondCallback: (response: string) => Promise<void>
//     ): void
// }
//
// export async function runBot(bot: DevBotEntryPoint): Promise<void> {
//     console.info('Running dev-bot')
//
//     const notifications = await getNotifications(github)
//     notifications.markAllAsRead().catch(error => console.error(error)) // Log errors, but don't wait for this request.
//
//     if (notifications.withMentions.length === 0) {
//         console.info('No outstanding notifications')
//         return
//     }
//
//     const username = (await github.users.get({})).login
//
//     await Promise.all(
//         notifications.withMentions.map(async notification => {
//             const lastRead = moment(notification.last_read_at || '2000-01-01T00:00:00Z')
//             const thread = await new Thread(github, notification.subject.url)
//
//             const newMentions = thread.comments.filter(
//                 c =>
//                     // Only mentions of this bot
//                     new RegExp(`@${username}([^a-zA-Z0-9-]|$)`).test(c.body) &&
//                     // That we haven't seen
//                     moment(c.created_at).isSameOrAfter(lastRead) &&
//                     // Where we've seen the notification and marked it as read (so we avoid races)
//                     moment(c.created_at).isSameOrBefore(notifications.latestUpdateTime)
//             )
//             logMentions(newMentions)
//
//             for (const rawMention of newMentions) {
//                 const mention = {
//                     user: rawMention.user.login,
//                     body: rawMention.body,
//                     created_at: rawMention.created_at,
//
//                     url: rawMention.url,
//                     id: rawMention.id,
//                 }
//
//                 bot.onMention(mention, thread, async msg => thread.comment(msg))
//             }
//         })
//     )
//
//     // Unsubscribe, so we don't get non-mention updates to this thread in future.
//     // We'd filter them anyway, but it avoids extra requests if we don't have to.
//     await notifications.unsubscribeAll()
// }
//
// function logMentions(comments: any): void {
//     if (comments.length === 0) {
//         console.warn('Notification, but no mentions found for notification')
//     } else {
//         console.info(`Found ${comments.length} mentions:\n${comments.map(c => `${c.body}\n`)}`)
//     }
// }
export default {}
