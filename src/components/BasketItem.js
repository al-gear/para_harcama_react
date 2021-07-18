import React from 'react'

const BasketItem = ({ item, total, product }) => {
    return (
        <>
            <li className="item">
                {product.title} x <span>{item.amount}</span>
            </li>
            <style jsx>{`
            .item{
                padding-bottom:10px;
                font-size:17px;
                
            }
            .item span{
                color:#999;
            }
            
            `}</style>

        </>
    )
}

export default BasketItem
