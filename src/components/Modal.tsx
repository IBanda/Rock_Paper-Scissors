import ReactDOM from "react-dom";
import React, { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
}

const modal = document.getElementById("modal") as HTMLDivElement;
const child = document.createElement("div");

export default function Modal({ children }: Props) {
  const element = useRef<HTMLDivElement>(child);
  useEffect(() => {
    modal.append(element.current);
    const el = element.current;
    return () => {
      if (el) {
        modal.removeChild(el);
      }
    };
  }, []);
  return ReactDOM.createPortal(children, element.current);
}
