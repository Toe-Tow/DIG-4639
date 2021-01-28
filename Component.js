// Component is the parent
class Component {
  constructor (props) {
    this.props = props;
  }

  render () {
    //added return statement
    return `<h1>${this.props}/h1>`;// Child objects define their own render() methods
  }
}

export default Component;