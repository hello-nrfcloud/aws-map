import { App } from 'aws-cdk-lib'
import { MapStack } from './MapStack.js'

export class MapApp extends App {
	public constructor(
		stackName: string,
		{
			domainName,
		}: {
			domainName: string
		},
	) {
		super({
			context: {
				domainName,
			},
		})
		new MapStack(this, stackName)
	}
}
