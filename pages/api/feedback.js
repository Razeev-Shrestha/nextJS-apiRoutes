import fs from 'fs'
import path from 'path'

const feedbackPath = () => path.join(process.cwd(), 'data', 'feedback.json')

function extractFeedback(filePath) {
	const fileData = fs.readFileSync(filePath)
	const data = JSON.parse(fileData)
	return data
}

const handler = (req, res) => {
	if (req.method === 'POST') {
		const email = req.body.email
		const feedBackText = req.body.feedback

		const newFeedback = {
			id: new Date().toISOString(),
			email: email,
			text: feedBackText,
		}
		const filePath = feedbackPath()
		const data = extractFeedback(filePath)
		data.push(newFeedback)
		fs.writeFileSync(filePath, JSON.stringify(data))
		res.status(201).json({ message: 'success', feedback: newFeedback })
	} else {
		const filePath = feedbackPath()
		const data = extractFeedback(filePath)
		res.status(200).json({
			feedback: data,
		})
	}
}

export default handler
