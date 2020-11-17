const express = require('express');
const router = express.Router();

const usersJSON = require('../../users.json');


const notfound = {
    error: 'Query is not found.'
}

module.exports = () => {
    router.get('/listall', (req, res, next) => {
        res.send(usersJSON);
    });

    router.get('/listone', (req, res, next) => {
        const { query } = req;

        if(query['id']){
            const singleUser = usersJSON.users.find(x => x['id'] == query['id'] );
            if (!singleUser) {
                res.send(notfound);
                return;             
            }
            res.send(singleUser);
            return;
        }else {
            res.send(notfound);
            return;
        }
    });
    
    return router;
}