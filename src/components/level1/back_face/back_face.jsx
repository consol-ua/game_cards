import React from "react";
import s from "../level1.module.css";

export default function BackFace() {
  return (
    <svg
      className={s.back_face}
      alt="JS Badge"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 267.69 303.2"
    >
      <path
        fill="#d6ba31"
        d="M133.85 0h133.84l-24.21 272.86-109.63 30.34-109.64-30.34L0 0h133.85z"
      />
      <path
        fill="#ffd93d"
        d="M243.51 21.57L222.78 255.4l-88.72 24.48V21.57h109.45z"
      />
      <path
        fill="#ebebeb"
        d="M96.9 199.57L45 184.89l-.26 31.26 78.84 22.16L123 57.96H97.34l-.44 141.61z"
      />
      <path
        fill="#fff"
        d="M145.23 57.96l85.92-.15-3.95 31.1-55.5.53-.03 48.13 53.06-6.01-6.24 87.24-73.26 19.01v-34.56l52.97-10.77.8-27.44-53.77 9.3V57.96z"
      />
    </svg>
  );
}
