const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    quizName: {
        type: String,
        required: true,
    },
    quizDesc: {
        type: String,
    },
    quizStartTime: {
        type: String,
    },
    quizDate: {
        type: Date,
        default: Date.now()
    },
    quizEndTime: {
        type: String,
    },
    updated_at: {
        type: Date,
        default: Date.now()
    },

    // adminId:{
    //     type:mongoose.Schema.Types.ObjectId, ref:"Admin"
    // },
    // usersParticipated: [
	// 	{
	// 		userId: { type: mongoose.Schema.Types.ObjectID, ref: "User" },
	// 		marks: { type: Number },
	// 		responses: [],
	// 		timeEnded: { type: Number },
	// 		timeStarted: { type: Number }
	// 	},
	// ],
	// usersEnrolled: [
	// 	{
	// 		userId: { type: mongoose.Schema.Types.ObjectID, ref: "User" },
	// 	},
	// ],
    
});

module.exports = mongoose.model("Quiz", QuizSchema);

// {
//     "qId" : "1",
//     "question":"What is HTML ?",
//     "alternatives":[
//         {
//             "options":"Markup"
//         },
//         {
//             "options":"Object-oriented"
//         },
//         {
//             "options":"Script"
//         },{

//             "options":"Verbal"
//         }
//     ],
//     "correctAnswer":"Markup"
// }