// import { apiHandler, usersRepo, omit } from 'helpers/api';
// import { apiHandler, usersRepo, omit } from '../../../helpers/api';


// export default apiHandler({
//     get: getUsers
// });

// function getUsers(req, res) {
//     // return users without passwords in the response
//     const response = usersRepo.getAll().map(x => omit(x, 'password'));
//     return res.status(200).json(response);
// }


import { usersRepo } from '../../../helpers/api';

export default handler;

function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return getUsers();
        case 'POST':
            return createUser();
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

    function getUsers() {
        const users = usersRepo.getAll();
        return res.status(200).json(users);
    }
    
    function createUser() {
        try {
            usersRepo.create(req.body);
            return res.status(200).json({});
        } catch (error) {
            return res.status(400).json({ message: error });
        }
    }
}