import React from 'react'

function PasswordMeter() {
    return (
        <div>
            <div className="progress" role="progressbar" aria-label="Example 1px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ height: '3px' }}>
                <div className="progress-bar" style={{ width: '25%' }}></div>
            </div>
            <div className='strongText position-relative mt-2'>
                <small className='text-success bg-white px-3'>قوی</small>
            </div>

        </div>
    )
}

export default PasswordMeter