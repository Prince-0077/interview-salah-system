// Interview Session ka basic structure
// Abhi ke liye sab ek hi jagah rakha hai, baad mein optimize karunga

const InterviewSchema = {
  candidateId: "ObjectId", // user ki ID se link hoga
  sessionDate: "Date",
  
  // AI analysis ka data - yahan par bass thoda sa dimaag lagana hai scalablity ke liye
  analysis: {
    technicalScore: Number, 
    confidenceLevel: Number,
    communicationRating: Number,
    keyImprovementAreas: [String] // Interviewer ko suggest karne ke liye points hain
  },

  // Transcript string hai par agar file badi hui toh S3 bucket check karna padega
  transcript: "String", 
  
  status: ["Completed", "Processing", "Failed"] // ye process track karne ke liye 
}

export default InterviewSchema;