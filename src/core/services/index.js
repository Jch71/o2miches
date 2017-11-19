import angular from 'angular';
// uncomment if you need a local storage solution
// import LocalStorageModule from 'angular-local-storage';
import ApiService from './api.service.srv.js';

export default angular
  .module('core.services', [
    // 'LocalStorageModule'
  ])
  .service('ApiService', ApiService)
;
