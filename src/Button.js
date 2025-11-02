function Button({ children, onclick, complete }) {
  return (
    <button onClick={onclick} className={complete ? "done-button" : ""}>
      {children}
    </button>
  );
}

export default Button;
