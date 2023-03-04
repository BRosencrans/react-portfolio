import React from "react";

function Resume() {
    return (
        <main className= "text-center row justify-content-center">
            <div className="res-text">
                <div className="col-1"></div>
                <a className="btn text-success bg-light" download href="#">Download Resume</a>
                <br/>
                <br/>
                <h4  className="text-center row justify-content-center">Education:</h4>
                        <div className="indent text-center row justify-content-center">
                                <h6>tincidunt augue</h6> 
                <br/>
                <br/>
                         <h4  className="text-center row justify-content-center">Skills:</h4>
                        <div   className=" text-center row justify-content-center">
                            <ul>
                                <li>iaculis eu</li>
                                <li>elementum nisi</li>
                                <li>sollicitudin nibh</li>                                                         
                            </ul>
                        </div>
                        <br/>
                        <br/>
                        <h4 className="text-center row justify-content-center">Work Experience:</h4>

                        <div className=" text-center row justify-content-center">
                            <h5>tellus elementum sagittis</h5>
                            <ul>
                                <li>volutpat maecenas volutpat blandit aliquam</li>                               
                                <li>aliquet bibendum enim facilisis gravida</li>
                            </ul>
                            <h5>tempus imperdiet nulla</h5>
                            <ul>
                                <li>adipiscing elit pellentesque habitant morbi</li>
                                <li>integer vitae justo eget magna</li>                    
                            </ul>
                            <br/>
                        </div>   
                <div className="col-10">
                </div>                    
               </div>               
              </div>
      
        </main>        
    )
}

export default Resume;