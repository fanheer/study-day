"use client";
import React, { useState } from "react";
import Modal from "@/app/ui/modal-portal";

export default function Detail() {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <div>
      <button onClick={() => setVisible(true)}>view</button>
      <Modal visible={visible}>
        <header>this is a modal</header>
        <p>this is a modal~~</p>
      </Modal>
    </div>
  );
}
