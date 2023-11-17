'use strict';

const users =  [
    {
        "userName": "rloria",
        "password":"lroria",
        "email":"lroria@est.utn.ac.cr",
        "isActive": false,
        "role":"Admin"
    },
    {
        "userName": "dquesada",
        "password":"Dquesada123@",
        "email":"dquesada@est.utn.ac.cr",
        "isActive": true,
        "role":"Read"
    },
    {
        "userName": "wgarcia",
        "password":"wgarcia",
        "email":"wgarcia@est.utn.ac.cr",
        "isActive": true,
        "role":""
    },
    {
        "userName": "kchaves",
        "password":"Kchaves@",
        "email":"kchaves@est.utn.ac.cr",
        "isActive": true,
        "role":"Read"
    },
    {
        "userName": "kangulo",
        "password":"kangulo@",
        "email":"kangulo@est.utn.ac.cr",
        "isActive": false,
        "role":"Admin"
    },
    {
        "userName": "hespinoza",
        "password":"123",
        "email":"herpinoza@est.utn.ac.cr",
        "isActive": true,
        "role":"Read"
    },
    {
        "userName": "acruz",
        "password":"@cruZ213",
        "email":"acruz@est.utn.ac.cr",
        "isActive": true,
        "role":"Writer"
    },
    {
        "userName": "mrodriguez",
        "password":"Mrodriguez@",
        "email":"mrodruguez@est.utn.ac.cr",
        "isActive": true,
        "role":"Writer"
    },
    {
        "userName": "vvega",
        "password":"vvega@",
        "email":"vvega@est.utn.ac.cr",
        "isActive": true,
        "role":"Read"
    }
];

var usersCopy = users;

//Method to validate the user authentication, otherwise, it sends an error message
exports.authUser = function(req, res) {
    if (req.body.userName == undefined || req.body == null || req.body.length == 0 || req.body == ''){
        res.status(404).send({ success: 'false', message: 'Must provide the credentials for loggin.' });
        return;
    }

    let user = users.filter(item => item.userName == req.body.userName && item.password == req.body.password);
    if (user.length == 0){
        res.status(404).send({ success: 'false', message: 'The user/password does not match with the right credentials.' });
        return;
    }

    let loggedUser = {
        userName: user[0].userName,
        password: "******",
        email: user[0].email,
        isActive: user[0].isActive,
        role: user[0].role
    };
    res.status(200).send(loggedUser);
};

//method to return all users list
exports.list_all_users = function(req, res) {
    //users.map(item=> item.password = "*****");
    res.status(200).send(usersCopy.map(maskPassword));
};

function maskPassword(item){
    item.password = item.password; //"*****";
    return item;
}

exports.get_an_user = function(req, res) {
    let user = users.filter(item => item.userName == req.params.userName);
    console.log(user); //it is to see the info in debug mode.
    if (user.length > 0){
        res.status(200).send(user);
    }else
        res.status(404).send({ success: 'false', message: 'User not found' });
};