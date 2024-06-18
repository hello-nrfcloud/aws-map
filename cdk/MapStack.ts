import type { App } from 'aws-cdk-lib'
import { CfnOutput, Stack } from 'aws-cdk-lib'
import { MapResources } from './MapResources.js'

export class MapStack extends Stack {
	public constructor(parent: App, stackName: string) {
		super(parent, stackName, {
			description: 'Provides Amazon Location Service Map resources',
		})

		const map = new MapResources(this, 'map')

		new CfnOutput(this, 'mapName', {
			value: map.mapName,
			exportName: `${this.stackName}:mapName`,
		})

		new CfnOutput(this, 'mapRegion', {
			value: Stack.of(this).region,
			exportName: `${this.stackName}:mapRegion`,
		})

		new CfnOutput(this, 'apiKeyName', {
			value: map.apiKey.ref,
			exportName: `${this.stackName}:apiKeyName`,
		})
	}
}

export type StackOutputs = {
	mapName: string
	mapRegion: string
	apiKeyName: string
}
