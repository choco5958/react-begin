import React, { useRef } from "react";

function User({ user }){
    return(
        <div>
            <b>{user.username}</b><span>({user.email})</span>
        </div>
    )
}

function UserList(){
    const users = [
        {
          id: 1,
          username: 'velopert',
          email: 'public.velopert@gmail.com'
        },
        {
          id: 2,
          username: 'tester',
          email: 'tester@example.com'
        },
        {
          id: 3,
          username: 'liz',
          email: 'liz@example.com'
        }
    ];

    return (
        <div>

            {/* 재사용되는 코드를 일일히 넣는 경우 */}
            <div>
                <div>
                    <b>{users[0].username}</b> <span>({users[0].email})</span>
                </div>
                <div>
                    <b>{users[1].username}</b> <span>({users[1].email})</span>
                </div>
                <div>
                    <b>{users[2].username}</b> <span>({users[1].email})</span>
                </div>
            </div>  

            {/* 컴포넌트를 재활용 하는 경우 */}
            <div>
                <User user={users[0]}/>
                <User user={users[1]}/>
                <User user={users[2]}/>
            </div>

            {/* map 함수를 이용하여 동적인 렌더링 */}
            <div>
                {users.map((user, index )=> (
                    <User user={user} key={index}/>
                ))}
            </div>
            
            {/* 배열의 id값을 key값에 할당 후 렌더링 */}
            <div>
                {users.map((user)=> (
                    <User user={user} key={user.id}/>
                ))}
            </div>
            
        </div>
    )
}

export default UserList;