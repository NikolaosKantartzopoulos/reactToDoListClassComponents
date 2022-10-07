import React, { Component } from "react";
import Overview from "./components/Overview";
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			uniqueID: 1,
			task: {
				text: "",
				taskID: 0,
			},
			tasks: [],
		};

		this.handleChange = this.handleChange.bind(this);
		this.onSubmitTask = this.onSubmitTask.bind(this);
	}
	handleChange = (e) => {
		this.setState(
			{
				task: { text: e.target.value, taskID: this.state.task.taskID },
			},
			() => {
				console.log(this.state.uniqueID);
			}
		);
	};

	onSubmitTask = (e) => {
		e.preventDefault();
		// console.log(`onSubmitTask started with ${this.state.tasks}`);
		this.setState(
			(state) => ({
				tasks: this.state.tasks.concat(this.state.task),
				task: {
					text: "",
					taskID: this.state.uniqueID,
				},
				uniqueID: this.state.uniqueID + 1,
			}),
			() => {
				console.log(this.state.tasks);
				console.log(this.state.uniqueID);
			}
		);
	};

	render() {
		const { task, tasks } = this.state;
		return (
			<div>
				<form onSubmit={this.onSubmitTask}>
					<input
						onChange={this.handleChange}
						value={task.text}
						type="text"
						id="taskInput"
					/>
					<button type="submit" task={"Submit"}>
						Add task
					</button>
				</form>
				<Overview tasks={tasks} />
			</div>
		);
	}
}

export default App;
