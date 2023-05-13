const User = require('../models/userModel');

// GET - get all users
const getAllUsers = async () => {
    const users = await User.find({});
    return users;
}

// GET - get user by ID
const getUserByID = async (id) => {
    const user = await User.findById(id);
    return user;
}

// POST - register a new user
const register = async (obj) => {
    const { fullname, username, email, password } = obj;
    const user = new User({ fullname: fullname, username: username, email: email });
    await User.register(user, password);
    return 'Register Completed successfully';
}

// POST - change user password
const changePassword = async (id, obj) => {
    const user = await User.findById(id);
    await user.changePassword(obj.old, obj.new);
    return 'Password updated successfully';
}

// PUT - update existing user data
const updateUserData = async (id, obj) => {
    await User.findByIdAndUpdate(id, obj);
    return 'User data updated successfully';
}

// DELETE - delete a member
const deleteUser = async (id) => {
    await User.findByIdAndDelete(id);
    return 'User deleted successfully';
}

module.exports = {
    getAllUsers,
    getUserByID,
    register,
    changePassword,
    updateUserData,
    deleteUser
}