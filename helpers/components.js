export default {
    getComponent(type) {
      return type.replace(/^\w/, c => c.toUpperCase()).replace(' ', '');
    },
    getWidgetComponent(type) {
      type = this.getComponent(type);
      return type === 'Widget' ? 'GenericWidget' : type;
    }
  };
  