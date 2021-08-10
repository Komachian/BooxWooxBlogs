import React, { useState } from 'react'
import { ReactComponent as ArrowLeft } from '../../../assets/arrow-left.svg'
import { ReactComponent as UploadSym } from '../../../assets/upload-symbol.svg'
import { ReactComponent as CloseIcon } from '../../../assets/close-icon.svg'
import './newBlog.css'

export default function NewBlog() {
  const [files, setFiles] = useState(undefined)
  const [fileDescription, setFileDescription] = useState('')
  const [error, setError] = useState('')

  function validFormat(format) {
    return format.substr(0, 6) === 'image/'
  }

  function emptyFileList() {
    setFiles(null)
    setFileDescription('')
  }

  function handleLocalUpload(fileList) {
    if (fileList.length <= 0) {
      emptyFileList()
      return
    }
    if (!validFormat(fileList[0].type)) {
      setError('Wrong Type File!')
      emptyFileList()
      return
    }
    setError('')
    setFileDescription(fileList[0].name)
    setFiles([...fileList])
  }

  function dragOver(e) {
    e.preventDefault()
  }
  function dragEnter(e) {
    e.preventDefault()
  }
  function dragLeave(e) {
    e.preventDefault()
  }
  function fileDrop(e) {
    e.preventDefault()
    const fileList = e.dataTransfer.files
    handleLocalUpload(fileList)
  }

  function handleNewUpload(e) {
    e.preventDefault()
    const fileList = e.target.files
    handleLocalUpload(fileList)
  }

  return (
    <div className='create-new-blog'>
      <form>
        <div className='create-new-blog__upper'>
          <span className='create-new-blog__upper__left'>
            <ArrowLeft className='create-new-blog__upper__left-svg' />
            <span className='create-new-blog__upper__left-text'>
              Create Blog
            </span>
          </span>
          <div className='create-new-blog__upper__right__wrapper'>
            <input
              type='submit'
              className='blog-btns create-new-blog__upper__right__btn_1'
              value='Save As Draft'
            />
            <input
              type='submit'
              className='blog-btns btn create-new-blog__upper__right__btn_2'
              value='Submit'
            />
          </div>
        </div>
        <div className='create-new-blog__form'>
          <input
            type='text'
            placeholder='Add blog title'
            className='create-new-blog__form__input-text create-new-blog__form__title'
            autoComplete='off'
          />
          <input
            type='text'
            placeholder='Add blog description'
            className='create-new-blog__form__input-text create-new-blog__form__description'
            autoComplete='off'
          />
          <div className='create-new-blog__form__input-upload__wrapper'>
            <p className='create-new-blog__form__input-upload__caption'>
              Add Featuring Image
            </p>
            <div
              className='create-new-blog__form__input-upload__input_dialog'
              onDragEnter={dragEnter}
              onDragOver={dragOver}
              onDragLeave={dragLeave}
              onDrop={fileDrop}
            >
              <div>
                <UploadSym />
                <p className='dialog__caption'>Drag and drop image here</p>
                <label className='btn create-new-blog__form__input-upload__input'>
                  <input
                    type='file'
                    id='fileInput'
                    name='fileInput'
                    files={files}
                    onChange={handleNewUpload}
                  />
                  Choose a file
                </label>
                {files && (
                  <div className='prompt create-new-blog__input-value'>
                    <p>{fileDescription}</p>
                    <CloseIcon onClick={emptyFileList} />
                  </div>
                )}
                {error !== '' && <p className='prompt upload-error'>{error}</p>}
              </div>
            </div>
          </div>
          <textarea
            name='blog-content'
            className='create-new-blog__form__input-text create-new-blog__form__textarea'
          ></textarea>
        </div>
      </form>
    </div>
  )
}
