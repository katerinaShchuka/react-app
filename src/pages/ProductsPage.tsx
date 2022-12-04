import React, { useContext, useState } from 'react';
import CreateProduct from '../components/CreateProduct';
import { ErrorMessage } from '../components/ErrorMessage';
import { Loading } from '../components/Loading';
import { ModalContext } from '../context/ModalContext';
import { IProduct } from '../data/models';
import { Modal } from '../components/Modal';
import { Product } from '../components/Product'
import { useProducts } from '../hooks/products';


export function ProductsPage() {
 
        
        const { loading, products, error, addProduct } = useProducts()
 const {modal, open, close} = useContext(ModalContext)

 // const [modal, setModal] = useState(false)
  
const createHandler = (product: IProduct) => {
  close()
  addProduct(product)
}

  return (
    <div className="container mx-auto max-w-2xl pt-5">
{loading && <Loading />}
{error && <ErrorMessage error={error} />}
{products.map(product => <Product product={product} key={product.id}/>)}

 { modal && <Modal title="Create new product" onClose={close}>
 <CreateProduct onCreate={createHandler} />
 </Modal> }

 <button className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2"
 onClick={open}
 >+</button>
</div>
  );
   
  
}
