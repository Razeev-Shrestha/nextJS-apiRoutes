import { Fragment, useState } from 'react'
import { extractFeedback, feedbackPath } from '../api/feedback'

const FeedbackPage = (props) => {
	const [feedbackData, setFeedbackData] = useState()

	const loadFeedbackHandler = (id) => {
		fetch(`/api/${id}`)
			.then((response) => response.json())
			.then((data) => {
				setFeedbackData(data.feedBack)
			})
	}
	const { feedbackItems } = props
	return (
		<Fragment>
			{feedbackData && <p>{feedbackData.email}</p>}
			<ul>
				{feedbackItems.map((item) => (
					<li key={item.id}>
						{item.text}
						{''}
						<button onClick={loadFeedbackHandler.bind(null, item.id)}>
							Show Details
						</button>
					</li>
				))}
			</ul>
		</Fragment>
	)
}

export async function getStaticProps() {
	const filePath = feedbackPath()
	const data = extractFeedback(filePath)
	return {
		props: {
			feedbackItems: data,
		},
	}
}

export default FeedbackPage
