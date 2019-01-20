module.exports = function(sequelize, DataTypes) {
  var Order = sequelize.define("Order", {
    orderType: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    orderNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    project: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    }
  });

  Order.associate = models => {
    Order.hasMany(models.PartEntry, {
      foreignKey: "orderId"
    });
    Order.hasOne(models.Vendor, {
      foreignKey: "vendorId"
    });
  };
  return Order;
};
