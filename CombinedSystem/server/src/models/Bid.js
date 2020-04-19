module.exports = (sequelize, DataTypes) => {
    const Bid = sequelize.define('Bid', {
      bidId: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      bidAmount: DataTypes.INTEGER,
      userId: {
        type: DataTypes.STRING,
        allowNull: false
      },
      hopId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
  })  
    return Bid
  }
  