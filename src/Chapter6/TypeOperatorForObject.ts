// Keying into Objects with Type Operators

type APIResponse = {
    user: {
        userId: string
        friendList: {
            count: number
            friends: {
                firstName: string
                lastName: string
            }[]
        }
    }
};

type FriendList = APIResponse['user']['friendList'];

const friendList: FriendList = {
    count: 10,
    friends: [
        { firstName: 'Lucas', lastName: 'Silva' },
        { firstName: 'Alice', lastName: 'Silva' },
        { firstName: 'Bob', lastName: 'Silva' },
        { firstName: 'Charlie', lastName: 'Silva' },
        { firstName: 'David', lastName: 'Silva' },
        { firstName: 'Eve', lastName: 'Silva' },
        { firstName: 'Frank', lastName: 'Silva' },
        { firstName: 'Grace', lastName: 'Silva' },
        { firstName: 'Hugo', lastName: 'Silva' },
        { firstName: 'Ivy', lastName: 'Silva' },
    ]
};

// Keyof Operator
type ResponseKeys = keyof APIResponse // 'user'
type UserKeys = keyof APIResponse['user'] // 'userId' | 'friendList'
type FriendListKeys =
    keyof APIResponse['user']['friendList'] // 'count' | 'friends');
