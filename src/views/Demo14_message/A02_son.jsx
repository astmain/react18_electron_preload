

export default function A02_son(props) {
    console.log(`A02_son---props:`,     props        )
    let arg={name:A02_son,age:222}



    return <div className="A02_son">
        <h3>子传父callback</h3>
        <button onClick={    ()=>     props.callback(arg)}>callback</button>




    </div>
}
