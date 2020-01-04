import BaseModule from "../BaseModule/BaseModule";
import React from "react";

export default class ContentBox extends BaseModule
{
	props = {
		content: 'Lorem ipsum dolor sit amet',
	};

	render()
	{
		return <div className="w-full h-20 mb-10 inline-block bg-gray-500">{this.props.content}</div>;
	}
}
