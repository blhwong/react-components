var KaleComponent = React.createClass({
  render: function() {
    return (
      <li>Kale</li>
      );
  }
});

var CucumberComponent = React.createClass({
  render: function() {
    return (
    <li>Cucumber</li>
    );
  }
});

var GroceryList = (props) =>(
  <ul>
    <li>{props.groceries[0]}</li>
    <li>{props.groceries[1]}</li>
  </ul>
);

class GroceryListItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }
  onListClick() {
    this.setState({
      done: !this.state.done
    });
  }
  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };
// {style={style} onClick={onListClick.bind(this)}}
    return (
      <li style={style} onClick={this.onListClick.bind(this)}>{this.props.groceries}</li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.groceries.map(groceries =>
      <GroceryListItems groceries={groceries} />
     )}
  </ul>
);


var App = () => (
  <GroceryList groceries={['Kale', 'Banana']}/>
);

ReactDOM.render(<App />, document.getElementById("app"));