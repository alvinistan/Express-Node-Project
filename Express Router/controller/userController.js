const getUser = (req,res) => {
    const user = [
        {
            id: 1,
            name: 'John Doe',
        },
        {
            id: 2,
            name: 'Jane',
        }
    ]

    res.json(user);
}

module.exports = {
    getUser
}