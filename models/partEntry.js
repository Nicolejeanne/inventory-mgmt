module.exports = function(sequelize, DataTypes) {
  var PartEntry = sequelize.define("PartEntry", {
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
    vendor: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    quantity: {
      type: DataTypes.INT,
      allowNull: false,
      validate: {
        len: [1, 10]
      }
    },
    room: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 10]
      }
    },
    cabinet: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 10]
      }
    },
    bin: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 10]
      }
    },
    package: {
      type: DataTypes.INT,
      allowNull: false,
    // add auto_increment
      validate: {
        len: [1, 10]
      }
    }
  });

// PartEntry.associate = function(models) {
//   PartEntry.belongsTo(models.PartDefinition, {as})
// }

  return PartEntry;
};
