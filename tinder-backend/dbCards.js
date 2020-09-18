import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
    name: String,
    imgUrl: String
});


export default mongoose.model('cards', cardSchema);

// sequel - tables
// non sequel - collection -> [documents] -> collection -> [documents] -> collection
