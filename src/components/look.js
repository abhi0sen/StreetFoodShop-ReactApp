const Loop = function(){

    const loopArray = [
        'name1',
        'name2',
        'name3',
        'name4'
    ]

    return <div>
        loop 
        <ul>
            {loopArray.map((item, index) => <li>name_1</li>)}
            {/* {loopArray.map((item, index) => (<li>key ={index}>{item}</li>)} */}
        </ul>
    </div>

}

export default Loop;