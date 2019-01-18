module.exports = function (sequelize, Datatypes) {
    var PartDefinition = sequelize.define("PartDefinition", {
partNumber: {
    type: Datatypes.STRING,
    allowNull: false,
    validate: {
        len: [1, 100]
    }
},
partType: {
    type: Datatypes.STRING,
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
    type: Datatypes.STRING,
    allowNull: false,
    validate: {
        len: [1, 100]
    }
},
unitType: {
    type: Datatypes.STRING,
    allowNull: false,
    validate: {
        len: [1, 10]
    }
}
});

return PartDefinition;
};

