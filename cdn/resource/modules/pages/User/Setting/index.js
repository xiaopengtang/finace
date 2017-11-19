import React, {Component} from 'react'
import User from '../../../layout/user'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import { NoticeBar, WingBlank, Card, WhiteSpace, Button, List, Icon, Checkbox, Steps, Flex, Accordion} from 'antd-mobile'
const {Item} = List;

export default class Index extends Component {

	static contextTypes = {
		'$store': PropTypes.object.isRequired,
		'$utils': PropTypes.object.isRequired
	};

	state = {
		'info': {}
	}

	getChildContext(){
		return {$store, $utils}
	}

	async componentWillMount(){
		const info = await this.context.$store.api.user.userDetail({});
		if(!info){
			return
		}
		this.setState({info})
	}

	onChange = (key) => {
    console.log(key);
  }

	render () {
		let {
			addTime,
			birthday,
			email,
			emergencyContactName,
			emergencyContactPhone,
			emergencyContactRelation,
			id,
			idCheck,
			idNo,
			idType,
			lastLoginTime,
			level,
			name,
			optTime,
			phone,
			qq,
			recommender,
			sex,
			status,
			userCode,
			userId,
			weibo,
			weixin,
		} = this.state.info;
		return (
		    <User title="个人设置" module="userDetail" className="user-detail"
		    	footer={
            <div></div>
				  }
        >
					<div className="">
						<List className="my-list">
							<Item extra={
                  <div>
                    <span>{name? name: userCode + " "}</span>
                    <i class="icon icon-chevron-right J_icon" aria-hidden="true"></i>
                  </div>
                }>
								<div className="J_listItem">
									用户名
								</div>
							</Item>
						</List>

						<List className="my-list">
							<Item
                extra={
                  <div>
                    <span></span>
                    <i class="icon icon-chevron-right J_icon" aria-hidden="true"></i>
                  </div>
                }
              >
								<div className="J_listItem">
								  个人信息
								</div>
							</Item>
						</List>

						<List className="my-list">
							<Item
                extra={
                  <div>
                    <span>{"个人账户"}</span>
                  </div>
                }
              >
								<div className="J_listItem">
									账户类型
								</div>
							</Item>
						</List>

						<List className="my-list">
							<Item
                extra={
                  <div>
                    <span>{phone}</span>
                  </div>
                }
              >
								<div className="J_listItem">
									手机
								</div>
							</Item>
						</List>
						<Link to="/cardInfo">
            	<List className="my-list">
              	<Item
                	extra={
                  	<div>
                    	<i class="icon icon-chevron-right J_icon" aria-hidden="true"></i>
                  	</div>
                	}
              	>
                	<div className="J_listItem">
                  	银行卡
                	</div>
              	</Item>
            	</List>
						</Link>
						<Link to="/resetPassword">
            	<List className="my-list">
              	<Item
                	extra={
                  	<div>
                    	<i class="icon icon-chevron-right J_icon" aria-hidden="true"></i>
                  	</div>
                	}
              	>
                	<div className="J_listItem">
                  	更换密码
                	</div>
              	</Item>
            	</List>
						</Link>
					</div>
		    </User>
		 )
	}
}
