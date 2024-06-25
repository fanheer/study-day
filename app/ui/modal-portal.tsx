'use client';
import React from 'react'
import ReactDOM from "react-dom";
import Styles from './modal-portal.module.css'

interface IModal {
    children: React.ReactNode,
    visible: boolean
}

export default function Modal(props: IModal) {
  const { visible, children } = props
  const portalElement = document.getElementById('portal-root');
  if(!visible) return null
  if (!portalElement) {
      console.error('无法找到 portal-root 元素');
      return null; // 或者其他的错误处理逻辑
    }
    return ReactDOM.createPortal(
      <div className={Styles.mask}>
        <div className={Styles.modal}>
          {children}
        </div>
      </div>,
      portalElement
    );
  }
