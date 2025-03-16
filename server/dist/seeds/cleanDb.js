import mongoose from 'mongoose';
const cleanDb = async () => {
    try {
        // Get all collection names from the database
        const collections = Object.keys(mongoose.connection.collections);
        // Loop through each collection and drop it
        for (const collectionName of collections) {
            const collection = mongoose.connection.collections[collectionName];
            await collection.deleteMany({});
            console.log(`${collectionName} collection dropped.`);
        }
        console.log('All collections dropped.');
        process.exit(0);
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
};
export default cleanDb;
