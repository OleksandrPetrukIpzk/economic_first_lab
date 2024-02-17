import mongoose, {Schema} from "mongoose";

mongoose.connect(process.env.MONGODB_URI || '');
mongoose.Promise = global.Promise;


const topicSchema = new Schema({
    nameOfCustomer: String,
    nameOfCompany: String,
    nameOfProduct: String,
    isProjectExist: Boolean,
    isMoreOneLanguage: Boolean,
    isNeedSEO: Boolean,
    isNeedSupport: Boolean,
    isYouHaveDesign: Boolean,
    isYouHaveBrand: Boolean,
    typeOfProject: String,
    competitorInfo: {},
    auditoryInfo: {},
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
