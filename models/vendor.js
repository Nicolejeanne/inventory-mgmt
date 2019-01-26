module.exports = function(sequelize, DataTypes) {
    var Vendor = sequelize.define("vendor", {
      vendorName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 100]
        }
    }
    });

    return Vendor;
  };