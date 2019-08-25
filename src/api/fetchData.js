import React from "react";

class FetchData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      loading: false,
      error: false
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(data => {
        this.setState({
          results: data,
          loading: false
        });
      })
      .catch(error =>
        this.setState({
          error: true,
          loading: false
        })
      );
  }
  render() {
    console.log(this.state.results);
    return this.props.render({
      loading: this.state.loading,
      results: this.state.results,
      error: this.state.error
    });
  }
}

export default FetchData;
