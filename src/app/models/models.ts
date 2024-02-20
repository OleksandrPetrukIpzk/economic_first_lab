import mongoose, {Schema} from "mongoose";

mongoose.connect(process.env.MONGODB_URI);

const topicSchema = new Schema({
    nameOfCustomer: String,
    nameOfCompany: String,
    nameOfProduct: String,
    contacts: String,
    isProjectExist: Boolean,
    isMoreOneLanguage: Boolean,
    isNeedSEO: Boolean,
    isNeedSupport: Boolean,
    isYouHaveDesign: Boolean,
    isYouHaveBrand: Boolean,
    isCommerceProject: Boolean,
    Activity: String,
    typeOfProject: String,
    link: String,
    like: String,
    dislike: String,
    auditoryInfo: String,
    typeOfDesign: String,
    dayOfStart: String,
    deadLine: String,
    sumOfMoney: String,
    isEdit: Boolean,
},
    {
        timestamps: true,
    })

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema)

export default Topic
