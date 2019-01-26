'use strict';

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
    },
    // createdAt: {
    //   allowNull: false,
    //   type: DataTypes.DATE,
    //  default: now()
    // }, 
    // updatedAt: {
    //   allowNull: false,
    //   type: DataTypes.DATE,
    //  default: now()
    // } 
  });

  // Order.associate = models => {
  //   Order.belongsTo(models.Vendor, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   })
  // };
  return Order;
};
