import { mask2, mask3, mask4, mask5, mask6 } from "../../assets"
import  mask  from "../../assets/image/Mask.svg"
import "./style.css"


export default function Section3() {
  return (
    <>
      <section className="section3">
        <div className="box_maks">
          <img src={mask} alt="" className="img_maks" />
          <div className="mask_poragraf">
            <h6 className="dubai">London</h6>
            <p className="car_here">Car hire in 75 pick-up locations</p>
            <p className="from">From $ 669,00 per day</p>
            <p className="dubai_serch">Search rental cars in Dubai</p>
          </div>
        </div>
        <div className="box_maks">
          <img src={mask2} alt="" className="img_maks" />
          <div className="mask_poragraf">
            <h6 className="dubai">Madrid</h6>
            <p className="car_here">Car hire in 75 pick-up locations</p>
            <p className="from">From $ 669,00 per day</p>
            <p className="dubai_serch">Search rental cars in Dubai</p>
          </div>
        </div>
        <div className="box_maks">
          <img src={mask3} alt="" className="img_maks" />
          <div className="mask_poragraf">
            <h6 className="dubai">Paris</h6>
            <p className="car_here">Car hire in 75 pick-up locations</p>
            <p className="from">From $ 669,00 per day</p>
            <p className="dubai_serch">Search rental cars in Dubai</p>
          </div>
        </div>
        <div className="box_maks">
          <img src={mask4} alt="" className="img_maks" />
          <div className="mask_poragraf">
            <h6 className="dubai">Dubai</h6>
            <p className="car_here">Car hire in 75 pick-up locations</p>
            <p className="from">From $ 669,00 per day</p>
            <p className="dubai_serch">Search rental cars in Dubai</p>
          </div>
        </div>
        <div className="box_maks">
          <img src={mask5} alt="" className="img_maks" />
          <div className="mask_poragraf">
            <h6 className="dubai">Roma</h6>
            <p className="car_here">Car hire in 75 pick-up locations</p>
            <p className="from">From $ 669,00 per day</p>
            <p className="dubai_serch">Search rental cars in Dubai</p>
          </div>
        </div>        <div className="box_maks">
          <img src={mask6} alt="" className="img_maks" />
          <div className="mask_poragraf">
            <h6 className="dubai">Jakarta</h6>
            <p className="car_here">Car hire in 75 pick-up locations</p>
            <p className="from">From $ 669,00 per day</p>
            <p className="dubai_serch">Search rental cars in Dubai</p>
          </div>
        </div>
      </section>
    </>
  )
}
