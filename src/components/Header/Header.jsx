import Button from "../Buttons/Button";
import "./style.css"
import Cars from "../../assets/image/car.svg"




export default function Header() {
  return (
    <header>
        <div className="header-section-left">
            <h1 className="text-header">The World's Best Luxury Car Deals</h1>
            <div className="text-paragraf">HKinvestor can provide rentals of the most exclusive cars like Ferrari and Lamborghini.</div>
            <div className="btn-group-header">
                <Button className={"orange"} name={"Buy Now"}/>
                <Button className={"orange_secondary"} name={"Video Introduction"} />
            </div>
            <div className="text-number-folowers">
                <div className="text-all">
                    <h1 className="text-number">500+</h1>
                    <p className="text-name">Luxury Cars</p>
                </div>
                <div className="text-all">
                    <h1 className="text-number">#1</h1>
                    <p className="text-name">Best Deal Car</p>
                </div>
            </div>
        </div>



        <div className="header-section-right">
            <img src={Cars} alt="" className="car-image                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         " />
        </div>

    </header>
  )
}
