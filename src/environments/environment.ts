// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  itemApiUrl: 'http://localhost:8084/item-api/v1/',
  groupApiUrl: 'http://localhost:8080/group-api/v1/',
  purchaseApiUrl: 'http://localhost:8083/purchase-api/v1/',
  marketApiUrl: 'http://localhost:8082/market-api/v1/',
  walletApiUrl: 'http://localhost:8081/wallet-api/v1/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
