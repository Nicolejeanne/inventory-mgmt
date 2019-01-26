module.exports = function(sequelize, DataTypes) {
    var Vendor = sequelize.define("Vendor", {
      vendorName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 50]
        }
      }
      });
  
      Vendor.associate = function(models) {
        Vendor.hasMany(models.Order);
        // , {as:"vendor", foreignKey: "vendorID"}
      }
    return Vendor;
  };
  