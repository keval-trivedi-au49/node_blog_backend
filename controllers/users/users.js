
exports.userDetails = async (req, res) => {
    try {
        return res.send(req.user);
    } catch (error) {
        console.log(error)
    }
};