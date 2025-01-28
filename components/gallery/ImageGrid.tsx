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
            
            <div className=" border-[var(--border-color)] border-1 border-t py-2" key={id}>
              <div className=" border-[var(--border-color)] border-1 border-l border-r px-2" key={id}>
                {item.thumbnail ? 
                (<div 
                  key={id}
                  id={item.id} 
                  className={`${styles['image']}  `} 
                  onClick={() => openModal(item.id, item.url)}
                  style={{ backgroundImage: `url(${item.thumbnail})` }} 
                >
                </div>)
                :
                (<div className={`${styles['image']}`} key={id}>
                </div>)}

              </div>
            </div>
            
          
        ))}
      </div>

      <div className={`${styles['modal']} bg-opacity-50 bg-black backdrop-blur-md ${modalOpen ? 'flex' : 'hidden'}`}>
        {/* <div className={`${styles['modal-image']}`}
          style={{background : `url(${modalUrl})`}}>
        </div> */}
        <img src={modalUrl} className={`${styles['modal-image']}`} alt="" />
        <button className='w-8 h-8 absolute top-0 right-0 m-2 text-sm flex items-center justify-center text-white bg-black rounded-full' 
        onClick={()=>{setModalOpen(false)}}>X</button>
      </div>
    </div>
  )
}

export default ImageGrid
