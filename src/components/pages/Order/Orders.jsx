import React from 'react'
import cheeseBurg from '../../assets/images/cheeseburg.png'
import orangeJc from '../../assets/images/drinks/orange-juice.png'

const recentOrderData = [
    {
        order_date: '2024-05-17T03:24:00',
        order_total: '$435.50',
        order_items: [
          {
            image: cheeseBurg, 
            item_name: 'Cheese Burger',
            unit_price: '$200.00',
            qty: 1,
            total: '$200.00',
          },
          {
            image: orangeJc, 
            item_name: 'Orange Juice',
            unit_price: '$100.00',
            qty: 2,
            total: '$200.00',
          }
        ]
    },
    {
        order_date: '2024-05-14T05:24:00',
        order_total: '$96.35',
        order_items: [
          {
            image: cheeseBurg, 
            item_name: 'Cheese Burger',
            unit_price: '$200.00',
            qty: 1,
            total: '$200.00',
          },
          {
            image: orangeJc, 
            item_name: 'Orange Juice',
            unit_price: '$100.00',
            qty: 2,
            total: '$200.00',
          }
        ]
    },
    {
        order_date: '2024-05-17T07:14:00',
        order_total: '$836.44',
        order_items: [
          {
            image: cheeseBurg, 
            item_name: 'Cheese Burger',
            unit_price: '$200.00',
            qty: 1,
            total: '$200.00',
          },
          {
            image: orangeJc, 
            item_name: 'Orange Juice',
            unit_price: '$100.00',
            qty: 2,
            total: '$200.00',
          }
        ]
    },
    {
        order_date: '2024-05-16T12:40:00',
        order_total: '$334.50',
        order_items: [
          {
            image: cheeseBurg, 
            item_name: 'Cheese Burger',
            unit_price: '$200.00',
            qty: 1,
            total: '$200.00',
          },
          {
            image: orangeJc, 
            item_name: 'Orange Juice',
            unit_price: '$100.00',
            qty: 2,
            total: '$200.00',
          }
        ]
    },
    {
        order_date: '2024-05-14T03:24:00',
        order_total: '$876.00',
        order_items: [
          {
            image: cheeseBurg, 
            item_name: 'Cheese Burger',
            unit_price: '$200.00',
            qty: 1,
            total: '$200.00',
          },
          {
            image: orangeJc, 
            item_name: 'Orange Juice',
            unit_price: '$100.00',
            qty: 2,
            total: '$200.00',
          }
        ]
    }
]

function Orders() {
    return(
      <div className="container p-4 mx-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-[orange] text-white">
            <th className="px-4 py-2 border-b">Order Date</th>
            <th className='px-4 py-2 border-b'></th>
            <th className="px-4 py-2 border-b">Item Name</th>
            <th className="px-4 py-2 border-b">Unit Price</th>
            <th className="px-4 py-2 border-b">Quantity</th>
            <th className="px-4 py-2 border-b">Order Total</th>
          </tr>
        </thead>
        <tbody>
          {recentOrderData.map((order, orderIndex) => (
            <React.Fragment key={orderIndex}>
              {order.order_items.map((item, itemIndex) => (
                <tr key={itemIndex} className=''>
                  {itemIndex === 0 && (
                    <>
                      <td className="px-4 py-2 border-b" rowSpan={order.order_items.length}>
                        {new Date(order.order_date).toLocaleDateString()}
                      </td>
                    </>
                  )}
                  <td className="px-4 py-2 border-b">
                    <img src={item.image} alt={item.item_name} className="object-cover w-12 h-12" />
                  </td>
                  <td className="px-4 py-2 border-b">{item.item_name}</td>
                  <td className="px-4 py-2 border-b text-[#21a821]">{item.unit_price}</td>
                  <td className="px-4 py-2 border-b">{item.qty}</td>
                  
                  {itemIndex === 0 && (
                    <td className="px-4 py-2 border-b text-[red]" rowSpan={order.order_items.length}>
                      {order.order_total}
                    </td>
                  )}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
      );
}

export default Orders;