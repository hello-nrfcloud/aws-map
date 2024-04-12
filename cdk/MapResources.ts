import { aws_location as Location, Stack } from 'aws-cdk-lib'
import type { CfnMap, CfnAPIKey } from 'aws-cdk-lib/aws-location'
import { Construct } from 'constructs'

export class MapResources extends Construct {
	public readonly map: CfnMap
	public readonly apiKey: CfnAPIKey
	public readonly mapName: string

	constructor(parent: Stack, id: string) {
		super(parent, id)

		this.mapName = `${parent.stackName}-map`
		this.map = new Location.CfnMap(this, 'mapDark', {
			mapName: this.mapName,
			description: 'Provides the map tiles (Esri Dark Gray Canvas)',
			configuration: {
				style: 'VectorEsriDarkGrayCanvas',
			},
		})

		this.apiKey = new Location.CfnAPIKey(this, 'apiKey', {
			keyName: `${parent.stackName}-apiKey`,
			noExpiry: true,
			restrictions: {
				allowActions: ['geo:GetMap*'],
				allowResources: [this.map.attrMapArn],
				allowReferers: [
					'http://localhost:*/*', // (for local development)
					`https://${this.node.getContext('domainName')}/*`,
				],
			},
		})
	}
}
