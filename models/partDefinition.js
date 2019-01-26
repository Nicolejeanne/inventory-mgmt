module.exports = function (sequelize, DataTypes) {
    var PartDefinition = sequelize.define("PartDefinition", {
partNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
        len: [1, 100]
    }
},
partType: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
        len: [1, 50]
    }
},
partDescription: {
    type: DataTypes.TEXT,
    allowNull: false,
},
manufacturer: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
        len: [1, 100]
    }
}
});


return PartDefinition;
};

