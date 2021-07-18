import React from 'react'
import BasketItem from './BasketItem'

const Basket = ({ basket, total, products }) => {
    return (
        <>
            <div className="basket-container container">
                <h3>Alışveriş Detayları</h3>
                <ul>
                    {basket.map(item => (
                        <BasketItem item={item} total={total} key={item.id} product={products.find(p => item.id === p.id)} />
                    ))}
                </ul>
                <div className="total">
                    Toplam: ${total}
                </div>
            </div>
            <style jsx>{`
            .basket-container{
                padding:20px;
                background:#fff;
                border:1px solid #ddd;
                margin-bottom:20px
            }
            .basket-container h3{
                font-size:20px;
                margin-bottom:15px;
            }
            .basket-container .total{
                border-top:1px solid #ddd;
                padding-top:10px;
                margin-top:10px;
                font-size:18px;
                font-weight:bold;
                text-align:right;
                color:green;
            }
            
            `}</style>
        </>
    )
}

export default Basket
