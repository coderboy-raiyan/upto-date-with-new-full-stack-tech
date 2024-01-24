"use client";
import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";
import styles from "./imagePicker.module.css";

function ImagePicker({ label, name }: { label: string; name: string }) {
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [picketImage, setPicketImage] = useState<string | null>(null);

  function handlePickImage() {
    imageInputRef.current?.click();
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }
    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPicketImage(fileReader.result as string);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!picketImage && <p>No image picked yet!</p>}
          {picketImage && <Image src={picketImage} alt="" fill />}
        </div>
        <input
          type="file"
          className={styles.input}
          name={name}
          id={name}
          ref={imageInputRef}
          onChange={handleChange}
          accept="image/png, image/jpg"
        />
        <button
          className={styles.button}
          type="button"
          onClick={handlePickImage}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}

export default ImagePicker;
