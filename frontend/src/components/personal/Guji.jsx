import React from 'react'
import { Steps, Button, message, Icon } from 'antd';
import GujiStep from './GujiStep';

const Step = Steps.Step;
// const firstStep =

const steps = [{
	title: '选择估计类型',
	// content: firstStep,
}, {
	title: '选择总预算',
	content: 'Second-content',
},
// {
// 	title: '选择预算方案',
// 	content: 'Last-content',
// },
 {
	title: '获得推荐方案',
	content: ''
}];
class Guji extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			current: 0,
			// 1已完成
			complete: [0, 0, 1, 0],
			selected: [0, 0, 0, 0, 0]
		};

		// this.handleComplete = this.handleComplete.bind(this)
	}

	next() {
		let { complete, current } = this.state;
		if (complete[current] === 0) {
			message.info('请先完成当前步骤')
		} else {
			this.setState({
				current: current + 1,
			});
		}
	}

	handleComplete = () => {
		let { current, complete } = this.state;
		complete[current] = 1;
		this.setState({
			complete: complete
		})
	}

	handleSelected = (index) => {
		let { selected } = this.state;
		selected[index] = 1;
		this.setState({
			selected: selected
		})
	}
	prev() {
		const current = this.state.current - 1;
		this.setState({ current });
	}
	render() {
		const { current, selected } = this.state;
		return (
			<div className='guji'>
				<h1 className='title'>预算估计</h1>
				<Steps current={current}>
					{steps.map(item => <Step key={item.title} title={item.title} />)}
				</Steps>
				<div className="steps-content">
					{
						current === 0 &&
						<GujiStep step={0} selected={selected} handle={this.handleComplete} handleSelected={this.handleSelected} />
					}
					{
						current === 1 &&
						<GujiStep step={1} selected={selected} handle={this.handleComplete} />
					}
					{
						current === 2 &&
						<GujiStep step={2} selected={selected} handle={this.handleComplete} />
					}
					{/* {
						current === 3 &&
						<GujiStep step={3} selected={selected} handle={this.handleComplete} />
					} */}
				</div>
				<div className="steps-action">
					{
						current < steps.length - 1
						&& <Button type="primary" onClick={() => this.next()}>下一步</Button>
					}
					{
						current === steps.length - 1
						&& <Button type="primary" onClick={() => message.success('Processing complete!')}>完成</Button>
					}
					{
						current > 0
						&& (
							<Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
								上一步
            				</Button>
						)
					}
				</div>
			</div>
		);
	}
}

export default Guji;