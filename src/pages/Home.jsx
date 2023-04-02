import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>    
            <div id="k" class = "flex middle center">
                <div>
                    <div class="name ">
                        <div  id="cafeName" class="flex center bottom     cafename1000 "><span>Hα<span id="      speciala">w</span>klet&nbsp;</span><span>Express</span></div>
                        <div id="theme" class="flex center top theme1000">Fueling Men for Others</div>
                    </div>
                    <div id="order" class ="flex center middle">
                        <Link className="link" to="/Order">
                            <span>Order</span>
                        </Link>
                    </div>
                </div>
            </div>


            <div class="container">
                <div class="section">
                    <div  class="flex">
                        <div class="x2"></div>
                        <div class="title flex center x3"> <span>Food</span></div>
                    </div>			
                    <div class="flex margin10">
                        <div class="exampleImage x2">
                            <img src="./pages/images/Smoothing-pouring.jpg" alt="" />
                        </div>
                        <div class="articleLeft x3 " id ="article3">
                            <div class="info flex center">
                                <p>Description of the types of food </p>
                            </div>
                        </div>
                    </div>
                </div>

            
            <div class="section">
                <div class="flex">
                    <div class="title flex center x3"> <span>Goods αnd Products</span></div>
                    <div class="x2"></div>
                </div>			
                <div class="flex margin10" >
                    <div class="articleRight x3 " id ="article3">
                        
                        <div class="info flex center">
                            <p>Description of the types of not food items </p>
                        </div>
                    </div>
                    <div class="exampleImage x2">
                        <img src="./pages/images/white-shirt&tie.jpg" alt="" />
                    </div>
                </div>
            </div>

        </div>
    </div>
    )
}

export default Home;