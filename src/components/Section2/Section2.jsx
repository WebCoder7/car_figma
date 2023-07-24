import "./style.css"
import carin1 from "../../assets/image/carin1.svg"
import carin2 from "../../assets/image/carin2.svg"
import carin3 from "../../assets/image/carin3.svg"


export default function Section2() {
  return (
    <>
      <h1 className="our">Our Other Services</h1>
      <section2 className="sections2">
        <div className="card_box">
          <img src={carin1} alt="" className="carin1" />
          <div className="private">
            <h5 className="charts">Private Charter</h5>
            <p className="mobile">Pinjam Mobil Rent also offers you discreet and speeFdy, transfers via helicopter or private planes.</p>
          </div>
        </div>
        <div className="card_box">
          <img src={carin2} alt="" className="carin1" />
          <div className="private">
            <h5 className="charts">Chauffer Driven Car Rentals</h5>
            <p className="mobile">Our chauffers are professional drivers who provide a discreet, reliable punctual and professional service.</p>
          </div>
        </div>
        <div className="card_box">
          <img src={carin3} alt="" className="carin1" />
          <div className="private">
            <h5 className="charts">Wedding Car Rentals</h5>
            <p className="mobile">If you want to celebrate your wedding in style and elegance, choose one car from our luxury collection.</p>
          </div>
        </div>
      </section2>
    </>
  )
}
