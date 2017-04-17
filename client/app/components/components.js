import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import ScottTest from './scottTest/scottTest'

let componentModule = angular.module('app.components', [
  Home,
  About,
  ScottTest
])

.name;

export default componentModule;
