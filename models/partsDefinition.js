module.exports = function (sequelize, Datatypes) {
    var PartDefinition = sequelize.define("PartDefinition", {
partNumber: {
    type: Datatypes.STRING,
    allowNull: false,
    validate: {
        len: [1, 100]
    }
},
partRevision: {
    type: Datatypes.STRING,
    allowNull: true,
    validate: {
        len: [1, 5]
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

