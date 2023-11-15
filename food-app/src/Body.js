
const burgerKing = {
    name : "Burger king",
    image : 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
    cusines : ["Burger","American"],
    rating : "4.2"
}
function Body(){
    return(
        <div class="container mt-5">
            <div class="card">
                <img src={burgerKing.image} class="card-img-top"/>
                <div class="card-header">
                    <h2 className="text-muted">{burgerKing.name}</h2>
                </div>
                <div class="card-body">
                    <h3 class="text-danger">{burgerKing.cusines.join("----")}</h3>
                 </div>
                <div class="card-footer d-flex justify-content-between">
                    <h2 className="btn btn-success">{burgerKing.rating}<span className="bi bi-star"></span></h2>
                    <a href="#" class="btn btn-primary btn-lg">Order Now!</a>
                </div>
            </div>
        </div>
    )
}
export default Body;