import NavbarModule from './navbar';

describe('Navbar', () => {
  let $rootScope, $state, $location, $componentController, $compile, $document;

  beforeEach(window.module(NavbarModule));
  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $componentController = $injector.get('$componentController');
    $state = $injector.get('$state');
    $location = $injector.get('$location');
    $compile = $injector.get('$compile');
    $document= $injector.get('$document');
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    let controller;
    beforeEach(() => {
      controller = $componentController('navbar', {
        $scope: $rootScope.$new()
      });
    });

    it('has items property', () => { // erase if removing this.name from the controller
      expect(controller).to.have.property('items');
    });
  });

  describe('View', () => {
    // view layer specs.
    let scope, template, controller, body;

    beforeEach(() => {
      scope = $rootScope.$new();
      body = angular.element($document[0].body);
      template = body.empty().append($compile('<navbar></navbar>')(scope));
      scope.$apply();
      controller = $componentController('navbar', {
        $scope: $rootScope.$new()
      });
    });

    it('has rendered navigation items', () => {
      expect(template.find('nav').find('li').length).to.eq(controller.items.length);
    });


  });
});
