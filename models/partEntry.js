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
      type: DataTypes.BOOLEAN,
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

  PartEntry.associate = function(models) {
    PartEntry.belongsTo(models.Order, {as:"order", foreignKey: "orderID"});
      
    PartEntry.belongsTo(models.PartDefinition, {as:"partdef", foreignKey: "partsDefinitionID"});
      
    };
 
  return PartEntry;
};
