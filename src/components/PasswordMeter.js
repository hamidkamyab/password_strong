import React from 'react'

function PasswordMeter({ score }) {

    const progressColor = () => ({
        width: `${score * 25}%`,
        background: colorCode()
    })

    const labelText = ()=>{
        switch (score) {
            case 1:
                return 'ضعـــیف';
                break;
            case 2:
                return 'متوســـط';
                break;
            case 3:
                return 'قـــوی';
                break;
            case 4:
                return 'بسیار قـــوی';
                break;

            default:
                break;
        }
    }

    const colorCode = () => {
        switch (score) {
            case 0:
                return '#a8a8a8';
                break;
            case 1:
                return '#d63031';
                break;
            case 2:
                return '#fa983a';
                break;
            case 3:
                return '#2ed573';
                break;
            case 4:
                return '#008000';
                break;

            default:
                break;
        }
    }

    return (
        <div>
            <div className="progress" role="progressbar" aria-label="Example 1px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ height: '3px' }}>
                <div className="progress-bar" style={progressColor()}></div>
            </div>
            <div className={`strongText position-relative mt-2 ${score == 0?'d-none':''}`}>
                <small className='bg-white px-3' style={{color:`${colorCode()}`}}>
                    {labelText()}
                </small>
            </div>

        </div>
    )
}

export default PasswordMeter