export default function Card(){
  return (
    <div className='card'>
    <div className="favorite">
    <img src="/img/unliked.svg" alt="" />
    </div>
      <img width={133} height={112} src="/img/sneakers/1.jpeg" alt="" />
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className='d-flex justify-between'>
        <div className='d-flex flex-column'>
          <span>Price:</span>
          <b>599$</b>
        </div>
        <button className='button'>
          <img width={11} height={11} src="/img/btn-plus.svg" alt="" />
        </button>
      </div>
    </div>
  )
}