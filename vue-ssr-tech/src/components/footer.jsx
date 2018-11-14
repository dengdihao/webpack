import "../assets/style/footer.styl";
export default {
  data() {
    return {
      author: "Daite"
    };
  },
  render() {
    return (
      <div id="footer">
        <span>Written by {this.author}</span>
      </div>
    );
  }
};
