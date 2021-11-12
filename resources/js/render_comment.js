// // import users from "./user.js"
// // import comments from "./comment.js"

// function getComments() {
//     return new Promise((resolve) => {
//         resolve(comments)
//     })
    
// }

// function getUserById(userIds) {
//     return new Promise((resolve) => {
//         const result = users.filter((user) => {
//             return userIds.includes(user.id)
//         })
//         resolve(result)
//     })
// }

// getComments()
//     .then(async (comments) => {
//         const userIds = comments.map(comment => {
//             return comment.userId
//         })
//         const users = await getUserById(userIds)
//         return {
//             users: users,
//             comments: comments
//         }
//     })
//     .then(data => {
//         const listComment = data.comments.map((comment) => {
//             var user = data.users.find((user) => {
//                 return user.id === comment.userId
//             })
//             return `<li class="comment-item">
//                         <div class="avatar">
//                             <img src="${user.image}">
//                         </div>

//                         <div class="body-comment">
//                             <div class="user-name">
//                                 <h4>${user.name}</h4>
//                                 <span class="time-post">${comment.timePost}</span>
//                             </div>

//                             <div class="comment">
//                                 <p>${comment.content}</p>
//                             </div>

//                             <div class="op-user">
//                                 <div class="like">
//                                     <button><i class="fas fa-thumbs-up"></i></button>
//                                     <span>${comment.like}</span>
//                                 </div>

//                                 <div class="dislike">
//                                     <button><i class="fas fa-thumbs-down"></i></button>
//                                     <span>${comment.dislike}</span>
//                                 </div>

//                                 <div class="reply">
//                                     <button>Phản hồi</button>
//                                 </div>
//                             </div>
//                         </div>

//                         <div class="report">
//                             <button>...</button>
//                         </div>
//                     </li>`
//         })
//         document.querySelector('.content .comment-list .list').innerHTML = listComment.sort().join('')
//     })

async function getComments() {
    const resp = await fetch('/resources/js/comment.json')
    const data = await resp.json()
    return await new Promise(resolve => {
        resolve(data)
    })
}

async function getUsers() {
    const resp = await fetch('/resources/js/user.json')
    const data = await resp.json()
    return await new Promise(resolve => {
        resolve(data)
    })
}

function getUserById(userIds) {
    return new Promise((resolve) => {
        resolve(
            getUsers()
                .then(data => data.filter((user) => {
                    return userIds.includes(user.id)
                }))
        )
    })
}

// console.log(getComments())
// console.log(getUsers())
// console.log(getUserById([1,2,3,4,5]))

getComments()
    .then(async (comments) => {
        const userIds = comments.map(comment => {
            return comment.userId
        })
        const users = await getUserById(userIds)
        return {
            users: users,
            comments: comments.sort((a, b) => b.id - a.id)
        }
    })
    .then(data => {
        const listComment = data.comments.map((comment) => {
            var user = data.users.find((user) => {
                return user.id === comment.userId
            })
            return `<li class="comment-item">
                        <div class="avatar">
                            <img src="${user.image}">
                        </div>

                        <div class="body-comment">
                            <div class="user-name">
                                <h4>${user.name}</h4>
                                <span class="time-post">${comment.timePost}</span>
                            </div>

                            <div class="comment">
                                <p>${comment.content}</p>
                            </div>

                            <div class="op-user">
                                <div class="like">
                                    <button><i class="fas fa-thumbs-up"></i></button>
                                    <span>${comment.like}</span>
                                </div>

                                <div class="dislike">
                                    <button><i class="fas fa-thumbs-down"></i></button>
                                    <span>${comment.dislike}</span>
                                </div>

                                <div class="reply">
                                    <button>Phản hồi</button>
                                </div>
                            </div>
                        </div>

                        <div class="report">
                            <button>...</button>
                        </div>
                    </li>`
        })
        document.querySelector('.content .comment-list .list').innerHTML = listComment.join('')
    })