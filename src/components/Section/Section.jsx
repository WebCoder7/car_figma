import { car1, car2, car3, car4 } from "../../assets";
import "./style.css"


export default function Section() {
    return (
        <>
            <h1 className="section_text">Rent a Luxury Car</h1>
            <section className="section1">
                <div className="car_box">
                    <img src={car1} alt="" className="car_image_boxes" />
                    <div className="hover-car-texts">
                        <h1 className="hover-text-top">Supercars</h1>
                        <h3 className="hover-text-bottom">Discover</h3>
                    </div>
                </div>
                <div className="car_box">
                    <img src={car2} alt="" className="car_image_boxes" />
                    <div className="hover-car-texts">
                        <h1 className="hover-text-top">Sportcars</h1>
                        <h3 className="hover-text-bottom">Discover</h3>
                    </div>
                </div>
                <div className="car_box">
                    <img src={car3} alt="" className="car_image_boxes" />
                    <div className="hover-car-texts">
                        <h1 className="hover-text-top">SUV</h1>
                        <h3 className="hover-text-bottom">Discover</h3>
                    </div>
                </div>
                <div className="car_box">
                    <img src={car4} alt="" className="car_image_boxes" />
                    <div className="hover-car-texts">
                        <h1 className="hover-text-top">Supersuv</h1>
                        <h3 className="hover-text-bottom">Discover</h3>
                    </div>
                </div>
            </section>
        </>
    )
}
