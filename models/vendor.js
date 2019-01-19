module.exports = function(sequelize, DataTypes) {
    var vendor = sequelize.define("vendor", {
      vendorName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 100]
        }
    }
    });
    return vendor;
  };