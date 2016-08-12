import angular from 'angular';
import uiRouter from 'angular-ui-router';
import datepicker from 'angular-ui-bootstrap/src/datepicker';
import heroComponent from './hero.component';

let heroModule = angular.module('hero', [
  uiRouter,
  datepicker
])

.component('hero', heroComponent)

.name;

export default heroModule;
