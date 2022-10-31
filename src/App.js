import { useState } from 'react';
import './App.css';

function App() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12  fullpage d-flex justify-content-center align-items-center">
                    <div className="bigbox border border-3 border-dark">
         <Bigbox></Bigbox>

                    </div>


                </div>

            </div>

        </div>

    );
}

function Bigbox(){
  const [firstval, setFirstval]=useState('') // for first value
  const [secondval, setSecondval] = useState('') // for second value
  const [operator, setOperator] = useState('') //for operator
  const [result , setResult] = useState(0) // for result

  const Result = () => {
    //  r = f o(+,-,*,/) s
    var f= parseInt(firstval)
    var s = parseInt(secondval)
    var o = operator
    if (o==="+"){
      setResult(f+s)
    }
    else if (o==='-')
    {
      setResult(f-s)
    }
    else if (o==='*'){
      setResult(f*s)
    }
    else if (o==='/'){
      setResult(f/s)
    }

      

  }

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
                          value={result}></input>
  
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
                          value={"="} onClick={Result()} ></input>
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
