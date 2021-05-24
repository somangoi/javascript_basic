class UserStorage {
    loginUser(id, password){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'somi' && password === 'dream') ||
                    (id === 'coder' && password === 'academy')
                ){
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        })
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'somi'){
                    resolve({ name: 'somi', role: 'admin' });
                }else{
                    reject(new Error('no access'));
                }
            }, 1000);
        })
    }
}


const userStroage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStroage
    .loginUser(id, password)
    .then(userStroage.getRoles) 
    .then(user => alert(`hello! ${user.name}, you have a ${user.role} role.`))
    .catch(console.log)

userStroage.loginUser(
    id, 
    password,
    user => {
        userStroage.getRoles(
            user,
            userWithRole => {
                alert(`hello! ${userWithRole.name}, you have a ${userWithRole.role} role.`)
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
);