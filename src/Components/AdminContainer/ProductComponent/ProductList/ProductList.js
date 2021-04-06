import React,{useState,useEffect} from 'react'
import Product from '../Product/Product'
import ProductAdd from '../ProductAdd/ProductAdd'
import ProductEdit from '../ProductEdit/ProductEdit'
import SearchBar from '../SearchBar/SearchBar'
import {getProductsService,getProductByIdService,addProductService,updateProductService,deleteProductService} from '../../../../Services/AdminServices'

function ProductList(props) {
    // It contains everything related to Admin Product Operations such as view products in inventory, add, remove and update product
    const [productList,setProductList] = useState([]);
    const [error,setError] = useState(false);
    const [loading,setLoading] = useState(true);
    const [action, setAction] = useState("add");
    const [newProduct, setNewProduct] = useState();
    const [keyword,setKeyword] = useState("");

    useEffect(()=>{
        refreshProducts();
    },[])

    function refreshProducts() {
        setLoading(true);
        getProductsService()
        .then(json => {
            let jsonList =[];
            json.forEach(item => {
                let product = {
                    "ProductId":item.ProductId,
                    "ProductName":item.ProductName,
                    "availableColours":item.ProductDescription.availableColours,
                    "sheen":item.ProductDescription.sheen,
                    "resinType":item.ProductDescription.resinType,
                    "cleanup":item.ProductDescription.cleanup,
                    "recommendedUse": item.ProductDescription.recommendedUse,
                    "mpiRating": item.ProductDescription.mpiRating,
                    "vocLevel": item.ProductDescription.vocLevel,
                    "ProductQuantity":item.ProductQuantity,
                    "ProductAmount":item.ProductAmount,
                    "ProductType":item.ProductType

                }
                jsonList.push(product);
            })
            
            setProductList(jsonList);
            setLoading(false);
        }).catch(err => 
            {
                console.log(err);
                setError(err);
            })
    }

    async function addProduct(e)  {
            
            await addProductService(newProduct);
            refreshProducts();
    }

    async function editProduct(e) {
       
        let updatedProduct = newProduct;
        await updateProductService(updatedProduct);
        setAction("add")
        refreshProducts()
    }

    async function deleteProduct(e) {
        e.preventDefault();
        await deleteProductService(e.target.value);
        refreshProducts();
    }

    async function renderEditProductForm(e) {
        e.preventDefault();
        let productToUpdate = {};
        productList.forEach((product) => {
            if (product.ProductId === e.target.value)   {
               
                productToUpdate = product;
        }})
        setNewProduct(productToUpdate)
        setAction("edit")
    }

    function updateProduct(e) {
        
        setNewProduct({
            ...newProduct,
            [e.target.id]: e.target.value
        }) 
      
    }

    function updateKeyword(e) {
        
        setKeyword(
            e.target.value
        ) 
    }

    function search(e) {
        setLoading(true);
        if(keyword.trim() !== ""){
            getProductByIdService(keyword)
        .then(json => {
            let jsonList =[];
                let product = {
                    "ProductId":json.ProductId,
                    "ProductName":json.ProductName,
                    "availableColours":json.ProductDescription.availableColours,
                    "sheen":json.ProductDescription.sheen,
                    "resinType":json.ProductDescription.resinType,
                    "cleanup":json.ProductDescription.cleanup,
                    "recommendedUse": json.ProductDescription.recommendedUse,
                    "mpiRating": json.ProductDescription.mpiRating,
                    "vocLevel": json.ProductDescription.vocLevel,
                    "ProductQuantity":json.ProductQuantity,
                    "ProductAmount":json.ProductAmount,
                    "ProductType":json.ProductType

                }
                jsonList.push(product);
            
            
            setProductList(jsonList);
            setLoading(false);
        }).catch(err => 
            {
                console.log(err);
                setLoading(false);
                setError(err);
            })
        } else {
            refreshProducts();
        }
        
    }
    



    if (loading) return (<div className="alert alert-info">Loading.....</div>)
    if (error) return (<div className="alert alert-danger">Error while loading....</div>)
    return (
        <div className="row border-dark ">
       
        <div className="col-sm-12 col-md-12 ">
        { (action === "add") ?
             <ProductAdd action={addProduct} update={updateProduct} /> : <ProductEdit action={editProduct} update={updateProduct} currentProduct={newProduct} /> 
           }
        </div>
      
        <div className="col-sm-12 col-md-12 ">
        <br/><br/>
            <SearchBar keyword={keyword} update={updateKeyword} search={search}/>
            <br/>
        <table className="table">
            <thead>
                <tr>
                    <th>Product Id</th>
                    <th>Product Name</th>
                    <th>Product Quantity</th>
                    <th>Edit</th>
                    <th>Remove</th>
                </tr>

            </thead>
            <tbody>
                {productList.map((product, key) => (
                    <Product product={product} key={key} renderEditProductForm={renderEditProductForm} deleteProduct={deleteProduct}/>
                 
                ))

                }
            </tbody>
        </table>
        </div>
        

      
    </div>
    )
}

export default ProductList
