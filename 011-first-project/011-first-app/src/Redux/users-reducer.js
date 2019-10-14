const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [
        {
            id: 1,
            avatar: "https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1",
            fullName: 'Dmitry',
            status: "I'm a boss",
            location: { country: "Ukraine", city: "Kharkov" },
            followed: false
        },
        {
            id: 2,
            avatar: "https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1",
            fullName: 'Sveta',
            status: "Hello",
            location: { country: "Ukraine", city: "Kiev" },
            followed: false
        },
        {
            id: 3,
            avatar: "https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1",
            fullName: 'Sasha',
            status: "I'm so pretty",
            location: { country: "Ukraine", city: "Lutsk" },
            followed: true
        },
        {
            id: 4,
            avatar: "https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1",
            fullName: 'Max',
            status: "I like football",
            location: { country: "Ukraine", city: "Kharkov" },
            followed: false
        }
    ],
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                //users: [...state.usersData],
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return user;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    }
                    return user;
                })
            }

        case SET_USERS:
            return { ...state, users: [...state.users, ...action.users] }

        default:
            return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS }, users)

export default usersReducer;
