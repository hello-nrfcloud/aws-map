import { MapApp } from './MapApp.js'

const stackName = process.env.MAP_STACK_NAME ?? 'hello-nrfcloud-map'
const domainName = process.env.DOMAIN_NAME ?? 'hello.nrfcloud.com'

new MapApp(stackName, {
	domainName,
})
