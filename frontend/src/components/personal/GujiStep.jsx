import React from 'react';
import { Radio } from 'antd';
import JiudianCard from '../subPageCard/JiudianCard';

const RadioGroup = Radio.Group;
const selectItems = [
	{
		title: '婚宴',
		img: '/images/hunli/1_.png'
	},
	{
		title: '婚纱摄影',
		img: '/images/hunli/2_.png'
	},
	{
		title: '婚礼策划',
		img: '/images/hunli/3_.png'
	},
	{
		title: '礼服',
		img: '/images/hunli/4_.png'
	},
	{
		title: '婚戒',
		img: '/images/hunli/5_.png'
	}
]

const price = [
	['4', '4-5', '5-6 ', '6'],
	['5', '5-8', '8-13 ', '13'],
	['10', '10-20', '20-40', '40-50'],
	['3 ', '3-4.5 ', '4.5-6 ', '6'],
	['2 ', '2-3', '3-4 ', '4']
	// ['4k', '4k-5k', '5k-6k', '6k'],
	// ['5k', '5k-8k', '8k-13k', '13k'],
	// ['1w', '1w-2w', '2w-4w', '4w-5k'],
	// ['3k', '3k-4.5k', '4.5k-6k', '6k'],
	// ['2k', '2k-3k', '3k-4k', '4k']
]

class GujiStep extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			step: this.props.step,
			selected: this.props.selected,
			priceRange: [0, '0k-0', '0k-0', 0],
			sumPrice: '',
			sumIndex: -1,
			value: 1
		}
		this.clickItem = this.clickItem.bind(this);
	}

	onChange = (e) => {
		console.log('radio checked', e.target.value);
		this.setState({
			value: e.target.value,
		});
	}

	componentDidMount() {
		let { priceRange, selected } = this.state;
		let num = 0;
		if (this.state.step === 1) {
			// console.log(this.state.step);
			console.log(selected)
			for (let i = 0; i < selected.length; i++) {
				if (selected[i] === 1) {
					num++;
					console.log(i);
					console.log(priceRange, 'before')
					priceRange[0] += parseInt(price[i][0]);
					let temp1 = priceRange[1].toString().split('k-');
					let temp2 = price[i][1].toString().split('-');
					console.log(temp1, temp2)
					temp1[0] = parseInt(temp1[0]) + parseInt(temp2[0]);
					temp1[1] = parseInt(temp1[1]) + parseInt(temp2[1]);
					priceRange[1] = temp1[0] + 'k-' + temp1[1];

					temp1 = priceRange[2].toString().split('k-');
					temp2 = price[i][2].toString().split('-');
					console.log(temp1, temp2)

					temp1[0] = parseInt(temp1[0]) + parseInt(temp2[0]);
					temp1[1] = parseInt(temp1[1]) + parseInt(temp2[1]);
					priceRange[2] = temp1[0] + 'k-' + temp1[1];

					priceRange[3] += parseInt(price[i][3])
					console.log(priceRange, 'after')
				}
			}
			this.setState({
				priceRange: priceRange,
				num: num
			})
		}
	}
	componentWillReceiveProps(nextProps) {
		if (this.props !== nextProps) {
			this.setState({
				selected: nextProps.selected
			})
		}
	}
	clickItem(index) {
		console.log(this.props)
		this.props.handleSelected(index)
		this.props.handle();
	}

	selectPrice(index) {
		const { priceRange } = this.state;
		// alert("...")
		this.setState({
			sumPrice: priceRange[index],
			sumIndex: index,
			value: index
		}, this.props.handle())

	}
	render() {
		const { step, selected, priceRange, num, sumIndex } = this.state;
		const data_ = [
			{
				anli: "31",
				cast:"￥2599-￥5988",
				href:"https://sh.daoxila.com/HunShaSheYing/ShengXueGuoJi-Info",
				img	:"https://iq.dxlfile.com/mall/original/2015-05/20150528175568418.jpg-w216h162",
				tags	:	[],
				taoxi:"5",
				title	:	"圣雪国际婚纱摄影",
				zone:"虹口区 上海圣雪国际婚纱摄影"
			}
		]
		const radioStyle = {
			display: 'block',
			height: '30px',
			lineHeight: '30px',
		};
		return (
			<div className='guji-contaniner'>
				{
					step === 0 &&
					// <div className=''>
					// <div className='step0-container'>
					// 	<h2>请选择您需要的服务</h2>
					// </div>
					<div className='img-contaniner'>
						{
							selectItems.map((item, index) => (
								<div key={index} className={['img', selected[index] === 1 ? 'selected' : ''].join(' ')} onClick={() => this.clickItem(index)}>
									<p>{item.title}</p>
									<img src={item.img} />
								</div>
							))
						}
						{/* </div> */}
					</div>
				}
				{
					step === 1 &&
					<div className='j-info'>
						<div className='r-title'>
							<h3 className='r-info'>请选择您为这{num}项服务<br />准备的预算范围</h3>
							{
								selected.map((item, index) => (
									item === 1 &&
									<p key={index} className='r-badge'>{selectItems[index].title}</p>
								))
							}
						</div>
						<div className='range'>
							{
								priceRange.map((item, index) => (
									<div key={index} className={['rangeItem', index === this.state.sumIndex ? 'clicked' : ''].join(' ')} onClick={() => this.selectPrice(index)} >
										{item}k
									</div>
								))
							}
						</div>
					</div>
				}
				{
					step === 2 &&
					<div className='j-info'>
						{/* <div className='r-title'>
						</div> */}
						<div className='j-range'>
							<h3 className='r-info' style={{margin:0}}>系统推荐预算范围</h3>
							{
								selected.map((item, index) => (
									item === 1 &&
									// <div className='step2-contaniner'>
									<div className='step2-info' key={index}>
										<p>	{selectItems[index].title} </p>
										<div className='rangeItem' style={{ width: '5em' }}>
											{price[index][this.state.value]}k
										</div>
										{/* <JiudianCard type='sheying' datas={data_} /> */}
										{/* <RadioGroup className='price-origin' onChange={this.onChange} defaultValue={sumIndex} value={this.state.value}>
											{
												price[index].map((item, index) => (
													// <span className={['price-item', index === sumIndex ? 'active' : '']}>{item}</span>
													<Radio key={index} style={radioStyle} value={index}>{item}</Radio>
												))
											}
										</RadioGroup> */}
										<img style={{width:'70%'}}src='/images/re.png' />
									</div>
									// </div>
								))
							}
						</div>
					</div>
				}
			</div>
		);
	}
}

export default GujiStep;