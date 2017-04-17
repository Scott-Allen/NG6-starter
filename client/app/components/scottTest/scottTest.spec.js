import ScottTestModule from './scottTest'
import ScottTestController from './scottTest.controller';
import ScottTestComponent from './scottTest.component';
import ScottTestTemplate from './scottTest.html';

describe('ScottTest', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ScottTestModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ScottTestController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(ScottTestTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ScottTestComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ScottTestTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ScottTestController);
      });
  });
});
