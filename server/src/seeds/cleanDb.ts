export default async (modelName: "Question", collectionName: string) => {
  try {
    if (models[modelName]) {
      let modelExists = await models[modelName].db.db.listCollections({
        name: collectionName
      }).toArray()

      if (modelExists.length) {
        await db.dropCollection(collectionName);
      }
    }
  } catch (err) {
    throw err;
  }
}