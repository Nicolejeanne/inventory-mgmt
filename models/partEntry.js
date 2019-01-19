module.exports = function(sequelize, DataTypes) {
    var partEntry = sequelize.define("partEntry", {
      quantity: {
        type: DataTypes.INT,
        allowNull: false,
        validate: {
            isNumeric: true,
              len: [1, 10]
        }
      },
      conforming: {
        type: DataTypes.boolean,
        allowNull: false,
      },
      cabinet: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 25]
        }
      }
    });
    return partEntry;
  };