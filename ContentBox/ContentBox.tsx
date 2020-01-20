import BaseModule, {IPropertyRules} from "../BaseModule/BaseModule";
import React from "react";
import * as Yup from "yup";

export default class ContentBox extends BaseModule
{
	props = {
		content: 'Lorem ipsum dolor sit amet',
	};

	propsRules: IPropertyRules = {
		content: {
			required: true,
			editable: true,
			validation: Yup.string()
				.min(5, 'Minimum 5 characters long!')
				.required('Required')
		}
	};

	render()
	{
		return <div className="w-full h-20 mb-10 inline-block bg-gray-500">{this.props.content}</div>;
	}
}
