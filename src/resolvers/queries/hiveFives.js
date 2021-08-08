module.exports = async (_, {}, {models}) => {
  return await models.HiveFive.find();
};
