var Badge = React.createClass({
  render: function() {
    return <button>
      {this.props.title} - {this.props.number}
    </button>
  }
})

var Form = React.createClass({
  render: function() {
    return <div>
    <Badge title="hei" number="42"/>
    </div>
  }
})


// create Form
var options = {
  title: 'Inbox',
  number: 5
}

React.createElement(Form, options)
