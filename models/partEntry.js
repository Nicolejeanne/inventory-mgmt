module.exports = function(sequelize, DataTypes) {
  var PartEntry = sequelize.define("PartEntry", {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
        len: [1, 10]
      }
    },
    conforming: {
      type: DataTypes.boolean,
      allowNull: false
    },
    cabinet: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 25]
      }
    }
  });

  PartEntry.associate = models => {
    PartEntry.belongsTo(models.Order, {
      foreignKey: "orderId"
    });
    PartEntry.hasOne(models.PartDefinition, {
      foreignKey: "partDefinitionId"
    });
  };
  return PartEntry;
};
