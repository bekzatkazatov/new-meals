import React, {useState} from "react";
import ModalVideo from "react-modal-video";


const CustomModalvideo = () => {
    const [isOpen,setOpeen] =useState(true)
    return (
       <div>
           <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="_gFB1fkNhXs" />

       </div>
    )
}
export default CustomModalvideo