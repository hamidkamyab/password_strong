import React from 'react'

function PasswordGenerator({generatedPass}) {

    const chars = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz', '0123456789','~!@#$%^&*()_+|=.,'];
    const handleGenerate = () => {
        let pass='';
        for (var i = 0; i < 4; i++) {
            for(var j=0; j < 4; j++){
                pass = pass + chars[i][Math.floor(Math.random() * chars[i].length)];
            }
        }
        pass = pass.split('');
        for(var i=0;i<pass.length;i++){
            let j = Math.floor(Math.random() * (i + 1));
            [pass[i], pass[j]] = [pass[j], pass[i]];
        }
        pass = pass.join('')
        generatedPass(pass);
    }
    return (
        <button className='btn btn-dark btn-sm' onClick={handleGenerate}>تولید رمز ایمن</button>
    )
}

export default PasswordGenerator