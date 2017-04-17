import angular from 'angular';
import uiRouter from 'angular-ui-router';
import scottTestComponent from './scottTest.component';

let scottTestModule = angular.module('scottTest', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('scottTest', {
      url: '/scottTest',
      component: 'scottTest'
    });
})

.component('scottTest', scottTestComponent)

.name;

export default scottTestModule;
