import Base from '../components/Base'
import IndividualProduct from '../components/IndividualProduct';
import './css/home.scss'
import ComponenteConTamañoDePantalla from '../constants/ScreenSize'

import { colorWhite, colorPinkLight } from '../constants/variables';


function Home() {

    const screenSize = ComponenteConTamañoDePantalla();

    return (
        <div>
            <Base />
            <div className='content'>
                <div className='home-content'>
                    <div className="discount-products">
                        <h3 className='discount-products-title'>Productos con descuento</h3>
                        <div className="product-list">
                            {[1, 2, 3, 4].map((index) => (
                                <div key={index} className={`contenedor ${index === 1 ? 'primer-elemento' : ''}`}>
                                    {screenSize.screenWidth > 950 ?
                                        <IndividualProduct
                                            width={index === 1 ? "215px" : undefined}
                                            height={index === 1 ? "330px" : undefined}
                                            imageHeight={index === 1 ? '200px' : undefined}
                                            backgroundColor={index === 1 ? colorPinkLight : colorWhite}
                                        /> : <IndividualProduct width="155px"
                                            height="240px"
                                            backgroundColor={index === 1 ? colorPinkLight : colorWhite}
                                        />
                                    }
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="categories">
                        <h3>print</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
