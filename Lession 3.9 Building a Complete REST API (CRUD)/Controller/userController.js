let user = [
    {id: 1, name: 'anthonippillai'},
    {id: 2, name: 'nirmala'},
]

// Get all users
const getAllUsers = (req,res) => {
    res.status(200).json({
        success: true,
        message: 'All users retrived successfully',
        data: user
    })
}

// Get user by id
const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    const foundUser = user.find(u => u.id === id);

    if(foundUser){
        res.status(200).json({
            success: true,
            message: 'User retrived successfully',
            data: foundUser
        })
    }
    else{
        res.status(404).json({
            success: false,
            message: 'User not found',
        })
    }
}

// Create a new user
const createUser = (req, res) => {
    const { name} = req.body;
    const newUser = {
        id: user.length + 1,
        name
    };
    user.push(newUser);
    res.status(201).json({
        success: true,
        message: 'User created successfully',
        data: newUser
    })

}

// Update a user
const updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;

    const foundUser = user.find(u => u.id === id);

    if(foundUser){
        foundUser.name = name;
        res.status(200).json({
            success: true,
            message: 'User updated successfully',
            data: foundUser
        })
    }
    else{
        res.status(404).json({
            success: false,
            message: 'User not found',
        })
    }
}

// Delete a user
const deleteUser = (req, res) => {
    const id = parseInt(req.params.id);
    const filteredUsers = user.filter(u => u.id !== id);

    if(filteredUsers.length !== user.length){
        user = filteredUsers;
        res.status(200).json({
            success: true,
            message: 'User deleted successfully',
        })
    }
    else{
        res.status(404).json({
            success: false,
            message: 'User not found',
        })
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}

