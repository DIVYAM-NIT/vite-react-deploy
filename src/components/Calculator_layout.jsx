import React from 'react'
import Button from './Button';
import styles from './Calculator_layout.module.css'

export default function Calculator_layout(props) {
    let arr=[0,1,2,3,4,5,6,7,8,9,'+','-','*','/','.'];

    return (
        <>
            <div className={`container text-center my-5 ${styles.align}`}>
                <div className={` grid row row-cols-4 ${styles.calculator} gap-3 mx-5`}>
                    <input className='col-10' type="text" placeholder='Enter the expression' value={props.intext} id='input' onChange={props.onChange} />
                    {arr.map((item)=>(< Button item={item} enter={props.enter} key={item}/>))}
                    <button key="hello" className={`col ${styles.border} `} onClick={props.evaluate}>=</button>
                    <button key="hell" className={`col ${styles.border} `} onClick={props.del}>Del</button>
                    <button key="hel" className={`col ${styles.border} `} onClick={props.clr}>Clr</button>
                </div>
            </div>
        </>
    )
}
