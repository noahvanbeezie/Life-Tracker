const bcrypt = require('bcryptjs')

module.exports = {
    login: async (req,res) => {
        console.log('hit1')
        const db = req.app.get('db')
        const {username,password} = req.body
        let user = await db.login(username)
        let checkUser = user[0]
        if(!checkUser){
            res.status(500).send('User not found')
        }
        console.log('hit2')
        const authenticated = bcrypt.compareSync(password, checkUser.password)
        if(authenticated){
            delete user.password
            req.session.user = user
            res.status(200).send(user)
        }else{
            res.status(500).send('Incorrect Password')
        }
    },
    register: async (req,res) => {
        const db = req.app.get('db')
        const {username,password,email} = req.body
        let checkUser = await db.check_user(username)
        let testedUser = checkUser[0]
        if(testedUser){
            res.status(500).send('Username already taken')
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        let newUser = await db.register(username,hash,email)
        req.session.user = newUser
        res.status(200).send(newUser)
    },

}