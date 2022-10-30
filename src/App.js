import { useState } from 'react';
import './App.css';

function App() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12  fullpage d-flex justify-content-center align-items-center">
                    <div className="bigbox">
         <Bigbox></Bigbox>

                    </div>


                </div>

            </div>

        </div>

    );
}

function Bigbox(){
  const [firstval, setFirstval]=useState('')
  const [secondval, setSecondval] = useState('')
  const [operator, setOperator]=useState('')


  const Setval= (props) =>{
    var val
    if (operator!==''){

      if (secondval==='0'){
         val =secondval+props
        val = val.replace('0','')
        setSecondval(val )
        
      }
      else{
      setSecondval(secondval+props )
      }


    }
    else{

      if (firstval==='0'){
        val =firstval+props
        val = val.replace('0','')
        setFirstval(val )
        
      }
      else{
      setFirstval(firstval+props )
      }
    }




  }

  const ShowResult = () => {


  
      return (
          <div className="show-result d-flex align-items-center justify-content-around">
              <div className='row mx-auto'>
                  <div className="col-12 d-flex justify-content-evenly align-items-center border border-3 border-dark">
                      <input type="button" className="button-chumma-result"
                          value={firstval}></input>
                      <input type="button" className="button-chumma-result"
                          value={operator}></input>
                      <input type="button" className="button-chumma-result"
                          value={secondval}></input>
                      <input type="button" className="button-chumma-result"
                          value={"0"}></input>
  
                  </div>
              </div>
  
          </div>
  
      )
  
  
  }
  
  
  const Calcbox = () => {
  
  
      return (
          <div className='calcbox'>
              <div className="row">
  
                  <div className="col-12 d-flex justify-content-evenly">
                      <input type="button" className="button-chumma"
                          value={"7"} onClick={(e)=>
                            Setval(e.target.value)
                          }
                          ></input>
                      <input type="button" className="button-chumma"
                          value={"8"}
                          onClick={(e)=>
                            Setval(e.target.value)
                          }></input>
                      <input type="button" className="button-chumma"
                          value={"9"}onClick={(e)=>
                            Setval(e.target.value)
                          }></input>
                      <input type="button" className="button-chumma"
                          value={"+"}
                          onClick={(e)=>setOperator(e.target.value)}
                          ></input>
  
  
                  </div>
                  <div className="col-12 d-flex justify-content-evenly">
                      <input type="button" className="button-chumma"
                          value={"4"}
                          onClick={(e)=>
                            Setval(e.target.value)
                          }></input>
                      <input type="button" className="button-chumma"
                          value={"5"}
                          onClick={(e)=>
                            Setval(e.target.value)
                          }></input>
                      <input type="button" className="button-chumma"
                          value={"6"}onClick={(e)=>
                            Setval(e.target.value)
                          }></input>
                      <input type="button" className="button-chumma"
                          value={"-"}
                          onClick={(e)=>setOperator(e.target.value)}></input>
                  </div>
                  <div className="col-12 d-flex justify-content-evenly">
                      <input type="button" className="button-chumma"
                          value={"1"}
                          onClick={(e)=>
                            Setval(e.target.value)
                          }></input>
                      <input type="button" className="button-chumma"
                          value={"2"}
                          onClick={(e)=>
                            Setval(e.target.value)
                          }></input>
                      <input type="button" className="button-chumma"
                          value={"3"}
                          onClick={(e)=>
                            Setval(e.target.value)
                          }></input>
                      <input type="button" className="button-chumma"
                          value={"*"}
                          onClick={(e)=>setOperator(e.target.value)}
                          ></input>
  
                  </div>
                  <div className="col-12 d-flex justify-content-evenly">
                      <input type="button" className="equal-btn"
                          value={"="}></input>
                      <input type="button" className="button-chumma"
                          value={"0"}
                          onClick={(e)=>
                            Setval(e.target.value)
                          }></input>
                      <input type="button" className="button-chumma"
                          value={"/"}
                          onClick={(e)=>setOperator(e.target.value)}
                          ></input>
  
                  </div>
              </div>
  
          </div>
  
      )
  }
  

  return(   <div>
    <ShowResult/>
    <Calcbox/>
    </div>
    )
 
  



}


export default App;
