import React from 'react';
import Card from './Card';
import Sdata from './Sdata';

const Service =()=>{
    return(
        <>
            <div className='my-5'>
                <h1 className='text-center'>Our Services</h1>
            </div>
            {/* container-fluid use for entire full width container set */}
            <div className='container-fluid mb-5'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                    {/* gy property use for horizontal and vertically margin set  */}
                           <div className='row gy-4'>
                           {
                                Sdata.map((value,index) => {
                                    return <Card
                                        key={index} imgsrc={value.imgsrc}
                                         title={value.title}   
                                        />
                                    })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Service;