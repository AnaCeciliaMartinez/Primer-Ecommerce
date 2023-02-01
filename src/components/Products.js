import CardList from './CardList'

const Products = (props) => {
    return (
    <div>
        <h1 className='text-[#4f46e5] text-center font-serif text-2xl md:text-3xl'>Catalogo de Juegos</h1>
        <CardList lista={props.lista}/>
    </div>
    )
}

export default Products
