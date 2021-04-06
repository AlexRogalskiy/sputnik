// import moment from 'moment'
//
// export default async function getNotifications(github: any): Promise<Notifications> {
//     const rawNotifications = await github.activity.getNotifications({
//         participating: true,
//     })
//     return new Notifications(github, rawNotifications)
// }
//
// class Notifications {
//     constructor(private github: any, private notifications: any[]) {}
//
//     get withMentions(): any[] {
//         return this.notifications.filter(notification => {
//             return (
//                 notification.unread === true &&
//                 notification.reason === 'mention' &&
//                 notification.subject.type === 'Issue'
//             )
//         })
//     }
//
//     get latestUpdateTime(): moment.Moment {
//         const updateTimes = this.notifications.map(n => moment(n.updated_at))
//         return moment.max(...updateTimes).utc()
//     }
//
//     async markAllAsRead(): Promise<void> {
//         // Mark as read all the notification that we are holding.
//         return this.github.activity.markNotificationsAsRead({
//             // Mark all notifications *before* the next tick (all second-based) as read.
//             // This feels like it risks races, but seems to be the best we can do...
//             last_read_at: this.latestUpdateTime.add(1, 'second').format(),
//         })
//     }
//
//     async unsubscribeAll(): Promise<any> {
//         return Promise.all(
//             this.notifications.map(notification => {
//                 return this.github.activity.setNotificationThreadSubscription({
//                     id: notification.id,
//                     ignored: true,
//                 })
//             })
//         )
//     }
// }
export default {}
