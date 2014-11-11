module.exports = {
    open: function (success, failure,mimetype) {
        cordova.exec(success, failure, "FileChooser", "open", [mimetype]);
    }
};
