import React from 'react';

export const TopPlayers:React.FC = () => {
    return (
        <div className="top-players">
            <p className='mb-2'> <span className="top-title">TOP PLAYER</span>  </p>
            <table className="top-table">
                <thead>
                <tr>
                    <th className='heading'>N</th>
                    <th className='heading'>Name</th>
                    <th className='heading'>Score</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                   <td className='sqr'>1.</td> 
                   <td className='sqr'>Tom</td> 
                   <td className='sqr'>300</td> 
                </tr>
                <tr>
                   <td className='sqr'>2.</td> 
                   <td className='sqr'>Tom</td> 
                   <td className='sqr'>400</td> 
                </tr>
                <tr>
                   <td className='sqr'>3.</td> 
                   <td className='sqr'>Tom</td> 
                   <td className='sqr'>500</td> 
                </tr>
                </tbody>
            </table>
        </div>
    )
}