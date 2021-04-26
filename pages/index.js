import { useRef, useState } from 'react'
import classes from './index.module.css'
const HomePage = () => {
	const [feedbackItems, setfeedbackItems] = useState([])
	const emailInputRef = useRef()
	const feedbackInputRef = useRef()

	const submitHandler = (e) => {
		e.preventDefault()

		const enteredEmail = emailInputRef.current.value
		const enteredFeedback = feedbackInputRef.current.value

		const requestBody = {
			email: enteredEmail,
			feedback: enteredFeedback,
		}

		fetch('/api/feedback', {
			method: 'POST',
			body: JSON.stringify(requestBody),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((data) => console.log(data))
	}

	const loadFeedbackHandler = () => {
		fetch('/api/feedback')
			.then((response) => response.json())
			.then((data) => {
				setfeedbackItems(data.feedback)
			})
	}
	return (
		<div>
			<h1>The Home Page</h1>
			<form>
				<div className={classes.title}>
					<label htmlFor='email'>Enter Email Address</label>
					<input type='email' id='email ' ref={emailInputRef} />
				</div>
				<div className={classes.feedback}>
					<label htmlFor='feedback'>Submit Your Feedback</label>
					<textarea
						id='feedback'
						rows='5'
						ref={feedbackInputRef}></textarea>
				</div>
				<button className={classes.button} onClick={submitHandler}>
					Send Feedback
				</button>
			</form>
			<hr />
			<button onClick={loadFeedbackHandler}>Load Feedback</button>
			<ul>
				{feedbackItems.map((feedback) => (
					<li key={feedback.id}>{feedback.email}</li>
				))}
			</ul>
		</div>
	)
}

export default HomePage
