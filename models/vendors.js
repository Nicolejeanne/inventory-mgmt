module.exports = function (sequelize, Datatypes) {
    var Vendors = sequelize.define("Vendors", {
vendorName: {
    type: Datatypes.STRING,
    allowNull: false,
    validate: {
        len: [1, 255]
    }
}
});
    return Vendors;
};