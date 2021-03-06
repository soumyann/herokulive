import mongoose from 'mongoose';
const Schema = mongoose.Schema; // alias for mongoose.Schema

const ContactSchema = new Schema
({
    FullName: String,
    ContactNumber: String,
    EmailAddress: String
},
{
    collection: "contacts"
});

const Model = mongoose.model("Contact", ContactSchema);
export default Model;
