class NavbarController {

  constructor($state) {
    'ngInject';
    class Item {
      constructor(route, name){
        this.route = route;
        this.name = name;
      }
      isActive(){
        return $state.includes(this.route);
      }
    }
    this.items = [
      new Item('home', 'Home'),
      new Item('about', 'About'),
      new Item('terms', 'T&C')
    ];
  }
}

export default NavbarController;
