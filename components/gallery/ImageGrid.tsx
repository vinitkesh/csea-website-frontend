import React, { useState } from 'react'
import styles from './ImageGrid.module.css'

const ImageGrid = ({images}) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalId, setModalId] = useState(0)
  const [modalUrl, setModalUrl] = useState('')

  function openModal (id, url) {
    setModalId(id);
    setModalUrl(url)
    setModalOpen(true)
  }

  return (
    <div className={` ${styles['grid-wrapper']}`}>
      <div className={`${styles['images-wrapper']}`}>
        {images?.map((item, id) => (
            item.thumbnail ? 
              <div 
              key={id}
                id={item.id} 
                className={`${styles['image']}`} 
                onClick={() => openModal(item.id, item.url)}
                style={{ backgroundImage: `url(${item.thumbnail})` }} 
              >
              </div>
              :
              <div className={`${styles['image']}`} key={id}>
              </div>
            
          
        ))}
      </div>

      <div className={`${styles['modal']} bg-opacity-50 bg-black backdrop-blur-md ${modalOpen ? 'flex' : 'hidden'}`}>
        {/* <div className={`${styles['modal-image']}`}
          style={{background : `url(${modalUrl})`}}>
        </div> */}
        <img src={modalUrl} className={`${styles['modal-image']}`} alt="" />
        <button className='w-10 h-10 absolute top-0 right-0 m-2 text-xl text-white bg-black rounded-full' 
        onClick={()=>{setModalOpen(false)}}>x</button>
      </div>
    </div>
  )
}

export default ImageGrid
