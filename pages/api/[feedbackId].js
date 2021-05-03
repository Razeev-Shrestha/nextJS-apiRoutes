import { feedbackPath, extractFeedback } from './feedback'

const handler = (req, res) => {
	const feedbackId = req.query.feedbackId
	const filePath = feedbackPath()
	const feedbackData = extractFeedback(filePath)
	const selectedFeedback = feedbackData.find(
		(feedback) => feedback.id === feedbackId
	)
	res.status(200).json({
		feedBack: selectedFeedback,
	})
}

export default handler
