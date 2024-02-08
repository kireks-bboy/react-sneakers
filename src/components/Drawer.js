export default function Drawer(){
  return (
    <div style={{display: 'none'}} className='overlay'>
 <div className='drawer'>
  <h2 className='mb-30 d-flex justify-between'>Корзина  <img className='removeBtn cu-p' src="/img/btn-remove.svg" alt="Remove" /></h2>

 <div className='items'>
 <div className='cartItem d-flex align-center'>
   

   <div style={{backgroundImage: 'url(/img/sneakers/1.jpeg)'}} className='cartItemImg'></div>
   
       <div className='mr-20 flex'>
         <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
         <b>129$</b>
       </div>
       <img className='removeBtn' src="/img/btn-remove.svg" alt="Remove" />
     </div>
 </div>


<div  className='cartTotalBlock'>
<ul>
<li>
  <span>Итого:</span>
  <div></div>
  <b>120$</b>
</li>
<li>
  <span>Налог 5%:</span>
  <div></div>
  <b>1.99$</b>
</li>
</ul>
<button className='greenButton'>Оформить заказ <img src="/img/arrow.svg" alt="" /></button>
</div>


  </div>
</div>
   
  )
}