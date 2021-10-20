import { useState } from "react";
import Modal from "./Modal";
import styled from "styled-components";
import { XIcon } from "@primer/octicons-react";

const Button = styled.button`
  border: 2px solid #878ba4;
  background: transparent;
  color: #878ba4;
  border-radius: 5px;
  padding: 10px 30px;
  font-weight: bold;
  font-size: 1.1em;
  position: fixed;
  right: 3em;
  bottom: 1em;

  @media (max-width: 575.98px) {
    left: 50%;
    transform: translateX(-50%);
    padding: 7px 25px;
  }
`;
const RulesBoard = styled.div`
  .overlay {
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .rules {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    padding: 1em;
    border-radius: 10px;
    width: 350px;
    height: 375px;
    &-header {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 2em;
      h1 {
        color: #3b3e5d;
        text-transform: uppercase;
        font-size: 1.12em;
        @media (max-width: 575.98px) {
          font-size: 1em;
        }
      }
      button {
        border: 0;
        background: transparent;
        color: #cdced3;
        font-weight: bolder;
      }
    }
  }
  img {
    max-width: 18em;
    width: 100%;
  }
`;

export default function Rules() {
  const [openModal, setModalState] = useState(false);
  return (
    <>
      <Button onClick={() => setModalState(true)}>Rules</Button>
      {openModal && (
        <Modal>
          <RulesBoard>
            <div className="overlay">
              <div className="rules">
                <div className="rules-header">
                  <h1>Rules</h1>
                  <button onClick={() => setModalState(false)}>
                    <XIcon size="medium" />
                  </button>
                </div>
                <img src="/image-rules.svg" alt="rules" />
              </div>
            </div>
          </RulesBoard>
        </Modal>
      )}
    </>
  );
}
