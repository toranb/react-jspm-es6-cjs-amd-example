var AsyncReactComponent = {
  loadedComponent: null,

  load: function() {
    var self = this;

    if (this.constructor.loadedComponent) {
      return;
    }

    System.import(this.bundle)
    .then(function(es6_module) {
      return es6_module.default;
    })
    .then(function(component) {
      self.constructor.loadedComponent = component;
      self.forceUpdate();
    });
  },

  componentDidMount: function() {
    setTimeout(this.load, 500);
  },

  render: function() {
    var component = this.constructor.loadedComponent;
    return component ? component(this.props) : this.preRender();
  }
};

export default AsyncReactComponent;
