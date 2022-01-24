const Contact = function(){
    return (
        <div className="container p-2 bg-dark text-light text-center">
            <table>
                <tr>
                    <td>
                        Phone No -
                    </td>
                    <td>
                        8989998040
                    </td>
                </tr>
                <tr>
                    <td>
                        Mail Id
                    </td>
                    <td>
                        abhisar.sen@avantika.edu.in
                    </td>
                </tr>
                <tr>
                    <form action="">
                        <input type="text" placeholder="Enter Your Name" />
                        <input type="email" placeholder="Enter Your Mail" />
                        <input type="text" placeholder="Enter Your Query" />
                        <input type="Submit" />
                    </form>
                </tr>
            </table>
        </div>
    ); 
}

export default Contact;