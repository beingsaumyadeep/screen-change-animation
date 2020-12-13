import React from "react";
import styled from "styled-components";
import "./App.css";
import { SwitchTransition, CSSTransition } from "react-transition-group";

function App() {
  const [mode, ] = React.useState("out-in");
  const [state, setState] = React.useState(true);
  const [Next, setNext] = React.useState(true)
  return (
    <Main>
      <MainBar Next={Next}>
        <SwitchTransition mode={mode}>
          <CSSTransition
            key={state}
            addEndListener={(node, done) => {
              node.addEventListener("transitionend", done, false);
            }}
            classNames="fade"
          >
            <div className="button-container">
              {state ? (
                <div className="wrapper">
                  <div className="mb-3">
                    <label for="email" className="form-label">
                      Email:
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="pass" className="form-label">
                      Password:
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="pass"
                      placeholder="Password"
                    />
                  </div>
                  <div className="text-end">
                    <button
                      type="button"
                      className="btn wrapper btn-primary"
                      onClick={() => {
                        setState((state) => !state);
                        setNext(true)
                    }}
                    >
                      Next
                    </button>
                  </div>
                </div>
              ) : (
                <div className="wrapper">
                  <div className="mb-3">
                    <label
                      for="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      About
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                  <div className="text-start">
                    <button
                      type="button"
                      className="btn btn-primary wrapper"
                        onClick={() => {
                          setState((state) => !state)
                          setNext(false);
                        }}
                    >
                      Back
                    </button>
                  </div>
                </div>
              )}
            </div>
          </CSSTransition>
        </SwitchTransition>
      </MainBar>
    </Main>
  );
}
const Main = styled.div`
  width: 100%;
  min-height: 100%;
  backdrop-filter: blur(6px);
  display: block;
  padding-top: 10%;
`;
const MainBar = styled.div`
  max-width: 600px;
  padding: 30px 30px;
  border-radius: 8px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  margin: auto;
  background: #fff;
  overflow: hidden;
  .fade-enter .wrapper {
    opacity: 0;
    transform: ${(props) =>
      props.Next ? "translateX(100%)" : "translateX(-100%)"};
  }
  .fade-enter-active .wrapper {
    opacity: 1;
    transform: translateX(0%);
  }
  .fade-exit .wrapper {
    opacity: 1;
    transform: translateX(0%);
  }
  .fade-exit-active .wrapper {
    opacity: 0;
    /* transform: translateX(100%); */
    transform: ${(props) =>
      props.Next ? "translateX(-100%)" : "translateX(100%)"};
  }
  .fade-enter-active .wrapper,
  .fade-exit-active .wrapper {
    transition: opacity 500ms, transform 500ms;
  }
`;
export default App;
