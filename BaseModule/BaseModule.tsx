import React from 'react';

/**
 * Base class for all modules in page editor
 */
export default abstract class BaseModule extends React.Component<any, any>
{
	/**
	 * Properties defined by child module
	 */
	public props = {};

	/**
	 * Rules for all properties
	 *
	 * @type IPropertyRules
	 */
	public propsRules: IPropertyRules = {};

	constructor(props)
	{
		super(props);

		for(let propName in this.props)
		{
			const defaultProperty = {...DefaultPropertyRule},
				data = this.propsRules[propName] || {};

			this.propsRules[propName] = {...defaultProperty, ...data};
		}
	}
}

export interface IPropertyRules {
	[key: string]: IPropertyRule
}

export interface IPropertyRule
{
	editable?: boolean,
	validation?: any // Yup object
}

export const DefaultPropertyRule: IPropertyRule =
{
	editable: true,
};
