import React, { useRef,useState } from 'react';
import './assign2.scss';
const Assign2 = () => {

    const file = useRef(null);
    const [src, srcChange] = useState('');

    const upload=()=>{
        const uploadedFile = file.current.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(uploadedFile);
        // console.log(reader);
        reader.onload=(e)=>{
            var image=new Image();
            image.src=e.target.result;
            image.onload=function(){
                var width = this.width;
                // var height = this.height;

                if(width<600){
                    alert('width is less than 600');
                }
                else if(width>600){
                    alert('width is greater than 600, crop it');
                } else{
                    alert('correct width');
                    srcChange(this.src);
                }

            }


        }
    }

    return (
        <div className="assign2">
            <input type="file" id="img" ref={file} />
            <button onClick={upload}>submit</button>
            {src?<img src={src} alt="img"/>:null}
        </div>
    );
}

export default Assign2;