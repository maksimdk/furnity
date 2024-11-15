export default class SPA {
  constructor(root, menu, router) {
    this.root = root;
    this.menu = menu;
    this.router = router;
  }

  onNavigate(event) {
    event.preventDefault();
    const { href } = event.currentTarget;
    const path = href.replace(location.origin, '');
    history.pushState({}, path, href);
    this.render(path);
  }

  init() {
    Array.from(this.menu.children).forEach(link => {
      link.addEventListener('click', this.onNavigate.bind());
    });
    this.render(location.pathname);
  }

  render(path) {
    if (this.router[path]) {
      this.root.innerHTML = this.router[path];
    } else {
      this.root.innerHTML = this.router['/404'];
    }
  }
}
