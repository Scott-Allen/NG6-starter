import template from './hero.html';
import controller from './hero.controller';
import './hero.scss';

let heroComponent = {
  restrict: 'E',
  bindings: {
    heroTitle: '<'
  },
  template,
  controller
};

export default heroComponent;
