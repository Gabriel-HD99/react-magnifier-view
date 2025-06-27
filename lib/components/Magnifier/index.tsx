import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import type { MagnifierProps } from "./types";
import styles from "./styles.module.css";

const SearchIcon: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
  </svg>
);

const Magnifier: React.FC<MagnifierProps> = ({
  src,
  largeSrc,
  alt = "",
  containerClassName = "",
  imageClassName = "",
  messageClassName = "",
  magnifierSize = 320,
  zoomLevel = 2.5,
  hoverMessage = "Hover to magnify",
  portalElementId,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 });
  const [backgroundPosition, setBackgroundPosition] = useState({ x: 0, y: 0 });

  const wrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!wrapperRef.current || !imageRef.current) return;

    const wrapper = wrapperRef.current;
    const image = imageRef.current;

    const rect = wrapper.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const imgWidth = image.offsetWidth;
    const imgHeight = image.offsetHeight;

    let xPerc = (x / imgWidth) * 100;
    let yPerc = (y / imgHeight) * 100;

    if (x >= 0.01 * imgWidth) {
      xPerc *= 1.15;
    }
    if (y >= 0.01 * imgHeight) {
      yPerc *= 1.15;
    }

    setMagnifierPosition({
      x: x - magnifierSize / 2,
      y: y - magnifierSize / 2,
    });

    setBackgroundPosition({
      x: xPerc - 9,
      y: yPerc - 9,
    });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const getPortalTarget = (): HTMLElement => {
    if (portalElementId) {
      const portalElement = document.getElementById(portalElementId);
      if (portalElement) {
        return portalElement;
      }
    }
    return document.body;
  };

  const magnifierStyle: React.CSSProperties = {
    width: `${magnifierSize}px`,
    height: `${magnifierSize}px`,
    backgroundImage: `url(${largeSrc || src})`,
    backgroundPosition: `${backgroundPosition.x}% ${backgroundPosition.y}%`,
    backgroundSize: `${
      imageRef.current?.offsetWidth
        ? imageRef.current.offsetWidth * zoomLevel
        : 0
    }px ${
      imageRef.current?.offsetHeight
        ? imageRef.current.offsetHeight * zoomLevel
        : 0
    }px`,
    backgroundRepeat: "no-repeat",
    position: "fixed",
    zIndex: 2147483647,
    borderRadius: "50%",
    border: "3px solid #fff",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
  };

  const renderMagnifier = () => {
    if (!isHovering || !wrapperRef.current) return null;

    const magnifierElement = (
      <div
        className={styles.magnifierPortal}
        style={{
          position: "fixed",
          left:
            wrapperRef.current.getBoundingClientRect().left +
            magnifierPosition.x,
          top:
            wrapperRef.current.getBoundingClientRect().top +
            magnifierPosition.y,
          zIndex: 2147483647,
          pointerEvents: "none",
        }}
      >
        <div style={magnifierStyle} />
      </div>
    );

    const portalTarget = getPortalTarget();
    return ReactDOM.createPortal(magnifierElement, portalTarget);
  };

  const defaultHintStyle: React.CSSProperties = {};

  return (
    <div className={`${styles.imageZoomContainer} ${containerClassName}`}>
      <div
        ref={wrapperRef}
        className={styles.magnifyWrapper}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          ref={imageRef}
          src={src}
          alt={alt}
          className={`${styles.mainImage} ${imageClassName}`}
          draggable={false}
        />

        {!isHovering && hoverMessage && (
          <div
            className={`${styles.zoomHint} ${messageClassName}`}
            style={defaultHintStyle}
          >
            <span className={styles.zoomHintText}>{hoverMessage}</span>
            <SearchIcon className={styles.magnifierIcon} />
          </div>
        )}

        {renderMagnifier()}
      </div>
    </div>
  );
};

export default Magnifier;
