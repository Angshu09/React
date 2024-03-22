const container = (
    <div className="container" id="container">
  <section className="innerContainer1">
    <p className="p">MAKAUT</p>
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
      width="200"
    />
  </section>
  <section className="innerContainer2">
    <form className="form1">
      <label htmlFor="fname">Your Name</label><br /><input
        type="text"
        id="fname"
        name="fname"
        placeholder="Enter"
      /><br />
    </form>
  </section>
</div>
)

ReactDOM.createRoot(document.querySelector(".root")).render(container);