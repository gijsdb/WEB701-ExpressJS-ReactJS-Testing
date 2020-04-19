module.exports = (sequelize, DataTypes) => {
  const Hop = sequelize.define('Hop', {
    hopId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    variety: {
      type: DataTypes.STRING,
      unique: true
    },
    weight: DataTypes.FLOAT,
    bitterness: DataTypes.INTEGER,
    sweetness: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    userId: {
      type: DataTypes.STRING,
      foreignKey: true,
      allowNull: false
    }
})
  /*
  Hop.associate = function (models) {
    models.Hop.belongsTo(models.User, {foreignKey : 'userId'});
  };
  */

  /*
  Hop.associate = function (models) {
    models.Hop.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        name: 'UserId',
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
      }
    });
  };
  */

  return Hop
}
