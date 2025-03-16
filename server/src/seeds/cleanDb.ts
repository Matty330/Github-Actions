export default async (modelName: "Question", collectionName: string) => {
  try {
    const modelInstance = models[modelName];
    if (!modelInstance) {
      console.error(`Model ${modelName} not found`);
      return;
    }
    
    let modelExists = await modelInstance.db.db.listCollections({
      name: collectionName
    }).toArray()

    if (modelExists.length) {
      await db.dropCollection(collectionName);
    }
  } catch (err) {
    throw err;
  }
}