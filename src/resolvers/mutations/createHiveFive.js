const { ApolloError } = require("apollo-server");

module.exports = async (_, {input}, {models}) => {

  try{
    newHiveFive = await models.HiveFive.create(input);
    return newHiveFive
  }
  catch(e){
    throw new ApolloError(e)
  }
  
};
