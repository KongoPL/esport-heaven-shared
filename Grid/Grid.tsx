import React from 'react';
import BaseLayout from "../BaseLayout/BaseLayout";

export default class Grid extends BaseLayout
{
	public props: IGridProps = {
		gridStyle: {},
		gridSize: {width: 0, height: 0},
		columnSizes: [],
		rowSizes: [],
		areas: [],

		gridChildren: {}
	};

	render()
	{
		return <div style={this.getGridStyle()}>{this.getGridContent()}</div>;
	}

	private getGridStyle()
	{
		let propsStyle = 'gridStyle' in this.props ? this.props.gridStyle : {};

		return {
			...propsStyle,

			display: 'grid',
			gridTemplateColumns: this.props.columnSizes.join(' '),
			gridTemplateRows: this.props.rowSizes.join(' '),
			gridTemplateAreas: this._buildGridAreas(),
		};
	}


	private _buildGridAreas()
	{
		const areas = Array(this.props.gridSize.height).fill('')
			.map(() => Array(this.props.gridSize.width).fill('.'));

		for(let area of this.props.areas)
		{
			for(let offsetX = 0; offsetX < area.width; offsetX++)
			{
				for(let offsetY = 0; offsetY < area.height; offsetY++)
				{
					areas[area.y + offsetY][area.x + offsetX] = area.name;
				}
			}
		}

		return `'`+areas.map((v) => v.join(" ")).join(`' '`)+`'`;
	}


	private getGridContent()
	{
		const content: JSX.Element[] = [];

		for(let areaName in this.props.gridChildren)
		{
			let children = this.props.gridChildren[areaName];

			content.push(<div key={areaName} style={{gridArea: areaName}}>{children}</div>);
		}

		return content;
	}
}

interface IGridProps
{
	gridStyle?: {[key: string]: string},

	gridSize: {width: number, height: number},
	columnSizes: string[],
	rowSizes: string[],
	areas: IArea[],

	/**
	 * Note on property value.
	 * key is area name, value is area's children
	 * (any valid react children - string/JSX.Element/JSX.Element[] etc.)
	 */
	gridChildren?: {[key: string]: any}
}

export interface IArea
{
	x: number,
	y: number,

	width: number,
	height: number,

	name: string
}
