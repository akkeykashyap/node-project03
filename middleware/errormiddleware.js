module.exports = function (err, req, res, next) {
    console.error(err.stack);  // Log the error stack to the console
    res.status(500).send('Something went wrong!');  // Send a generic error message to the client
};