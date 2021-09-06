import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import useEventListener from '../../hooks/useEventListener'
import './modal.css'

const Modal = ({ showModal, setShowModal, children }) => {
  const backgroundRef = useRef()

  useEventListener('keydown', (e) => {
    if (e.key === 'Escape' && showModal) {
      setShowModal(false)
    }
  })

  useEventListener('mousedown', (e) => {
    if (e.target === backgroundRef.current && showModal) {
      setShowModal(false)
    }
  })

  return ReactDOM.createPortal(
    <>
      {showModal && (
        <div ref={backgroundRef} className='background'>
          <div className='modal'>
            <div className='body'>{children}</div>
            <span
              className='x'
              onClick={() => {
                setShowModal(false)
              }}
            ></span>
          </div>
        </div>
      )}
    </>,
    document.getElementById('modal')
  )
}

export default Modal
