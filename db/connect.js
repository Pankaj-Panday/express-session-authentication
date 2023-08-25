import mongoose from "mongoose";

async function connectDB() {
	try {
		await mongoose.connect(process.env.DB_URL, {
			family: 4,
			dbName: process.env.DB_NAME,
		});
		console.log("Connected to database");
	} catch (err) {
		console.log(err);
	}
}

export { connectDB };
