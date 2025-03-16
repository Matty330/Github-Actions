export default async (modelName: "Question", collectionName: string) => {
  try {
    // Add a type check before accessing
    if (!models[modelName]) {
      console.error(`Model ${modelName} not found`);
      return;
    }
    
    let modelExists = await models[modelName].db.db.listCollections({
      name: collectionName
    }).toArray()

    if (modelExists.length) {
      await db.dropCollection(collectionName);
    }
  } catch (err) {
    throw err;
  }
}