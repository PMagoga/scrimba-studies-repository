function Joke(props) {
  return (
    <>
      <h4>{props.setup}</h4>
      <p>{props.punchline}</p>
    </>
  );
}

export default Joke;
