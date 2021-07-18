import React from 'react';
import { moneyFormat } from '../helpers';

const Header = ({ money, total }) => {



    return (
        <>
            {total > 0 ? (
                <div className="header">
                    {money > total ? (<h3>Harcayacak <span>$ {moneyFormat(money - total)}</span>  paranız kaldı...</h3>) : (<h4>Paran bitti fakir!!</h4>)}

                </div>
            ) : (
                <div className="header">
                    <h3>Harcamak için  <span>$ {moneyFormat(money)}</span>  var...</h3>

                </div>
            )
            }

            <style jsx>{`
                .header{
                    position:sticky;
                    top:0;
                    background:linear-gradient(to bottom,lightblue,seagreen);
                    height:60px;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    color:#fff;
                    font-size:24px;
                    letter-spacing:1px;

                }
                .header span{
                    margin:0 10px;
                    font-weight:bold;
                }
            
            
            `}</style>

        </>
    )
}

export default Header
