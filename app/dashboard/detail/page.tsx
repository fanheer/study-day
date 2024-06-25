"use client";
import React, { useState } from "react";
import Modal from "@/app/ui/modal-portal";
import { FanButton } from "fanheer-react-component";

export default function Detail() {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <div style={{ backgroundColor: 'white', width: '100px', height: '100px'}}>
      <FanButton primary size="large" onClick={() => setVisible(true)} label="view2"></FanButton>
      {/* <button onClick={() => setVisible(true)}>view</button> */}
      <Modal visible={visible}>
        <header>this is a modal</header>
        <p>this is a modal~~</p>
      </Modal>
    </div>
  );
}
